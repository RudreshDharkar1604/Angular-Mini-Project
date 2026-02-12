import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {
  loginForm;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
     
  }

  errorMessage = '';


login() {
  this.errorMessage = '';
  if(!this.loginForm.value.email || !this.loginForm.value.password || !this.loginForm.value.role){
    alert("All fields are required !")
    return;
  }
  this.auth.login(this.loginForm.value).subscribe({

    next: (res: any) => {
      console.log('Login success:', res);

      this.auth.saveSession(res.token, res.role);

      if (res.role === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/customer']);
      }
    },

    error: (err) => {
      console.log('Error block called');
      console.log(err.error.detail || err.error.detail[0]);
      alert( err.error.detail[0].msg || err.error.detail)
      // show error message
      this.errorMessage =
        err.error?.detail ||
        err.error?.message ||
        'Invalid email or password';
    }
  });
}


}
