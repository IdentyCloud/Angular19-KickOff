import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { LoginCredentials, User } from '@/app/auth/interfaces/auth.interface';
import { environment } from '@/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private httpClient = inject(HttpClient);

    registerUser(user: User) {
        /*
        return firstValueFrom(
            this.httpClient.post(`${environment.apiUrl}/register`, user)
        )*/

        return {
            accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6IkNPTExBQk9SQVRPUiIsImlhdCI6MTUxNjIzOTAyMn0.CfE9t5dDOHJIVw6BWzJgU2x0iPqOXvj7fNk6J-pt-uk',
        };
    }

    loginUser(credentials: LoginCredentials) {
        /*
        return firstValueFrom(
            this.httpClient.post<any>(`${environment.apiUrl}/login`, credentials)
        )
        */
        return {
            accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6IkNPTExBQk9SQVRPUiIsImlhdCI6MTUxNjIzOTAyMn0.CfE9t5dDOHJIVw6BWzJgU2x0iPqOXvj7fNk6J-pt-uk',
        };
    }

    getAuthToken() {
        return localStorage.getItem('MTEA:ACESSTOKEN') || '';
    }

}