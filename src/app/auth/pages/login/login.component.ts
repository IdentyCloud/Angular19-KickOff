import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@/app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authService = inject(AuthService);

  formulario: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router) { }

  async onSubmit() {
    try {
      const response = await this.authService.loginUser(this.formulario.value);
      localStorage.setItem('MTEA:ACESSTOKEN', response['accessToken']);

      console.log('Usuario logueado con éxito', response);

      this.router.navigate(['/core/dashboard']);
    } catch (error) {
      console.log('Error en login', error);
    }
  }
}
