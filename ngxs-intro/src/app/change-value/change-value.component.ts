import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { DecrementValue, IncrementValue, ResetValue, SetValue } from '../store/actions/simple-value.action';

@Component({
  selector: 'app-change-value',
  templateUrl: './change-value.component.html',
  styleUrls: ['./change-value.component.css']
})
export class ChangeValueComponent {

  constructor(private store: Store) {}

  value = 0;

  increment(): void {
    this.store.dispatch(new IncrementValue());
    this.value++;
  }

  decrement(): void {
    this.store.dispatch(new DecrementValue());
    this.value--;
  }

  resetValue(): void {
    this.store.dispatch(new ResetValue());
    this.value = 0;
  }

  setValue(value: number | null) {
    if(value) {
      this.store.dispatch(new SetValue(value));
    } else 
    this.store.dispatch(new ResetValue()
    );
  }
}
