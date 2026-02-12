import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html'
})
export class RegisterComponent {

  registerForm;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['']
    });
  }
   errorMessage = ''
  register() {
    console.log(this.registerForm.value);
    if(!this.registerForm.value.email || !this.registerForm.value.password || !this.registerForm.value.role){
    alert("All fields are required !")
    return;
  }

    this.auth.register(this.registerForm.value).subscribe({
      next:(res:any)=>{
      console.log('Register success:', res);
        this.router.navigate(['/login'])
        alert('Registration Successful')
      },
      
      error: (err) => {
      console.log('Error block called');
      console.log(err.error.detail);
      alert(err.error.detail)
      // show error message
      this.errorMessage =
        err.error?.detail ||
        err.error?.message ||
        'Invalid email or password';
    }
  });

    
  }
}
