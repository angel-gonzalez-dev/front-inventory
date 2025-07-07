import { NgModule } from '@angular/core';

//a-routers para generar el archivo de rutas
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard.component';

export const routes: Routes = [
    //a-route-path-lazy 
    {
        path: 'dashboard',
        component: DashboardComponent,//referencia al componente que muestre o cargue 
        loadChildren: () => import('./router.child.module').then(m => m.RouterChildModule)
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
