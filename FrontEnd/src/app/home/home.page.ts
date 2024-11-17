import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  denominacion: string = "Press banca";
  GrupoMuscular: string = "Pecho";

  constructor(private router: Router) {}

  gotoMisEjercicios()
  {
    this.router.navigateByUrl("/mis-ejercicios");
  }
}
