import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  constructor() { }
  private data = new BehaviorSubject<string>('initial');
  data$ = this.data.asObservable();

  updateData(value: string) {
    this.data.next(value);
  }
}
