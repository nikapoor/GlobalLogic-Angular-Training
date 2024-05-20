import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { EmployeeState } from 'src/store/states/employee.state';
import { Observable, Subscription } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { AddEmployee, DeleteEmployee, GetEmployee, SetSelectedEmployee, UpdateEmployee } from 'src/store/actions/employee.action';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

@Select(EmployeeState.getEmployeeList)
 employees$!: Observable<Employee[]>;

 @Select(EmployeeState.employeeLoaded)
 employeeLoaded$!: Observable<boolean>;

 employeeLoadedSub!: Subscription;


  empForm! : FormGroup;
  showModal:boolean = false;
  editMode:boolean = false;

  employees!: Employee[];
  selectedEmployee!: Employee;

  constructor(
    private fb: FormBuilder,
    private _empService:EmployeeService,
  private store: Store) { }

  ngOnInit(): void {
    this.getEmployees();

    this.empForm = this.fb.group({
      _id: [''],
      name: ['Alex Johnson', Validators.required],
      position: ['Full Stack Developer', Validators.required],
      office: ['United States', Validators.required],
      salary: [200000, Validators.required]
    })
  }

  getEmployees(){
    // this._empService.getEmployeeList().subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.employees = res as Employee[];
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // )
    this.employeeLoadedSub =
    this.employeeLoaded$.subscribe(loadEmployee => {
      if(!loadEmployee){
        this.store.dispatch(new GetEmployee());
      }
    });
  }

  onEmpSubmit(){
    if(this.empForm.valid){
      console.log(this.empForm.value);
      if(this.editMode){
        // this._empService.putEmployee(this.empForm.value).subscribe(
        //   (res) => {
        //     console.log('Updated successfully');
        //     this.getEmployees();
        //     this.editMode = false;
        //   },
        //   (err) => {
        //     console.log(err);
        //   },
        // );
        this.employeeLoadedSub = this.store.dispatch(new UpdateEmployee(this.empForm.value, this.empForm.value._id)).subscribe(() => {
          this.empForm.reset();
          this.onCloseModal();
        });
      }else{
        console.log(this.empForm.value);
        // this._empService.postEmployee(this.empForm.value).subscribe(
        //   (res) => {
        //     console.log('Saved successfully');
        //     this.getEmployees();
        //   },
        //   (err) => {
        //     console.log(err);
        //   },
        // );
        this.employeeLoadedSub = this.store.dispatch(new AddEmployee(this.empForm.value)).subscribe(() => {
          this.empForm.reset();
          this.onCloseModal();
        });

      }



    }else{

      let key = Object.keys(this.empForm.controls);
      // console.log(key);

      key.filter(data =>{
        // console.log(data);
        let control = this.empForm.controls[data];
        // console.log(control);
        if(control.errors !=null){
          control.markAsTouched();
        }
      })
    }
  }

  onEditEmployee(emp:Employee){
    this.editMode = true;

    console.log(emp);
    this.showModal = true;
    this.selectedEmployee = emp;
    console.log(this.selectedEmployee);
    //this.store.dispatch(new SetSelectedEmployee(emp._id));
     this.empForm.patchValue(this.selectedEmployee);
  }

  onDeleteEmployee(id: any){
    if(confirm('Do you want to delete this employee?')){
      // console.log(id);
      // this._empService.deleteEmployee(id).subscribe(
      //   (res) => {
      //     console.log('Delete successfully');
      //     this.getEmployees();
      //   },
      //   (err) => {
      //     console.log(err);
      //   },
      // );

      this.store.dispatch(new DeleteEmployee(id))
    }
  }

  onAddEmployee(){
    this.showModal = true;
  }

  onCloseModal(){
    this.showModal = false;
  }

}
