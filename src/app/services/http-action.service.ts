import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from '../interfaces/state';
@Injectable({
  providedIn: 'root'
})
export class HttpActionService {

  constructor(private http: HttpClient) { }


  getUrl(url:string) {
    // console.log(url)
    let headers = {
      "Content-Type": "application/json"
    }
    /* if(state.islogged){

    } */
    return this.http.get<State>(url,{headers: headers});
  }
}
