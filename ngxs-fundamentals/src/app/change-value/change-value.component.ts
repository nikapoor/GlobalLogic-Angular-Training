import { Component } from '@angular/core';

@Component({
  selector: 'app-change-value',
  templateUrl: './change-value.component.html',
  styleUrls: ['./change-value.component.scss'],
})
export class ChangeValueComponent {
  value = 0;

  increment(): void {
    this.value++;
  }

  decrement(): void {
    this.value--;
  }
}
