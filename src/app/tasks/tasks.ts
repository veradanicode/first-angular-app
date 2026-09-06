import { Component, input, output } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { newTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  name = input.required<string>();
  userId = input.required<string>();
  newtask = output<string>();
  isAddTaskVisible = false;

  constructor(private tasksService: TasksService) {}

  getUserTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }

  onAddTask() {
    this.isAddTaskVisible = true;
  }

  onCloseTask() {
    this.isAddTaskVisible = false;
  }

  onCreateTask(task: newTask) {
    this.tasksService.onAddTask(task, this.userId());
    this.isAddTaskVisible = false;
  }
}
