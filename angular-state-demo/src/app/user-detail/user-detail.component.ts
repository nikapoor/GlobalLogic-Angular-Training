import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from '../shared/utility.service';
import { User } from '../shared/user.model';
import { Store } from '@ngxs/store';
import { SetSelectedUser } from '../store/actions/user.action';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  user: User = new User();

  constructor(private _route: ActivatedRoute,
    private _utilityService:UtilityService,
  private store: Store) { }

  ngOnInit() {
    let id = this._route.snapshot.paramMap.get("id");
    this.getUserById(id);
  }

  getUserById(id:any) {
    this.store.dispatch(new SetSelectedUser(id));
    this._utilityService.fetchUserById(id).subscribe((result:any) => {
      this.user = result;
    })
  }

}
