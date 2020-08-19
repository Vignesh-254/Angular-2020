import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { School } from 'src/app/shared/data.modal';
import { AppdataService } from 'src/app/appdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  @Output() person = new EventEmitter();
  errorMessage: string = "NA";
  details:any = [];
  constructor(public school : School,public appdata: AppdataService,private router: Router) { 
    
  }
  
  ngOnInit(): void {
    this.appdata.getData().subscribe(data=>{
      this.details = data;
    });
  }

  studentDetails(event){
    this.appdata.setStudentDetail(event);
    this.router.navigate(['student-detail']);
    // this.person.emit(event);
  }
}
