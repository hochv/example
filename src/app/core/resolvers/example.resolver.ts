import { ResolveFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ExampleService } from '../../services/example.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any> {
  constructor(private exampleService: ExampleService) { }

  resolve(): Observable<any> {
    return this.exampleService.getUserData(localStorage.getItem('userId') || ''); // Fetch data here
  }
};
