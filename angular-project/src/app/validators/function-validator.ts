import { inject } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Logger } from '../services/logger.service';

export function functionValidator() {
  // Can use inject() here because when we invoke this function we are in dependency injection context of a component
  const logger = inject(Logger);
  logger.info('Function validator called');

  return (control: AbstractControl): ValidationErrors | null => {
    // Cannot use inject() here because it is not a dependency injection context (function invoked by Angular not in our component)
    return control.value < 100
      ? null
      : { functionValidator: { valid: false, message: 'This is not valid' } };
  };
}
