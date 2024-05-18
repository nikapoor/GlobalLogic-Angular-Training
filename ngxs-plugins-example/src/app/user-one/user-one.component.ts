import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UpdateFormValue } from '@ngxs/form-plugin';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-user-one',
  templateUrl: './user-one.component.html',
  styleUrls: ['./user-one.component.css']
})
export class UserOneComponent {

  newUserForm = this.fb.group({
    userName: 'Bhawna Gunwani',
    projects: this.fb.array([
      this.fb.group({
        name: 'Admin Portal'
      })
    ])
  })

  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit() {
    this.store.dispatch(new UpdateFormValue({
      path: 'userss.newUserForm',
      value: { userName: 'Shreya Singhal'},
      propertyPath: 'userName'
    }));

    // this.store.dispatch(new UpdateFormValue({
    //   path: 'userss.newUserForm',
    //   value: { name: 'Ecommerce'},
    //   propertyPath: 'projects.0'
    // }));
  }

}
