import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  title = 'MyPets';
  loginname = '';
  password = '';
  message = '';
  animals = '';

  login(): void {

    this.http.post("http://lumeanit.de:3000/MyPets/api/login", { username: this.loginname, password: this.password }).subscribe((data) => {
      this.message = "Willkommen zu MyPets " + data['name'] + " " + data['lastname'] + "!";
      this.animals = "Deine bisherigen Tiere: ";
      data['pets'].forEach(animal => {
        this.animals += '<br>' + animal.name;
      });
    }, (err) => {
      this.message = "Fehler beim Login!";
    });
  }
}
