import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisEjerciciosPageRoutingModule } from './mis-ejercicios-routing.module';

import { MisEjerciciosPage } from './mis-ejercicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisEjerciciosPageRoutingModule
  ],
  declarations: [MisEjerciciosPage]
})
export class MisEjerciciosPageModule {}
