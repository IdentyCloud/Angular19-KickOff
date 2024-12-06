import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private baseUrl = 'https://jsonplaceholder.typicode.com/users';

    private httpClient = inject(HttpClient);

    getEmpleados() {
        return firstValueFrom(this.httpClient.get<any[]>(this.baseUrl));
    }
}