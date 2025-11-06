import { Component, Input } from '@angular/core';
import { NewTask } from './new-task/new-task';
import { Task } from './task/task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId: number | undefined;
  @Input({ required: true }) userName!: string | undefined;
  isAddingTask = false;
  constructor(private tasksService: TasksService) {}

  onAddingTask() {
    this.isAddingTask = true;
  }
  onCancelTask() {
    this.isAddingTask = false;
  }
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId || 0);
  }

  onAddTask(taskData: TaskFormData) {
    this.tasksService.addTask(taskData, this.userId || 0);
    this.isAddingTask = false;
  }
}
