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
  loginName = '';
  password = '';
  message = '';

  login(): void{
      
      this.http.post("http://lumeanit.de:3000/MyPets/api/login", {}).subscribe((data) => {
        if(!data['error']){
          this.message = "Willkommen zu MyPets " + this.loginName + "!";
        }else{
          this.message = "Fehler beim Login!";
        }
      });


  }
}
