import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './constants/users';
import { Header } from './header/header';
import { Tasks } from './tasks/tasks';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('To-Do using Angular');
  users = Users;
  selectedUserId: number | undefined;
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
  onSelectUser(userId: number) {
    this.selectedUserId = userId;
  }
}
