import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentModule } from './student/student.module';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { ReactiveFormsModule} from '@angular/forms';
import { EmpComponent } from './emp/emp.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { DisplayComponent } from './mobile/display/display.component';
import { FooterComponent } from './footer/footer.component';
import { Display1Component } from './laptop/display1/display1.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedbackFormComponent,
    EmpComponent,
    MobileComponent,
    LaptopComponent,
    DisplayComponent,
    FooterComponent,
    Display1Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
