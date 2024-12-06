import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  constructor(
    private router: Router,
    private location: Location,
  ) { }

  goToHome() {
    this.router.navigate(['/']);
  }

  goBack() {
    this.location.back();
  }
}
