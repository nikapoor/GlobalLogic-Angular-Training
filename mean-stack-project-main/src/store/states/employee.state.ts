import { Injectable } from "@angular/core";
import { Action, Select, Selector, State, StateContext } from "@ngxs/store";
import { Employee } from "src/app/shared/employee.model";
import { GetEmployee } from "../actions/employee.action";
import { EmployeeService } from "src/app/shared/employee.service";
import { tap } from "rxjs";

// State Model
export class EmployeeStateModel {
    employees!: Employee[];
    employeesLoaded!: boolean
}

// State Decorator
@State<EmployeeStateModel>({
    name: 'employees',
    defaults: {
        employees: [],
        employeesLoaded: false
    }
})

// State Class
@Injectable()
export class EmployeeState {

    constructor(private _employeeService: EmployeeService) { }

    // Selectors has logic to get state data

    // Get Employee List from state
    @Selector()
    static getEmployeeList(state: EmployeeStateModel) {
        return state.employees;
    }

    @Selector()
    static employeeLoaded(state: EmployeeStateModel) {
        return state.employeesLoaded;
    }

    @Action(GetEmployee)
    getEmployees({getState, setState}: StateContext<EmployeeStateModel>) {
        console.log('State Action');
        return this._employeeService.getEmployeeList().pipe(tap((res: any) => {
            console.log('Tap Result : ', res);
            const state = getState();
            console.log('State: ', state);
            setState({
                ...state,
                employees: res,
                employeesLoaded: true
            })
        }))
    }


}

