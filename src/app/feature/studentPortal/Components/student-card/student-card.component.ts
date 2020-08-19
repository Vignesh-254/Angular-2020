import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppdataService } from 'src/app/appdata.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {
  @Input() studentValue: any = {};
  selectedValue:string;
  errorMessage : string = "NA"
  constructor(private router: Router,private appdata: AppdataService) { }

  ngOnInit(): void {
    // this.selectedValue = this.route.snapshot.paramMap.name;
    this.studentValue= this.appdata.getStudentDetail();
    console.log(this.studentValue);
  }
  backtoHome(){
    this.router.navigate(['']);
  }
}
