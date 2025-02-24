import { Component, input } from '@angular/core';

@Component({
  selector: 'app-red-text',
  imports: [],
  templateUrl: './red-text.component.html',
  styleUrl: './red-text.component.scss',
})
export class RedTextComponent {
  color =  'red';
  className = 'red-text';
  classList = ['red-text'];
  classSettings = {
    'red-text': true,
  };
  isRed = true;
  styleSettings = {
    color: 'red',
  };
  style = 'color: red';
  text = input<string>();
}
