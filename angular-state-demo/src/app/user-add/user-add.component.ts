import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from '../shared/utility.service';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddUser } from '../store/actions/user.action';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  userForm! : FormGroup;

  constructor(
    private fb: FormBuilder,
    private _utilityService: UtilityService,
    private store: Store) { }

    ngOnInit(): void {
      this.userForm = this.fb.group({
        id: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', Validators.required]
      })
    }

    onUserSubmit() { 
      this.store.dispatch(new AddUser(this.userForm.value));
    }

}
