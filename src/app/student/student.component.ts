import { Component, OnInit } from '@angular/core';
import { StudentDetails } from '../shared/modal';
import { School } from '../shared/data.modal'
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  public details:Array<StudentDetails>
  public name:string
  constructor(public school : School) { 
    this.details = this.school.data
    // console.log('details' +this.details);
    // console.log(this.school.data);
  }

  ngOnInit(): void {
  }
  onClick(value){
      this.name = value
      console.log(this.name)
  }

}
