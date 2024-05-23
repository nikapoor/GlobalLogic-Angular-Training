import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateFormStatus } from '@ngxs/form-plugin';
import { Store } from '@ngxs/store';
import { LogIn } from 'src/app/state/auth/auth.actions';

@Component({
  selector: 'ngxs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  getErrors(field: string) {
    return (this.loginForm.get(field)?.touched && this.loginForm.get(field)?.errors) ? this.loginForm.get(field)?.errors : null;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.markFormGroupTouched(this.loginForm);
      return;
    }
    this.store.dispatch(new LogIn(this.loginForm.value));
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
