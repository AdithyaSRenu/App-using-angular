import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddressComponent } from './address/address.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PhoneComponent } from './phone/phone.component';
import { StudentsComponent } from './students/students.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'users',component:UsersComponent},
{path:'aboutus',component:AboutusComponent},
{path:'contactus',component:ContactusComponent,
children:[
  {path:'address',component:AddressComponent},
  {path:'phone',component:PhoneComponent}
]},
{path:'students',component:StudentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
