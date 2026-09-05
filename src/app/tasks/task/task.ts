import { Component, input, output } from '@angular/core';
import { TaskComponent } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<TaskComponent>();
  completed = output<string>();

  onCompleteTask() {
    this.completed.emit(this.task().id);
  }
}
