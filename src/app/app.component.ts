import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular Typescript';
  myData= [
    {
      "name": "Person1",
      "age": 23,
      "email": "hhhh@gmail.com"
    },
    {
      "name": "Person2",
      "age": 16,
      "email": "iiii@gmail.com"
    },
    {
      "name": "Person3",
      "age": 20,
      "email": "jjj@gmail.com"
    }
  ]
  myForm;
  constructor() {
    this.myForm = new FormGroup({
      "name":  new FormControl(),
      "age": new FormControl(),
      "email": new FormControl()
    })
  }

  formSubmit() {
    this.myData.push(this.myForm.value)
  }
}




