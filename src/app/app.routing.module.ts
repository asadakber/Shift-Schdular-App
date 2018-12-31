import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/auth/forgotpassword/forgotpassword.component';
import { EmployeeComponent } from './components/page/employee/employee.component';
import { ManagerComponent } from './components/page/manager/manager.component';
import { AdminComponent } from './components/page/admin/admin.component';
import { SchdulesComponent } from './components/page/manager/schdules/schdules.component';
import { EmployementComponent } from './components/page/manager/employement/employement.component';

export const router: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'register',
        component: RegisterComponent
    },

    {
        path: 'dashboard',
        component: DashboardComponent
    },

    {
        path: 'forgot',
        component: ForgotpasswordComponent
    },

    {
        path: 'employee',
        component: EmployeeComponent
    },

    {
        path: 'manager',
        component: ManagerComponent
    },

    {
        path: 'admin',
        component: AdminComponent
    },

    {
        path: 'schdules',
        component: SchdulesComponent
    },

    {
        path: 'employement',
        component: EmployementComponent
    },


]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);