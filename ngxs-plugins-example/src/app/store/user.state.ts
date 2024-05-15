import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";

@State({
    name: 'users',
    defaults: {
        newUserForm: {
            model: undefined,
            dirty: false,
            status: '',
            errors: {}
        }    
    }
})

@Injectable()
export class UserState {

}