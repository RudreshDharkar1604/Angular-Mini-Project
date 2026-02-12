import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {

  constructor(private auth: AuthService, private router: Router) {}

  get isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  get role() {
    return localStorage.getItem('role');
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
