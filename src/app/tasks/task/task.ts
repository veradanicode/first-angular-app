import { Component, input, inject } from '@angular/core';
import { TaskComponent } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<TaskComponent>();
  private tasksService = inject(TasksService);

  onRemoveTask() {
    this.tasksService.onRemoveTask(this.task().id);
  }
}
