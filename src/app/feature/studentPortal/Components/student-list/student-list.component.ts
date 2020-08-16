import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { School } from 'src/app/shared/data.modal';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  @Output() person = new EventEmitter();
  errorMessage: string = "NA";
  constructor(public school : School) { 
  }
  
  ngOnInit(): void {
  }

  studentDetails(event){
    this.person.emit(event);
  }
}
