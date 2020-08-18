import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppdataService {
  url: string = "http://localhost:3001/school/student-details";

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.url);
  }
}
