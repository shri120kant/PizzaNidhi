import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from './pizza/pizza';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  uri = 'http://localhost:4000/pizza';
  
  constructor(public httpClient:HttpClient) { }
  
}
