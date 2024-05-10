import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from '../shared/utility.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  userForm! : FormGroup;

  constructor(
    private fb: FormBuilder,
    private _utilityService: UtilityService) { }

    ngOnInit(): void {
      this.userForm = this.fb.group({
        id: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', Validators.required]
      })
    }

    onUserSubmit() { 
      console.log(this.userForm.value);
      this._utilityService.addUser(this.userForm.value).subscribe(result => {
        console.log('User Added Successfully.');
        console.log(result);
      })
    }

}
