import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboardcls.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [

  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: DashboardComponent, data: {titulo: 'Dashboard'} },
      {
        path: 'progress',
        component: ProgressComponent, data: {titulo: 'Progress'}
      },
      {
        path: 'grafica1',
        component: Grafica1Component, data: {titulo: 'Grafica1'}
      },
      {
        path: 'promesas',
        component: PromesasComponent, data: {titulo: 'Promesas'}
      },
      {
        path: 'account-settings',
        component: AccountSettingComponent, data: {titulo: 'Ajustes de Tema'}
      },
      {
        path: 'rxjs',
        component: RxjsComponent, data: {titulo: 'Rxjs'}
      },
    ],
  },

 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
