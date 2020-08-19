import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './feature/studentPortal/Components/student-list/student-list.component';
import { StudentCardComponent } from './feature/studentPortal/Components/student-card/student-card.component';


const routes: Routes = [
  {
    path:'',
    component: StudentListComponent, 
    pathMatch: 'full',
  },
  {
    path:'student-detail',
    component: StudentCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
