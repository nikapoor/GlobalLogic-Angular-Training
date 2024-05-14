import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, StateToken } from "@ngxs/store";
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
        // console.log('incrementValue Action Dispatched.')
        const state = ctx.getState();
        let stateValue = state.value;
        stateValue++;
        ctx.setState({
            ...state,
            value: stateValue
        })
    }

    @Action(DecrementValue)
    decrementValue(ctx: StateContext<SimpleValueModel>) {
        // console.log('decrementValue Action Dispatched.')
        const state = ctx.getState();
        let stateValue = state.value;
        stateValue--;
        ctx.setState({
            ...state,
            value: stateValue
        })
    }

    @Action(ResetValue)
    resetValue(ctx: StateContext<SimpleValueModel>) {
        // console.log('resetValue Action Dispatched.');
        const state = ctx.getState();
        ctx.setState({
            ...state,
            value: 0
        })
    }

    @Action(SetValue)
    setValue(ctx: StateContext<SimpleValueModel>, action: SetValue) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            value: action.payload
        })
    }

    @Selector()
    static value(state: SimpleValueModel) {
        return state.value;
    }
    
}