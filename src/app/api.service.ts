import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseUrl: string='https://api.quotable.io/'
  constructor(private http : HttpClient) { }

  getdata(url : any) {
    const getUrl = this.baseUrl + url;
    return this.http.get(getUrl);
  }
}
