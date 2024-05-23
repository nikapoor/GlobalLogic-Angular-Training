import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { EMP } from 'src/app/shared/model/emp.model';
import { AddEMP, DeleteEMP, GetEMP, UpdateEMP } from 'src/app/state/employee/emp.action';
import { EmployeeState } from 'src/app/state/employee/emp.state';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'ngxs-emIndex',
  template: `
    <div class="d-flex justify-content-between align-items-center">
      <h3></h3>
     <button class="btn btn-warning mb-2" (click)="isOpenPopup = !isOpenPopup">{{isOpenPopup ? 'Back-To-list': 'Add-Employee'}}</button>
    </div>

    <div class="add" [ngStyle]="{ 'display': isOpenPopup ? 'block' : 'none' }">
  <form [formGroup]="forms" (ngSubmit)="onSubmit()" autocomplete="off">
    <div class="mb-3">
      <label class="form-label"><strong>Name</strong></label>
      <input type="text" class="form-control" formControlName="name" style="width: 100%;">
    </div>
    <div class="mb-3">
      <label class="form-label"><strong>Email</strong></label>
      <input type="email" class="form-control" formControlName="email" style="width: 100%;">
    </div>
    <div class="mb-3">
      <label class="form-label"><strong>Designation</strong></label>
      <input type="text" class="form-control" formControlName="designation" style="width: 100%;">
    </div>
    <div class="text-start">
      <button type="submit" class="btn btn-warning" [disabled]="forms.invalid">
        {{ forms.get('id')?.value ? 'Update' : 'Submit' }}
      </button>
    </div>
  </form>
</div>

    <div class="row"  *ngIf="!isOpenPopup">
      <div class="col-sm-4 mt-2" *ngFor="let emp of employee$ | async; index as i">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between">
          <h5 class="card-title" contenteditable="true">{{emp.name}}</h5>
          <!-- <button class="btn btn-outline-secondary">view</button> -->
          </div>
          <p contenteditable="true" class="card-text">{{emp.email}}</p>
          <p contenteditable="true" class="card-text">{{emp.designation}}</p>
          <button class="btn btn-outline-warning me-3"  (click)="onEdit(emp)">Edit</button>
          <button class="btn btn-danger" (click)="onDelete(emp.id)">Delete employee</button>
        </div>
      </div>
      </div>
    </div>
  
  `
})
export class IndexComponent implements OnInit, OnDestroy {

  forms!: FormGroup;

  @Select(EmployeeState.getEMPList)
  employee$!: Observable<EMP[]>;

  @Select(EmployeeState.isLoadEMP)
  isLoadEMP$!: Observable<boolean>

  empLoadedSub!: Subscription;
  isOpenPopup = false;

  constructor(private store: Store,  private fb: FormBuilder) {
    this.initForm()
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  initForm() {
    this.forms = this.fb.group({
      id: '',
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      designation: ['', Validators.required]
    })
  }

  getEmployee() {
    this.empLoadedSub = this.isLoadEMP$.subscribe(isDataLoaded => {
      if (!isDataLoaded) {
        this.store.dispatch(new GetEMP());
      }
    })
  }

  onSubmit() {
    if (this.forms.value.id) {
      this.store.dispatch(new UpdateEMP(this.forms.value))
    }
    else {
      this.store.dispatch(new AddEMP(this.forms.value))
    }
    this.forms.reset();
    this.isOpenPopup = false;
  }

  onEdit(emp: any) {
    this.isOpenPopup = true;
    this.forms.setValue(emp);
  }

  onDelete(id: string) {
    if (confirm('Do you want to delete user?')) {
      this.store.dispatch(new DeleteEMP(id))
      console.log('User Delete Successfully');
    }
  }

  ngOnDestroy(): void {
    this.empLoadedSub.unsubscribe()
  }
}