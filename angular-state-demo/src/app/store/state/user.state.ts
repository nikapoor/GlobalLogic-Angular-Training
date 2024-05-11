import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { User } from "src/app/shared/user.model";
import { AddUser, DeleteUser, GetUser, SetSelectedUser, UpdateUser } from "../actions/user.action";
import { UtilityService } from "src/app/shared/utility.service";
import { tap } from "rxjs";
import { Router } from "@angular/router";

// State Model
export class UserClassModel {
    users!: User[];
    usersLoaded!: boolean;
    selectedUser!: User;
}

// State Decorator
@State({
   name: 'users',
   defaults: {
    users: [],
    usersLoaded: false,
    selectedUser: null
   }
  })

// State Class
@Injectable()
export class UserState {

    // Selectors has logic to get the state data.

    constructor(private _utilityService: UtilityService, private _router: Router) { }

    @Selector()
    static getUserList(state: UserClassModel) {
        return state.users;
    }

    @Selector()
    static usersLoaded(state: UserClassModel) {
        return state.usersLoaded;
    }

    @Selector()
    static selectedUser(state: UserClassModel) {
        return state.selectedUser;
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

    @Action(SetSelectedUser)
    SetSelectedUser({getState, setState}: StateContext<UserClassModel>, {id}: SetSelectedUser)  {
        const state = getState();
        const user = state.users && state.users.find(user => user.id  === id)
        if(user) {
            setState({
                ...state,
                selectedUser: user
            })
            return user;
        } else {
            return this._utilityService.fetchUserById(id).pipe(tap((result: any)=> {
                var state = getState()
                setState({
                    ...state,
                    selectedUser: result
                })
            }));
        }
     }

     @Action(AddUser)
     addUser({getState, patchState}: StateContext<UserClassModel>, {payload}: AddUser) {
        // console.log(payload);
        return this._utilityService.addUser(payload).pipe(tap((result: any)=> {
            const state = getState();
            console.log(state);
            patchState({
                users: [...state.users, result]
            });
            this._router.navigate(['/second']);
        }));
     }

     @Action(DeleteUser)
     DeleteUser({getState, setState}: StateContext<UserClassModel>, {id}: DeleteUser) {
        return this._utilityService.deleteUser(id).pipe(tap((result: any)=> {
            const state = getState();
            const filteredUsers = state.users.filter(user => user.id !== id);
            setState({
                ...state,
                users: filteredUsers
            })
        }));
     }

     @Action(UpdateUser)
     updateUser({getState, patchState}: StateContext<UserClassModel>, {payload}: UpdateUser) {
        // console.log(payload);
        // const state = getState();
        // const userList = state.users;
        // const index = userList.findIndex(user => user.id === payload.id);
        // console.log(userList);
        // console.log(index);
        // console.log(userList[index]);
        return this._utilityService.updateUser(payload).pipe(tap((result: any)=> {
            const state = getState();
            const userList = state.users;
            const index = userList.findIndex(user => user.id === payload.id);
            userList[index] = result;
            patchState({
                users: userList
            })
        }));
     }

     

}