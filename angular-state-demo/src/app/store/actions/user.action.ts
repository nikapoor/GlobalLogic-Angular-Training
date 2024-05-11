import { User } from "src/app/shared/user.model";

export class GetUser {
    static readonly type = '[User] Get';
} 

export class SetSelectedUser {
    static readonly type = '[User] Set';
    constructor(public id: string) { }
}

export class AddUser {
    static readonly type = '[User] Add';
    constructor(public payload:User) { }
} 

export class DeleteUser {
    static readonly type = '[User] Delete';
    constructor(public id: string) { }
} 

export class UpdateUser {
    static readonly type = '[User] Update';
    constructor(public payload: User) { }
} 