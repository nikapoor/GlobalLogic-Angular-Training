import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { SimpleValueState } from '../store/states/simple-value.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-value',
  templateUrl: './display-value.component.html',
  styleUrls: ['./display-value.component.css']
})
export class DisplayValueComponent {

  @Select(SimpleValueState.value)
  value$!: Observable<number>;
}
