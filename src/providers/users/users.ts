import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../api';
import { Storage } from '@ionic/storage';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  private API_URL = API_URL;
  public token: any;
  
  constructor(public http: HttpClient, private storage: Storage) {}

  // Register (SingUp)
  register(first_name: string, last_name: string, email: string, password: string, password_confirmation: string) {
    return new Promise((resolve, reject) => {
      // Payload to SignUp
      var data = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        encrypted_password: password,
        encrypted_password_confirmation: password_confirmation
      };
 
      // Send POST request
      this.http.post(this.API_URL + 'sign_up', data)
        .subscribe((result: any) => {
          // Return JSON
          resolve(result);
        },
        (error) => {
          console.log(error)
          reject(error);
        });
    });
  }

  // Login (SignIn)
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      // Payload to SignIn
      var data = {
        email: email,
        password: password
      };
 
      // Send POST request
      this.http.post(this.API_URL + 'sign_in', data)
        .subscribe((result: any) => {
          // Save JWT
          this.token = result.data.auth_token;
          this.setToken(result.data.auth_token);
          
          // Return JSON
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }

  // Get Token 
  getToken() {
    return this.storage.get('auth_token')
  }

  // Set JWT for User
  private setToken(token) {
    return this.storage.set('auth_token', token);
  }
}
