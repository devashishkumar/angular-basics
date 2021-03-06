import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitenav',
  templateUrl: './sitenav.component.html',
  styleUrls: ['./sitenav.component.css']
})
export class SitenavComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isUserLoggedIn = localStorage.getItem('user') !== null;
  }

  login() {
    localStorage.setItem('user', 'ashish');
    this.isUserLoggedIn = true;
  }

  logout() {
    localStorage.removeItem('user');
    this.isUserLoggedIn = false;
    this.router.navigate(['/login']);

  }

}
