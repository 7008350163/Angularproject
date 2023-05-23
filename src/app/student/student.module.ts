import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksComponent } from './marks/marks.component';
import { AddressComponent } from './address/address.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';


const student: Routes = [
  {path:"address",component:AddressComponent},
  {path:"marks",component:MarksComponent},
  {path:"studentdetails",component:StudentdetailsComponent}
];

@NgModule({
  declarations: [
    MarksComponent,
    AddressComponent,
    StudentdetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(student)
  ],
  exports:[
    MarksComponent,
    AddressComponent,
    StudentdetailsComponent,
    RouterModule
  ]
})
export class StudentModule { }
