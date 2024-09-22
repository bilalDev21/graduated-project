import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { Router, RouterLink } from '@angular/router';
import { IRegister } from '../../../interfaces/Register';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  formBuilder = inject(FormBuilder);
  auth = inject(AuthService);
  router = inject(Router);

  registerForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  onSubmit() {
    if (this.registerForm.valid) {
      const user: IRegister = this.registerForm.value as IRegister;
      this.auth.RegisterUser(user).subscribe(
        (response: any) => {
          console.log('User registered successfully', response);
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('userInfo', JSON.stringify({
            username: response.username,
            email: response.email,
            roles: response.roles
          })); 
          // this.router.navigate(['home-page']);
        },
        error => {
          console.error('Error registering user', error);
         }
      );
    } else {
      console.log('Form is not valid');
    }
  }
}