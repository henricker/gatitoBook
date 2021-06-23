import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator(control: AbstractControl) {
  const value = control.value as string;

  if (value !== value.toLocaleLowerCase()) return { lowerCase: true };

  return null;
}
