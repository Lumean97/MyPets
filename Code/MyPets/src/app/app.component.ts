import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {

  constructor(private http: HttpClient) { }

  title = 'MyPets';
  loginname = '';
  password = '';
  message = '';
  animals = '';

  login(): void {

    this.http.post("http://localhost:3000/MyPets/api/login", { username: this.loginname, password: this.password }).subscribe((data) => {
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
