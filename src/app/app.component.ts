import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basics';

  login() {
    localStorage.setItem('user', 'ashish');
  }

  logout() {
    localStorage.removeItem('user');
  }
}
