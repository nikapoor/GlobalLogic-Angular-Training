import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LogOut } from 'src/app/state/auth/auth.actions';
import { AuthState } from 'src/app/state/auth/auth.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Select(AuthState.isAuthenticated) authenticated$!: Observable<boolean>;
  @Select(AuthState.getUser) user$!: Observable<boolean>;


  constructor(private store: Store) { }


  logOut() {
    this.store.dispatch(new LogOut());
  }

}
