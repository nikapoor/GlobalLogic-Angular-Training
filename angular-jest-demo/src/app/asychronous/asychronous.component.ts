import { Component } from '@angular/core';

@Component({
  selector: 'app-asychronous',
  templateUrl: './asychronous.component.html',
  styleUrls: ['./asychronous.component.css']
})
export class AsychronousComponent {
  timeoutResponse: string = '';
   checkSettimeout(){
    setTimeout(()  => {
      console.log('setTimeout called');
      this.timeoutResponse = 'setTimeoutcheck';
    },1000);
    }
   }

