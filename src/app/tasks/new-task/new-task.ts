import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  selected = output<void>();
  addTask = output<newTask>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  closeDialog() {
    this.selected.emit();
  }

  onCreateTask() {
    const newCreatedTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    };
    this.addTask.emit(newCreatedTask);
  }
}
