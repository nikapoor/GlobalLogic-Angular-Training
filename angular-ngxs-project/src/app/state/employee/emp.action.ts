import { EMP } from "../../shared/model/emp.model";

export class GetEMP {
    static readonly type = '[EMP] Get';
}

export class SetSelectedEMP {
    static readonly type = '[EMP] Set'
    constructor(public id: string) { }
}

export class AddEMP {
    static readonly type = '[EMP] Add';
    constructor(public payload: EMP) { }
}

export class DeleteEMP {
    static readonly type = '[EMP] Delete';
    constructor(public id: string) { }
}

export class UpdateEMP {
    static readonly type = '[EMP] Update';
    constructor(public payload: EMP) { }
}