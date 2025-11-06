import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { TaskModel } from './task.model';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskModel;
  private tasksService = inject(TasksService);
  onTaskComplete() {
    this.tasksService.removeTask(this.task.id);
  }
}
