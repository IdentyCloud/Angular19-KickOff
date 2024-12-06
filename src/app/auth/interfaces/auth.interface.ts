export interface User {
    id?: number;
    username: string;
    email?: string;
    roles: string[];
    token?: string;
}

export interface LoginCredentials {
    username: string;
    password: string;
}