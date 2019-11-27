import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { v4 as uuid } from 'uuid';

import { Task } from '../models';

@Injectable({ providedIn: 'root' })
export class ToDoService {
  private readonly baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  createTask(task: Task) {
    return this.http.post(`${this.baseUrl}tasks`, { ...task, id: uuid() });
  }

  deleteTask(taskId: string) {
    return this.http.delete(`${this.baseUrl}tasks/${taskId}`);
  }

  getTasks() {
    return this.http.get<Task[]>(`${this.baseUrl}tasks`);
  }

  updateTask(task: Task) {
    return this.http.put(`${this.baseUrl}tasks/${task.id}`, task);
  }
}
