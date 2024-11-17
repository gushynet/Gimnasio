import { Component, OnInit } from '@angular/core';
import { EjercicioService } from '../services/ejercicio.service';

@Component({
  selector: 'app-mis-ejercicios',
  templateUrl: './mis-ejercicios.page.html',
  styleUrls: ['./mis-ejercicios.page.scss'],
})
export class MisEjerciciosPage implements OnInit
 {
    ejercicios:any = {};
    


    constructor(private EjercicioService: EjercicioService) { }

    ngOnInit() 
    {
      this.getAllEjercicios();
    }

    getAllEjercicios()
    {
      this.EjercicioService.getEjercicios().subscribe(response =>
      {
        this.ejercicios = response;
      });
    }
}
