import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../shared/utility.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/user.model';
import { Store } from '@ngxs/store';
import { UpdateUser } from '../store/actions/user.action';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {

  userForm! : FormGroup;
  user: User = new User();

  constructor(private fb: FormBuilder,
    private _route: ActivatedRoute, 
    private _utilityService: UtilityService,
    private _router: Router,
    private store: Store) { }

  ngOnInit() {
    let id: any = this._route.snapshot.paramMap.get("id");
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.updateUserById(id);
  }

  updateUserById(id: string) {
    this._utilityService.fetchUserById(id).subscribe((result: any) => {
      this.userForm.setValue(result);
    })
  }

  onUserSubmit() {
    this.store.dispatch(new UpdateUser(this.userForm.value));
  }

}
