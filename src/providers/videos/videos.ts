import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../api';
import { UsersProvider } from '../users/users';

/*
  Generated class for the VideosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VideosProvider {
  private API_URL = API_URL;

  constructor(public http: HttpClient, private userProvider: UsersProvider) {}

  // Return all videos
  getAll(page: number) {
    return new Promise((resolve, reject) => {
      /*
      * Get information (getToken) through Storage, is asynchronously 
      */
      this.userProvider.getToken().then((token) => {
        let headers = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) }

        // Send GET with param "page"
        this.http.get(this.API_URL + 'videos/?page=' + page, headers)
          .subscribe((result: any) => {
            // Return JSON
            resolve(result);
          },
          (error) => {
            reject(error);
          });
      })
    });
  }

  // Return video based in ID
  getVideo(id: number) {
    return new Promise((resolve, reject) => {
      /*
      * Get information (getToken) through Storage, is asynchronously 
      */
      this.userProvider.getToken().then((token) => {
        let headers = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) }

        // Send GET
        this.http.get(API_URL + 'videos/' + id, headers)
          .subscribe((result: any) => {
            // Return JSON
            resolve(result);
          },
          (error) => {
            reject(error);
          });
        })
    });
  }
}
