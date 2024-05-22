import { Component } from '@angular/core';

@Component({
  selector: 'app-asynchronous',
  templateUrl: './asynchronous.component.html',
  styleUrls: ['./asynchronous.component.css']
})
export class AsynchronousComponent {

  timeoutResponse: string = 'test';

  checkSetTimeOut() {
    setTimeout(() => {
      console.log('Inside setTimeout');
      this.timeoutResponse = "setTimeoutCheck";
    }, 1000);
  }

}
