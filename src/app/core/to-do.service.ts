import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../models';

@Injectable({ providedIn: 'root' })
export class ToDoService {
  private readonly baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<Task[]>(`${this.baseUrl}tasks`);
  }
}
