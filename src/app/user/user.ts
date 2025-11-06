import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) id!: number;
  @Input({ required: true }) name!: string;
  @Input() selected: boolean = false;
  @Output() userSelected = new EventEmitter<number>();
  onSelectUser() {
    this.userSelected.emit(this.id);
  }
}
