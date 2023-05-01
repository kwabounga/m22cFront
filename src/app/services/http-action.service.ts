import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpActionService {

  constructor(private http: HttpClient) { }


  getUrl(url:string) {
    console.log(url)
    return this.http.get(url);
  }
}
