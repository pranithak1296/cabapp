import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasserveComponent } from './areasserve/areasserve.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FareInformationComponent } from './fare-information/fare-information.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SingnupComponent } from './singnup/singnup.component';
import { SchedulecabComponent } from './schedulecab/schedulecab.component';


const routes: Routes = [
{path:'',component: HomepageComponent},
{path:'signup',component:SingnupComponent},
{path:'login',component:LoginComponent},
// {path:'areasserve',component:AreasserveComponent},
// {path:'fareinformation',component:FareInformationComponent},
// {path:'schedulecab',component:SchedulecabComponent},
// {path:'contactus',component:ContactusComponent}
{path:'',redirectTo:'/HomepageComponent', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
