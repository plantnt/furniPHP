import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginFormData = {
    username: '',
    password: ''
  }
  constructor(private http: HttpClient){}
  
  logInSubmit(){
    this.http.post('http://localhost:4200/logIn', this.loginFormData)
    .subscribe((response) => {
      console.log('Response from backend: ',response)
    })
  }
}
