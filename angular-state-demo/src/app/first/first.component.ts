import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UtilityService } from '../shared/utility.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  users: any;

  constructor(private _utilityService: UtilityService) { }

  ngOnInit() : void {
    this.getUsers();
  }

  getUsers() {

    if(this._utilityService.userList) {
      this.users = this._utilityService.userList;
      console.log("If Block");
    } else {
      this._utilityService.fetchUsers().subscribe(result => {
        this.users = result;
        this._utilityService.userList = result;
        console.log("Else Block");
      }, (error) => {
        console.log(error);
      });
    }
  }

}
