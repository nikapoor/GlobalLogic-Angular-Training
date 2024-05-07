import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { User } from "src/app/shared/user.model";
import { GetUser } from "../actions/user.action";

// State Model
export class UserClassModel {
    users!: User[];
}

// State Decorator
@State({
   name: 'users',
   defaults: {
    users: []
   }
  })

// State Class
@Injectable()
export class UserState {

    // Selectors has logic to get the state data.

    @Selector()
    static getUserList(state: UserClassModel) {
        return state.users;
    }

    @Action(GetUser)
    getUsers({getState, setState}: StateContext<UserClassModel>) {
        console.log('State Action!!')
    }

}