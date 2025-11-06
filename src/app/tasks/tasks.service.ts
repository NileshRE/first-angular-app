import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private Tasks = [
    {
      id: 't1',
      userId: 1,
      title: 'Master Angular',
      description: 'Learn Angular Component Building, Signals, getting input and output',
      time: '2025-11-06T10:00',
    },
    {
      id: 't2',
      userId: 2,
      title: 'Write Blog',
      description: 'Write a blog on Angular Signals and Components',
      time: '2025-11-06T14:00',
    },
    {
      id: 't3',
      userId: 3,
      title: 'Grocery Shopping',
      description: 'Buy vegetables, fruits, and other essentials',
      time: '2025-11-06T17:00',
    },
    {
      id: 't4',
      userId: 3,
      title: 'Workout',
      description: 'Go for a 30-minute run and do strength training',
      time: '2025-11-06T19:00',
    },
    {
      id: 't5',
      userId: 1,
      title: 'Read a Book',
      description: 'Read 50 pages of a novel or non-fiction book',
      time: '2025-11-06T21:00',
    },
    {
      id: 't6',
      userId: 5,
      title: 'Plan Weekend Trip',
      description: 'Research destinations and plan itinerary for the weekend getaway',
      time: '2025-11-06T18:00',
    },
  ];

  getUserTasks(userId: number) {
    return this.Tasks.filter((task) => task.userId === userId);
  }
  addTask(taskData: TaskFormData, userId: number) {
    this.Tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId || Math.ceil(Math.random() * 10),
      title: taskData.title,
      description: taskData.description,
      time: new Date(taskData.dueDate).toString(),
    });
  }
  removeTask(taskId: string) {
    this.Tasks = this.Tasks.filter((task) => task.id !== taskId);
  }
}
