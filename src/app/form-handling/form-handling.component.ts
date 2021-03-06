import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-handling',
  templateUrl: './form-handling.component.html',
  styleUrls: ['./form-handling.component.css']
})
export class FormHandlingComponent implements OnInit {

  serviceData: any = {
    firstname: 'Ashish',
    lastname: 'Kumar',
    email: 'ashish@gmail.com',
    option: 'N'
  };
  constructor() { }

  ngOnInit(): void {
  }

  checkFormData(data) {
    console.log(data, this.serviceData, '21');
  }

}
