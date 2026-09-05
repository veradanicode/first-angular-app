import { Component, Input, input, computed, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { UserObj } from './user.model';
import { Card } from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = input.required<UserObj>();
  selected = input.required<boolean>();
  select = output<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.user().avatar;
  });
  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
