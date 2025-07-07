import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
      DashboardComponent,
      HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
  //Router module se ocupa para que tome las configuraciones del modulo
})
export class DashboardModule { }
