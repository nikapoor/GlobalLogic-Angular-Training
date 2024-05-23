import { Injectable } from "@angular/core";
import { Action, Select, Selector, State, StateContext } from "@ngxs/store";
import { Employee } from "src/app/shared/employee.model";
import { AddEmployee, DeleteEmployee, GetEmployee, SetSelectedEmployee, UpdateEmployee } from "../actions/employee.action";
import { EmployeeService } from "src/app/shared/employee.service";
import { tap } from "rxjs";

// State Model
export class EmployeeStateModel {
    employees!: Employee[];
    employeesLoaded!: boolean;
    selectedEmployee!: Employee;
}

// State Decorator
@State<EmployeeStateModel>({
    name: 'employees',
    defaults: {
        employees: [],
        employeesLoaded: false,
        selectedEmployee: null as any
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

    @Selector()
    static selectedEmployee(state: EmployeeStateModel) {
        return state.selectedEmployee;
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

    @Action(SetSelectedEmployee)
    SetSelectedUser({getState, setState}: StateContext<EmployeeStateModel>, {id}: SetSelectedEmployee)  {
        const state = getState();
        const employee:any = state.employees && state.employees.find(employee => employee._id  === id)
        if(employee) {
            setState({
                ...state,
                selectedEmployee: employee
            })
            return employee;
        } else {
            return this._employeeService.putEmployee(employee._id).pipe(tap((result: any)=> {
                var state = getState()
                setState({
                    ...state,
                    selectedEmployee: result
                })
            }));
        }
     }

    @Action(AddEmployee)
    addUser({getState, patchState}: StateContext<EmployeeStateModel>, {payload}: AddEmployee) {
       // console.log(payload);
       return this._employeeService.postEmployee(payload).pipe(tap((result: any)=> {
           const state = getState();
           console.log(state);
           patchState({
            employees: [...state.employees, result]
           });
       }));
    }

    @Action(UpdateEmployee)
    updateEmployee({getState, patchState}: StateContext<EmployeeStateModel>, {payload}: UpdateEmployee) {
       return this._employeeService.putEmployee(payload).pipe(tap((result: any)=> {
           const state = getState();
           const employeeList = state.employees;
           const index = employeeList.findIndex((employee: {_id: string;}) => employee._id === payload._id);
           employeeList[index] = result;
           console.log(state);
           patchState({
            employees: employeeList
           });
       }));
    }

    @Action(DeleteEmployee)
    DeleteUser({getState, setState}: StateContext<EmployeeStateModel>, {id}: DeleteEmployee) {
       return this._employeeService.deleteEmployee(id).pipe(tap((result: any)=> {
           const state = getState();
           const filteredEmployee = state.employees.filter(employee => employee._id !== id);
           setState({
               ...state,
               employees: filteredEmployee
           })
       }));
    }


}

