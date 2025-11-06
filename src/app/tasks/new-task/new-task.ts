import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({ required: true }) userId!: number;
  @Output() cancel = new EventEmitter<void>();
  private tasksService = inject(TasksService);
  enteredTitle = '';
  enteredDescription = '';
  enteredDueDate = '';
  onCancel() {
    this.cancel.emit();
  }
  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        description: this.enteredDescription,
        dueDate: this.enteredDueDate,
      },
      this.userId
    );
    this.cancel.emit();
  }
}
