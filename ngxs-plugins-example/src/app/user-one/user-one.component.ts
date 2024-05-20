import { Component } from '@angular/core';
 import { FormBuilder } from '@angular/forms';
import { UpdateForm, UpdateFormValue } from '@ngxs/form-plugin';
import { Store } from '@ngxs/store';
@Component({
  selector: 'app-user-one',
  templateUrl: './user-one.component.html',
  styleUrls: ['./user-one.component.css']
})
export class UserOneComponent {

  newUserForm =  this.fb.group({
   
      userName: ' shadab ahmad',
      projects: this.fb.array([
        this.fb.group({
          name:'Admin prtal'
        })
      ])
  
  });
  
  constructor( private fb: FormBuilder,
    private store: Store,
  ) { }
  onSubmit() {
     this.store.dispatch(new UpdateFormValue({
      path: 'userss.newUserForm',
      value: { userName: 'shadab ahmad'},
      propertyPath: 'userName'
     }));
  }
}
