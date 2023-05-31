
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormControlName} from '@angular/forms';


@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent{

  

  users=[
    {Code:"emp1",Name:"Karthik",Gender:"Male",AnnualSalary:"5500",DateofBirth:"25/6/1988"},
    {Code:"emp2",Name:"Sachin",Gender:"Male",AnnualSalary:"5700.95",DateofBirth:"09/6/1982"},
    {Code:"emp3",Name:"Rahul",Gender:"Male",AnnualSalary:"5900",DateofBirth:"12/8/1979"},
    {Code:"emp4",Name:"Mary",Gender:"Female",AnnualSalary:"6500.826",DateofBirth:"14/10/1980"}
  ]



  feedbackForm = new FormGroup({
    user:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    reviews:new FormControl('',Validators.required)
  })
  CustomerReveiws(){
   console.warn(this.feedbackForm.value)
  }
  get user()
  {
    return this.feedbackForm.get('user')
  }
  get city()
  {
    return this.feedbackForm.get('city')
  }
  get reviews()
  {
    return this.feedbackForm.get('reviews')
  }


  
  

}