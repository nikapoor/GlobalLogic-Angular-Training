import { Component } from '@angular/core';
import { FakeService } from '../services/fake.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  serviceData: any;
  errorMessage: any;
  message : any;

  constructor(private fakeService: FakeService){}

  ngOnInit(){
this.getServiceData();
  }

  getServiceData(){
    this.fakeService.getData().subscribe({
     next : data => {this.serviceData = data},
     error: error => {this.errorMessage = error.statusText},
     complete: ()=> {console.log('Finished')}
    })
  }

}