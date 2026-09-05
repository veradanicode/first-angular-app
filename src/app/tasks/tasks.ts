import { Component, input, output } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { newTask } from './task/task.model';

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

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  getUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId());
  }

  onTaskCompleted(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onAddTask() {
    this.isAddTaskVisible = true;
  }

  onCancelTask() {
    this.isAddTaskVisible = false;
  }

  onCreateTask(task: newTask) {
    this.tasks.unshift({
      id: 't' + Date.now().toString(),
      userId: this.userId(),
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });
    this.isAddTaskVisible = false;
  }
}
