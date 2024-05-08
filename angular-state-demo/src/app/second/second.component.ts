import { Component, OnDestroy, OnInit } from '@angular/core';
import { UtilityService } from '../shared/utility.service';
import { UserState } from '../store/state/user.state';
import { GetUser } from '../store/actions/user.action';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, OnDestroy {

  @Select(UserState.getUserList)
  users$!: Observable<User[]>;

  @Select(UserState.usersLoaded)
  userLoaded$!: Observable<boolean>;

  // @Select(UserState.usersLoaded)
  usersLoadedSub!: Subscription;

  constructor(private store: Store) { }

  ngOnInit() : void {
    this.getUsers();
  }

  getUsers() {
      this.usersLoadedSub = 
      this.userLoaded$.subscribe(loadedUsers => {
        if(!loadedUsers) {
          this.store.dispatch(new GetUser());
          // this.users$.subscribe();
        }
      });
    }

    ngOnDestroy(): void {
     this.usersLoadedSub.unsubscribe();
    }

}
