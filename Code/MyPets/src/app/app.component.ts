import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPets';
  loginName = '';
  password = '';
  message = '';

  login(): void{
      this.message = "Willkommen zu MyPets " + this.loginName + "!";
  }
}
