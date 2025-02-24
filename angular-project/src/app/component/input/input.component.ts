import { Component, model, output } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  value = model<string>();
  blackOutput = output<void>();

  input(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.value.set(value);
    if (value === 'black') {
      this.blackOutput.emit();
    }
  }

  handleEnterKeydown() {
    console.log('Enter!');
  }
}
