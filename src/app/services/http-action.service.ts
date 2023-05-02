import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from '../interfaces/state';
@Injectable({
  providedIn: 'root'
})
export class HttpActionService {
  constructor(private http: HttpClient) { }


  getUrl(url:string, state:State|undefined) {
    // console.log(url)
    let headers:any = {
      "Content-Type": "application/json"
    }
    if (state?.basicAuth){
      headers['authorization'] = state.basicAuth;
    } 
    return this.http.get<State>(url,{headers: headers});
  }
}
