import { FormGroup } from '@angular/forms';
export function UserAndPasswordEqualsValidator(formGroup: FormGroup) {
  const username = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (username.trim() + password.trim() === '') return null;

  return username === password ? { usernameEqualsPassword: true } : null;
}
