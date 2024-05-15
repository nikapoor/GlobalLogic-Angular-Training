import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";

export class ChangeValue {
    static readonly type = "ChangeValue";
}

@State({
    name: 'one',
    defaults: {
        value: "Start Here.."
    }
})

@Injectable()
export class OneState {

    @Action(ChangeValue)
    changeValue(ctx: StateContext<any>) {
        ctx.patchState({
            value: "End Here.."
        })
    }

}