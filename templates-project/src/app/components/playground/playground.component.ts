import { Component, signal } from '@angular/core';
import { User } from '../../models/user';
import { Role } from '../../enums/role';

@Component({
  selector: 'app-playground',
  imports: [],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
})
export class PlaygroundComponent {
  showHeader = signal(true);
  showAltHeader = signal(true);
  textSignal = signal('A lot of text');

  users = signal<User[]>([
    {
      id: 0,
      name: 'Ivan',
    },
    {
      id: 1,
      name: 'Bob',
    },
    {
      id: 2,
      name: 'Anna',
    },
  ]);

  role = signal<Role>(Role.ADMIN);
}
