import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { server_address } from "./global";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(user:any)
  {
    return this.http.post<any>(`${server_address}/login`,user);
  }
  loggedIn() {
    return !! localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
