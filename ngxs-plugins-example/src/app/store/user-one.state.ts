import { Injectable } from "@angular/core"
import { State } from "@ngxs/store"

interface UserStateModel {
    newUserForm: {
       model?: {
        userName: string,
        projects: {
            name: string,
        }[]
       }
    }
}
@State<UserStateModel>({
    name: 'userss',
     defaults: {
        newUserForm: {
            model: undefined
        }
     }
})

@Injectable()
export class UserOneState {
    
}