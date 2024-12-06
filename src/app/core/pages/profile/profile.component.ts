import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('MTEA:ACESSTOKEN');
    this.router.navigate(['/auth/login']);
  }
}
