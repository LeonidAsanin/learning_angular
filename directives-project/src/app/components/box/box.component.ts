import { Component, input } from '@angular/core';
import { BlushDirective } from '../../directives/blush.directive';

@Component({
  selector: 'app-box',
  imports: [],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss',
  hostDirectives: [BlushDirective],
  // hostDirectives: [{
  //   directive: BlushDirective,
  //   inputs: ['color']
  // }]
})
export class BoxComponent {
  color = input('');
}
