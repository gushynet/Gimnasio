import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisEjerciciosPage } from './mis-ejercicios.page';

const routes: Routes = [
  {
    path: '',
    component: MisEjerciciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisEjerciciosPageRoutingModule {}
