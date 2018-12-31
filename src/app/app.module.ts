import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './providers/auth.service';
import { environment } from 'src/environments/environment';
import { routes } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule  } from '@ngrx/effects';
// import { authReducer } from './store/auth.reducers';
import { ForgotpasswordComponent } from './components/auth/forgotpassword/forgotpassword.component';
import { EmployeeComponent } from './components/page/employee/employee.component';
import { ManagerComponent } from './components/page/manager/manager.component';
import { AdminComponent } from './components/page/admin/admin.component';
import { SchdulesComponent } from './components/page/manager/schdules/schdules.component';
import { EmployementComponent } from './components/page/manager/employement/employement.component';
// import { UserEffects  } from './store/auth.effects';
import { EmployeeService } from './providers/employee.service'
import { SchdularService } from './providers/schdular.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotpasswordComponent,
    EmployeeComponent,
    ManagerComponent,
    AdminComponent,
    SchdulesComponent,
    EmployementComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    routes,
    // StoreModule.forRoot({
    //   user: authReducer
    // }),
    // EffectsModule.forRoot([
    //   UserEffects
    // ])
  ],
  providers: [AuthService, EmployeeService, SchdularService],
  bootstrap: [AppComponent]
})
export class AppModule { }
