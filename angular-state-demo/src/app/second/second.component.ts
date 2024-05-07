import { Component } from '@angular/core';
import { UtilityService } from '../shared/utility.service';
import { UserState } from '../store/state/user.state';
import { GetUser } from '../store/actions/user.action';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  users: any;

  constructor(private _utilityService: UtilityService,
    private store: Store) { }

  ngOnInit() : void {
    this.getUsers();
  }

  getUsers() {
      this.store.dispatch(new GetUser());
    // this._utilityService.fetchUsers().subscribe(result => {
      //   this.users = result;
      // }, (error) => {
      //   console.log(error);
      // });
    }

}
