import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-state-changer',
  imports: [],
  templateUrl: './state-changer.component.html',
  styleUrl: './state-changer.component.scss'
})
export class StateChangerComponent {
  stateService = inject(StateService);
  inputElement = viewChild<ElementRef<HTMLInputElement>>('input');

  changeState() {
    const state = this.inputElement()?.nativeElement.value ?? null;
    this.stateService.setState(state);
  }
}
