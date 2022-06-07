import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';
import { Observable } from 'rxjs/internal/Observable';
import { Useraccount } from '../models/useraccount';
import { UserProfil } from '../models/user-profil';
import { UpdateUserProfil } from '../models/update-user-profil';

@Injectable({
  providedIn: 'root',
})
export class BankingService {
  private urlApi: string;
  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:8080';
  }

  // afficher le relevé compte bancaire
  getAccounCurrentUser() {
    const token = localStorage.getItem('token');
    return this.http.get<Useraccount>(`${this.urlApi}/accounts/current-user`, {
      //mettre l 'url de mon API
      headers: { Authorization: `Bearer ${token}` },
    }); // cette instruction nous retourne un obszervable. C'est une route back end et elle passe par le service.
  }

  getCurrentUserProfile(): Observable<UserProfil> {
    const token = localStorage.getItem('token');
    return this.http.get<UserProfil>(`${this.urlApi}/profiles/current-user`, {
      //mettre l 'url de mon API
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  getAccountById() {
    const token = localStorage.getItem('token');
    return this.http.get<Account>(`${this.urlApi}/accounts`, {
      //mettre l 'url de mon API
      headers: { Authorization: `Bearer ${token}` },
    }); // cette instruction nous retourne un obszervable. C'est une route back end et elle page par le service.
  }

  // creer un profil
  createProfile(profile: UserProfil) {
    const token = localStorage.getItem('token');
    const body = {
      firstName: profile.firstName,
      lastName: profile.lastName,
      mobilePhone: profile.mobilePhone,
      iban: profile.iban,
      threshold: profile.threshold,
    };
    return this.http.post(`${this.urlApi}/profiles`, body, {
      //mettre l 'url de mon API
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  //update un  profil
  updateProfile(updateUserprofile: UpdateUserProfil): Observable<any> {
    const token = localStorage.getItem('token');
    const body = {
      firstName: updateUserprofile.firstName,
      lastName: updateUserprofile.lastName,
      mobilePhone: updateUserprofile.mobilePhone,
      threshold: updateUserprofile.threshold,
    };
    return this.http.put<any>(`${this.urlApi}/profiles`, body, {
      //mettre l 'url de mon API
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  //delete un account
  deleteAccount(account: Account) {
    const token = localStorage.getItem('token');

    return this.http.delete(`${this.urlApi}/accounts/${account}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  /*
  getAllAccounts(): Observable<Account[]> {
    const token = localStorage.getItem('token');

    return this.http.get<Account[]>(`${this.urlApi}/accounts/current-user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
*/
}
