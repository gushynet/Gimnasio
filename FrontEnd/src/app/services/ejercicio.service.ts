import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EjercicioService 
{
  endpoint = 'http://localhost:8080/api/ejercicios';
  constructor (private HttpClient : HttpClient) 
  {

  }

  getEjercicios()
  {
    return this.HttpClient.get(this.endpoint);
  }
}
