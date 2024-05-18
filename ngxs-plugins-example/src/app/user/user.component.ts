import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UpdateFormDirty } from '@ngxs/form-plugin';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private store: Store) { }

  newUserForm = new FormGroup({
    userName: new FormControl()
  });

  onSubmit() {
  this.store.dispatch(new UpdateFormDirty({dirty: false, path: 'users.newUserForm'}))
  }

}


/**
 * Form Plugin comes with few actions:
 * 1. UpdateFormStatus
 * 2. UpdateFormValue
 * 3. UpdateFormDirty
 * 4. setFormDisabled
 * 5. setFormEnabled
 * 6. ResetForm
 */