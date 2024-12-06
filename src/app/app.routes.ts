import { Routes } from '@angular/router';

import { HomeComponent } from '@/app/pages/home/home.component';
import { NotFoundComponent } from '@/app/pages/not-found/not-found.component';

import { LoginComponent } from '@/app/auth/pages/login/login.component';
import { RegisterComponent } from '@/app/auth/pages/register/register.component';

import { LayoutComponent } from '@/app/core/layouts/layout.component';
import { UsersComponent } from '@/app/core/pages/users/users.component';
import { DashboardComponent } from '@/app/core/pages/dashboard/dashboard.component';
import { ProfileComponent } from '@/app/core/pages/profile/profile.component';

import { AuthGuard } from '@/app/guards/auth.guard';
import { RoleGuard } from '@/app/core/guards/role.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [RoleGuard],
    },
    {
        path: 'auth',
        canActivate: [AuthGuard, RoleGuard],
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'register',
                component: RegisterComponent
            },
        ],
    },
    {
        path: 'core',
        component: LayoutComponent,
        canActivate: [AuthGuard, RoleGuard],
        children: [
            {
                path: 'users',
                component: UsersComponent
            },

            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
