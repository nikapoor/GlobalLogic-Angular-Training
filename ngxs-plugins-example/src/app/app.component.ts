import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ChangeValue, OneState } from './store/one.state';
import { ChangeText, TwoState } from './store/two.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Select(OneState)
  one$!: any;

  @Select(TwoState)
  two$!: any;

  constructor(private store: Store) {}

  updateValue() {
    this.store.dispatch(new ChangeValue());
  }

  updateText() {
    this.store.dispatch(new ChangeText())
  }

}
