import { Injectable } from "@angular/core";
import { Action, State, StateContext, StateToken } from "@ngxs/store";
import { Increment } from "./counter.action";
export const COUNTER_STATE_TOKEN = new StateToken<number>('counter')
@State<Number>({
    name: COUNTER_STATE_TOKEN,
    defaults: 0
})
@Injectable()
export class CounterState {
    @Action(Increment)
    increment(ctx: StateContext<number>) {
        ctx.setState(counter => counter += 1)
    }
}