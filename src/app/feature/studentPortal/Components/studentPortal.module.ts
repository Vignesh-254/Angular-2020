import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { StyledirectiveDirective } from './styledirective.directive';
import { StudentHeaderComponent } from './student-header/student-header.component';



@NgModule({
  declarations: [
    StudentComponent,
    StudentDetailComponent,
    StudentListComponent,
    StudentCardComponent,
    StyledirectiveDirective,
    StudentHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [StudentComponent],
  exports: [
    StudentComponent,
    StudentDetailComponent,
    StudentListComponent,
    StudentCardComponent,
    StudentHeaderComponent
  ]
})
export class StudentPortalModule { }
