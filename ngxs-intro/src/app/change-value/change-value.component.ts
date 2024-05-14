import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { DecrementValue, IncrementValue, ResetValue, SetValue } from '../store/actions/simple-value.action';
import { SimpleValueState } from '../store/states/simple-value.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-change-value',
  templateUrl: './change-value.component.html',
  styleUrls: ['./change-value.component.css']
})
export class ChangeValueComponent {

  value!: number;

  @Select(SimpleValueState.value)
  value$!: Observable<number>;

  private valueSubscription!: Subscription;

  constructor(private store: Store) {
    this.valueSubscription = this.value$.subscribe((value) => {
      this.value = value;
    })
  }

  ngOnDestroy() {
    this.valueSubscription.unsubscribe();
  }

  increment(): void {
    this.store.dispatch(new IncrementValue());
  }

  decrement(): void {
    this.store.dispatch(new DecrementValue());
  }

  resetValue(): void {
    this.store.dispatch(new ResetValue());
  }

  setValue(value: number | null) {
    if(value) {
      this.store.dispatch(new SetValue(value));
    } else 
    this.store.dispatch(new ResetValue()
    );
  }

}
