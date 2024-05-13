import { Injectable } from "@angular/core";
import { Action, State, StateContext, StateToken } from "@ngxs/store";
import { SimpleValueModel } from "src/app/shared/simple-value.model";
import { DecrementValue, IncrementValue, ResetValue, SetValue } from "../actions/simple-value.action";

const SIMPLE_VALUE_STATE_TOKEN = 
new StateToken<SimpleValueModel>('simpleValue');

@State<SimpleValueModel>({
    name: SIMPLE_VALUE_STATE_TOKEN,
    defaults: {
        value: 0
    }
})

@Injectable()
export class SimpleValueState {

    @Action(IncrementValue)
    incrementValue(ctx: StateContext<SimpleValueModel>) {
        console.log('incrementValue Action Dispatched.')
    }

    @Action(DecrementValue)
    decrementValue(ctx: StateContext<SimpleValueModel>) {
        console.log('decrementValue Action Dispatched.')
    }

    @Action(ResetValue)
    resetValue(ctx: StateContext<SimpleValueModel>) {
        console.log('resetValue Action Dispatched.')
    }

    @Action(SetValue)
    setValue(ctx: StateContext<SimpleValueModel>) {
        console.log('setValue Action Dispatched.')
    }
    
}