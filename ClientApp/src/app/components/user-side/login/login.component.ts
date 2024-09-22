import { Component, inject } from "@angular/core";
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../../services/auth.service";
import { ILogin } from "../../../interfaces/Login";

 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formBuilder = inject(FormBuilder);
  router = inject(Router);
  auth= inject(AuthService)

  user = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  login() {
    if (this.user.valid) {
      const user: ILogin = this.user.value as ILogin;
    this.auth.login(user).subscribe(
      res => {
        localStorage.setItem('authToken', res.token);
        // this.router.route(['/order']);
      },
      err => console.error(err)
    );
    }
    else {
      console.log('Form is not valid');
    }
  }
}
