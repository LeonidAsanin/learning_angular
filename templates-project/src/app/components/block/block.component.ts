import { booleanAttribute, Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-block',
  imports: [],
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss',
})
export class BlockComponent {
  isRed = input(false, { transform: booleanAttribute });
  hasStyledText = input(false, { transform: booleanAttribute });
  
  classString = signal('bordered rounded-border');
  classArray = signal(['center', 'rounded-border']);
  classObject = computed(() => ({
    'styled-text': this.hasStyledText(),
  }));

  styleObject = signal({
    // 'border-radius': '50%',
  });
}
