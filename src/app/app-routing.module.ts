import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { DisplayComponent } from './mobile/display/display.component';
import { FooterComponent } from './footer/footer.component';
import { Display1Component } from './laptop/display1/display1.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"footer",component:FooterComponent},
  {path:"STUDENT",loadChildren:()=> import("./student/student.module").then(n=>n.StudentModule)},
  {path:"Mobile",component:MobileComponent},
  {path:"mobile/:id/display",component:DisplayComponent},
  {path:"Laptop",component:LaptopComponent},
  {path:"laptop/:id/display1",component:Display1Component}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
