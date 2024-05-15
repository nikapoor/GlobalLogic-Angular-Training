import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";

export class ChangeText {
    static readonly type = "ChangeText";
}

@State({
    name: 'two',
    defaults: {
        text: "State two starts here.."
    }
})

@Injectable()
export class TwoState {

    @Action(ChangeText)
    changeText(ctx: StateContext<any>) {
        ctx.patchState({
            text: "State two ends here.."
        })
    }

}