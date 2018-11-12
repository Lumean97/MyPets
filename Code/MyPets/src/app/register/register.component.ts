import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  title = 'MyPets';
  message = '';
  username = '';
  password = '';
  passwordCheck = '';
  name = '';
  lastname = '';

  register(): void {

    this.http.post("http://lumeanit.de:3000/MyPets/api/register", { username: this.username, password: this.password, name: this.name, lastname: this.lastname }).subscribe((data) => {
      this.message = "Success!"
    }, (err) => {
      this.message = err.error.msg;
    });
  }

  checkPassword(): boolean {
      return this.password.length > 0 && this.password === this.passwordCheck;
  }
}
