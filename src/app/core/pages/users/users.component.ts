import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';

import { UsersService } from '@/app/core/services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  arrayUsers: any[] = [];
  isLoading: boolean = true;

  usersService = inject(UsersService);

  constructor(private location: Location) { }

  async ngOnInit() {
    try {
      const response = await this.usersService.getEmpleados();
      this.arrayUsers = response;
    } catch (error) {
      console.error('Error al cargar usuarios', error);
    } finally {
      this.isLoading = false;
    };
  }

  goBack() {
    this.location.back();
  }
}
