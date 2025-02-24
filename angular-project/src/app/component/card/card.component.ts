import { Component, contentChild } from '@angular/core';
import { RedTextComponent } from '../red-text/red-text.component';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  host: {
    'role': 'card',
    '[id]': 'appCardId',
    '(click)': 'handleClick($event)'
  },
})
export class CardComponent {
  card = 'card-role'
  appCardId = 'app-card-id';
  redText = contentChild(RedTextComponent);

  handleClick(event: Event) {
    console.log('[CardComponent] Click in card', event, this.redText()?.text());
  }
}
