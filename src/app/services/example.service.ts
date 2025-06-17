import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  constructor(private http: HttpClient) { }
  private data = new BehaviorSubject<string>('initial');
  data$ = this.data.asObservable();

  updateData(value: string) {
    this.data.next(value);
  }

  getUserData(id: string) {
    return this.http.get('/user', { params: { id } })
  }

}
