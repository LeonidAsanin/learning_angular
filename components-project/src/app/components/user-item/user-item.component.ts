import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss'
})
export class UserItemComponent {
  id = input.required<string>()
}
