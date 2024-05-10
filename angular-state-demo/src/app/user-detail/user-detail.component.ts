import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from '../shared/utility.service';
import { User } from '../shared/user.model';
import { Select, Store } from '@ngxs/store';
import { SetSelectedUser } from '../store/actions/user.action';
import { UserState } from '../store/state/user.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  user: User = new User();

  @Select(UserState.selectedUser)
  selectedUser$!: Observable<User>;

  selectedUserSub!: Subscription;

  constructor(private _route: ActivatedRoute,
    private _utilityService:UtilityService,
  private store: Store) { }

  ngOnInit() {
    let id = this._route.snapshot.paramMap.get("id");
    this.getUserById(id);
  }

  getUserById(id:any) {
    this.store.dispatch(new SetSelectedUser(id));
    this.selectedUserSub = this.selectedUser$.subscribe(result => {
      this.user = result;
    });
  }

  ngOnDestroy() {
    this.selectedUserSub.unsubscribe();
  }

}
