import { Component, signal, input } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';


@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  onUserSelected($event: string) {
    this.selectedUserId = $event;
  }
  users = DUMMY_USERS;
  selectedUserId?: string;

  getSelectedUserName() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  protected readonly title = signal('first-angular_app');
}
