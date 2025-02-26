import { AbstractControl, ValidationErrors } from '@angular/forms';

export function crossFieldValidator(
  control: AbstractControl
): ValidationErrors | null {
  const firstName = control.get('firstName')?.value;
  const lastName = control.get('lastName')?.value;

  return firstName !== lastName
    ? null
    : { crossField: { valid: false, message: 'Passwords do not match' } };
}
