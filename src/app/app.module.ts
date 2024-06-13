import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SingnupComponent } from './singnup/singnup.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AreasserveComponent } from './areasserve/areasserve.component';
import { FareInformationComponent } from './fare-information/fare-information.component';
import { SchedulecabComponent } from './schedulecab/schedulecab.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SingnupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SingnupComponent,
    LoginComponent,
    ContactusComponent,
    AreasserveComponent,
    FareInformationComponent,
    SchedulecabComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
