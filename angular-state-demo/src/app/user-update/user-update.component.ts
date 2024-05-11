import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../shared/utility.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/user.model';

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
  private _router: Router) { }

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
    this._utilityService.updateUser(this.userForm.value).subscribe(result => {
      console.log('User Updated Succesfully.');
      console.log(result);
      this._router.navigate(['/second']);
    })
  }

}
