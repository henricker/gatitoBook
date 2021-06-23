import { FormControl } from '@angular/forms';

export function ConfirmAndPasswordNotEquals(formControl: FormControl) {
  const password = formControl.get('password')?.value ?? '';
  const confirmPassword = formControl.get('confirmPassword')?.value ?? '';

  if (password + confirmPassword === '') return null;

  return password !== confirmPassword
    ? { passwordNotEqualsConfirmPassword: true }
    : null;
}
