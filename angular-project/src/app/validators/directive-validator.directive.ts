import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDirectiveValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DirectiveValidatorDirective,
      multi: true,
    },
  ],
})
export class DirectiveValidatorDirective implements Validator { // Use AsyncValidator for async validation
  validate(control: AbstractControl): ValidationErrors | null {
    return control.value?.includes(' ') ? null : { noSpace: true };
  }
}
