//Creando modulos a-module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

//import { NameComponent } from './name.component';
//a-routes crear routes
const childRoutes: Routes = [
    //a-route-path-eager
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent }
]

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule],
})

export class RouterChildModule { }
