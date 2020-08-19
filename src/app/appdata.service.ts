import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AppdataService {
  url: string = "http://localhost:3001/school/student-details";
  studentDetail:any;
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.url);
  }
  setStudentDetail(event){
    console.log(event);
    this.studentDetail = event;
  }
  getStudentDetail(){
    return this.studentDetail;
  }
}
