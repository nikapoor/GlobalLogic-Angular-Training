
import { Injectable } from "@angular/core";
import { Action, State, StateContext, StateToken } from "@ngxs/store";
import { Increment } from "./counter.action";

export const COUNTER_STATE_TOKEN = new StateToken<number>('counter');

@State<number>({
    name: COUNTER_STATE_TOKEN,
    defaults: 0
})

@Injectable()
export class CounterState {

    @Action(Increment)
    increment(ctx: StateContext<number>) {
        console.log('State Action Invoked.');
        ctx.setState(counter => counter += 1);
    }
}