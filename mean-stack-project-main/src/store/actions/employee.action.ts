import { Employee } from "src/app/shared/employee.model";

export class GetEmployee {
    static readonly type = '[Employee] Get';
}

export class SetSelectedEmployee {
  static readonly type = '[Employee] Set';
  constructor(public id: string) { }
}

export class AddEmployee {
    static readonly type = '[Employee] Add';
    constructor(public payload: Employee) { }
}

export class DeleteEmployee {
    static readonly type = '[Employee] Delete';
    constructor(public  id: string) { }
}

export class UpdateEmployee {
    static readonly type = '[Employee] Update';
    constructor(public payload: Employee, public id: string) { }
}
