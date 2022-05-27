import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { setServers } from 'dns';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private urlApi: string;
  public messager = new Subject<boolean>();
  public newsletter = new Subject<string>();

  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:8080';
  }

  public registerUser(
    username: string,
    password: string,
    confirmPassword: string,
    iban: string
  ) {
    const body = {
      username: username,
      password: password,
      confirmPassword: confirmPassword,
      iban: iban,
    };
    return this.http.post(`${this.urlApi}/users`, body); // dans mon API choisir le nom users.

    // les requètes dans angular sont des observable:
    //this.http.post(`${this.urlApi}/register`, body) = est un observable
  }

  public logIn(username: string, password: string) {
    const body = {
      username: username,
      password: password,
    };
    return this.http.post(`${this.urlApi}/users/sign-in`, body); // dans mon Api choisir le /users/sign-in
  }
}
