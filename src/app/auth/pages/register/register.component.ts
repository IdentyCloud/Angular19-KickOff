import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@/app/auth/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  authService = inject(AuthService);

  formulario: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  async onSubmit() {
    try {
      const response = await this.authService.registerUser(this.formulario.value);
      console.log('Usuario registrado con éxito', response);
    } catch (error) {
      console.error('Error al registrar', error);
    }
  }
}
