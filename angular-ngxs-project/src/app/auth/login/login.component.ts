import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateFormStatus } from '@ngxs/form-plugin';
import { Store } from '@ngxs/store';
import { LogIn } from 'src/app/state/auth/auth.actions';
@Component({
  selector: 'ngxs-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ] 
  
})
export class LoginComponent {
  login!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.login = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  getErrors(field: string) {
    return (this.login.get(field)?.touched && this.login.get(field)?.errors) ? this.login.get(field)?.errors : null;
  }

  onSubmit() {
    console.log(this.login.value);
    this.store.dispatch(
      new UpdateFormStatus({
        status: this.login.status,
        path: 'login.newLoginForm'
      })
    )
    if (this.login.invalid) return alert('Please enter all fields')
    this.store.dispatch(new LogIn(this.login.value));
  }
}