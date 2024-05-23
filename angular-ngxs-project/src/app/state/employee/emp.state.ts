import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { EMP } from "src/app/shared/model/emp.model";
import { UtilityService } from "src/app/shared/services/utility.service";
import { EMPClassModel } from "./emp-class.model";
import { AddEMP, DeleteEMP, GetEMP, SetSelectedEMP, UpdateEMP } from "./emp.action";



//State Decorator
@State<EMPClassModel>({
    name: "employee",
    defaults: {
        employee: [],
        isLoadEMP: false,
        selectedEMP: {} as EMP
    }
})

// State Class Service
@Injectable()
export class EmployeeState {
    constructor(private _utilityService: UtilityService) { }

    @Selector() // g
    static getEMPList(state: EMPClassModel) { return state.employee }

    @Selector()
    static isLoadEMP(state: EMPClassModel) { return state.isLoadEMP }

    @Selector()
    static selectedEMP(state: EMPClassModel) { return state.selectedEMP }


    @Action(GetEMP)
    getEmployee({ getState, setState }: StateContext<EMPClassModel>) {
        return this._utilityService.fetchEMP().pipe(
            tap((res: any) => {
                const state = getState();
                setState({ ...state, employee: res, isLoadEMP: true })
            })
        );
    }

    @Action(SetSelectedEMP)
    setSelectedEmployee({ getState, setState }: StateContext<EMPClassModel>, { id }: SetSelectedEMP) {
        const state = getState();
        if (state.employee && state.employee.length) {
            const emp = state.employee.find((emp: EMP) => emp.id == id);
            return setState({ ...state, selectedEMP: emp ? emp : {} as EMP })
        }
        return this._utilityService.fetchEMPById(id).pipe(
            tap((emp: EMP) => setState({ ...state, selectedEMP: emp }))
        );

    }

    @Action(AddEMP)
    addEmployee({ getState, patchState }: StateContext<EMPClassModel>, { payload }: AddEMP) {
        const state = getState();
        const id = (state.employee && state.employee.length) ? state.employee[state.employee.length - 1].id : 99;
        payload.id = (+id + 1).toString();
        return this._utilityService.addEMP(payload).pipe(tap((emp: EMP) => {
            patchState({ employee: [...state.employee, emp] })
        }))
    }

    @Action(DeleteEMP)
    deleteEmployee({ getState, setState }: StateContext<EMPClassModel>, { id }: DeleteEMP) {
        return this._utilityService.deleteEMP(id).pipe(tap((emp: any) => {
            const state = getState();
            const filteredEMP = state.employee.filter((item: EMP) => item.id !== id)
            return setState({ ...state, employee: [...filteredEMP] })
        }))
    }

    @Action(UpdateEMP)
    updateEmployee({ getState, patchState }: StateContext<EMPClassModel>, { payload }: UpdateEMP) {
        return this._utilityService.updateEMP(payload).pipe(tap((emp: EMP) => {
            const state = getState();
            const id = state.employee.findIndex((item: EMP) => item.id == payload.id)
            state.employee[id] = emp;
            patchState({ employee: [...state.employee] })
        }))
    }

}