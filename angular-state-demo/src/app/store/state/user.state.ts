import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { User } from "src/app/shared/user.model";
import { GetUser } from "../actions/user.action";
import { UtilityService } from "src/app/shared/utility.service";
import { tap } from "rxjs";

// State Model
export class UserClassModel {
    users!: User[];
    usersLoaded!: boolean;
}

// State Decorator
@State({
   name: 'users',
   defaults: {
    users: [],
    usersLoaded: false
   }
  })

// State Class
@Injectable()
export class UserState {

    // Selectors has logic to get the state data.

    constructor(private _utilityService: UtilityService) { }

    @Selector()
    static getUserList(state: UserClassModel) {
        return state.users;
    }

    @Selector()
    static usersLoaded(state: UserClassModel) {
        return state.usersLoaded;
    }

    @Action(GetUser)
    getUsers({getState, setState}: StateContext<UserClassModel>) {
        // console.log('State Action!!')
        return this._utilityService.fetchUsers().pipe(tap((result: any) => {
            // console.log('Tap Result : ', result);
            var state = getState();
            // console.log('Old State: ', state);
            setState({
                ...state,
                users: result,
                usersLoaded: true
            });
            // state = getState();
            // console.log('New State: ', state);
        }));
    }

}