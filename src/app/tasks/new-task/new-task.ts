import { Component, output, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  close = output<void>();
  userId = input.required<string>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  private tasksService = inject(TasksService);

  closeDialog() {
    this.close.emit();
  }

  onCreateTask() {
    this.tasksService.onAddTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate,
      },
      this.userId(),
    );

    this.close.emit();
  }
}
