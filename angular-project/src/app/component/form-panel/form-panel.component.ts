import { Component, inject, output } from '@angular/core';
import {
  ControlEvent,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { functionValidator } from '../../validators/function-validator';
import { crossFieldValidator } from '../../validators/cross-field-validator';

@Component({
  selector: 'app-form-panel',
  imports: [ReactiveFormsModule],
  templateUrl: './form-panel.component.html',
  styleUrl: './form-panel.component.scss',
})
export class FormPanelComponent {
  formBuilder = inject(FormBuilder);

  personForm = this.formBuilder.group(
    {
      firstName: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      lastName: [''],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
      aliases: this.formBuilder.array<FormControl<string | null>>([]),
    },
    {
      validators: crossFieldValidator,
    }
  );

  // personForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   }),
  //   aliases: new FormArray<FormControl<string | null>>([]),
  // });

  age = new FormControl(0, Validators.min(5));
  // age = new FormControl(0, Validators.compose([Validators.min(5), functionValidator()]));
  submit = output<{ firstName?: string | null; lastName?: string | null }>();

  nextId: number = 0;
  aliases: { id: number; control: FormControl<string | null> }[] = [];

  ngOnInit() {
    this.age.events.subscribe((controlEvent: ControlEvent<number | null>) => {
      console.log('Age is', this.age.valid, this.age.errors);
      console.log('Control event', controlEvent, controlEvent.source.value);
    });
  }

  setDefaultAge(): void {
    this.age.setValue(18);
  }

  setDefaults(): void {
    // this.personForm.controls.firstName.setValue('Ivan');
    // this.personForm.controls.lastName.setValue('Ivanov');

    this.personForm.patchValue({
      firstName: 'Ivan',
      lastName: 'Ivanov',
      address: {
        city: 'Samara',
      },
    });
  }

  addAlias() {
    const control = this.formBuilder.control('');
    this.personForm.controls.aliases.push(control);
    this.aliases.push({ id: this.nextId++, control });
  }

  removeAlias(id: number) {
    this.personForm.controls.aliases.removeAt(id);
    this.aliases = this.aliases.filter((alias) => alias.id !== id);
  }

  onNameFormSubmit(): void {
    this.submit.emit(this.personForm.value);
    console.log('Submit:', this.personForm.value);
  }
}
