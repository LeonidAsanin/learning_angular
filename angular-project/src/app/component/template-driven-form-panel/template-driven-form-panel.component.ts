import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DirectiveValidatorDirective } from '../../validators/directive-validator.directive';

class Actor {
  constructor(
    public id: number,
    public name: string,
    public skill: string,
    public studio?: string
  ) {}
}

@Component({
  selector: 'app-template-driven-form-panel',
  imports: [FormsModule, CommonModule, DirectiveValidatorDirective],
  templateUrl: './template-driven-form-panel.component.html',
  styleUrl: './template-driven-form-panel.component.scss',
})
export class TemplateDrivenFormPanelComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW Productions');
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newActor() {
    this.model = new Actor(42, '', '');
  }
}
