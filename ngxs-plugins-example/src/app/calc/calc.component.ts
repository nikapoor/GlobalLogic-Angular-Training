import { Component } from '@angular/core';
 import { Store } from '@ngxs/store';
 import { COUNTER_STATE_TOKEN, Increment } from '../counter';
@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {

  constructor(private store: Store) { }
  counter$ = this.store.select<number>(COUNTER_STATE_TOKEN);

  incrementData(): void {
    this.store.dispatch(new Increment)
  }



}