import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { GET_USER } from './store/user/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-jest-starter';
  
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GET_USER());
  }

}
