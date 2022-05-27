import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root',
})
export class BankingService {
  private urlApi: string;
  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:8080'; // ce lien est pour l'exercice de l'API  de jeremy , le chager à l'ulrl de mon API
  }

  getAccountByIban(accountIban: string) {
    const token = localStorage.getItem('token');
    return this.http.get<Account>(`${this.urlApi}/accounts/${accountIban}`, {
      //mettre l 'url de mon API
      headers: { Authorization: `Bearer ${token}` },
    }); // cette instruction nous retourne un obszervable. C'est une route back end et elle page par le service.
  }

  getAccounCurrentUser() {
    const token = localStorage.getItem('token');
    return this.http.get<any>(`${this.urlApi}/accounts/current-user`, {
      //mettre l 'url de mon API
      headers: { Authorization: `Bearer ${token}` },
    }); // cette instruction nous retourne un obszervable. C'est une route back end et elle page par le service.
  }
}
