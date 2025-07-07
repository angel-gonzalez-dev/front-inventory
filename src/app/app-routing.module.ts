import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { DashboardRoutingModule } from './modules/dashboard/dashboard-routing.module';

const routes: Routes = [
  //a-route-path-default
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {enableTracing : false, useHash: true}
  ),
  DashboardRoutingModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Archivo de rutas hijas  no son forRoot son foreach

