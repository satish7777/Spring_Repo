import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { user } from '../login/user';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthenticationService {

  private authUrl: string;
  private authUrl1: string;
  constructor(private httpclient:HttpClient) {
   // this.authUrl = "http://localhost:3000/auth/v1/";
    this.authUrl = "http://localhost:8089/api/v1/auth/login";   
    this.authUrl1 = "http://localhost:8089/api/v1/auth/";    
  }

  authenticateUser(data) {
    return this.httpclient.post(this.authUrl, data);
  }

  setBearerToken(token) {
    localStorage.setItem('bearerToken', token);
  }

  getBearerToken() {
    return localStorage.getItem('bearerToken');

  }
  public createUser(user):Observable<user>{
    return this.httpclient.post<any>(`${this.authUrl1}/register`, user);
  }

  isUserAuthenticated(token): Promise<boolean> {

    return this.httpclient.post(`${this.authUrl}isAuthenticated`, {}, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }).pipe(
      map(res => res['isAuthenticated'])
      ).toPromise();
  }

  public setUserId(userId : string){
    localStorage.setItem('userId', userId);
  }
  public getUserId(){
    return localStorage.getItem('userId');
  }
}
