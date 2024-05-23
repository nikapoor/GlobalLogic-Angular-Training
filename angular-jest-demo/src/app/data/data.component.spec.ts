import { HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { FakeService } from '../services/fake.service';

import { DataComponent } from './data.component';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let fakeServiceMock: any;

  beforeEach(async () => {
    fakeServiceMock = {
      getData: jest.fn()
    }
    await TestBed.configureTestingModule({
      declarations: [ DataComponent ],
      providers: [
        {
          provide: FakeService, useValue: fakeServiceMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test getdata()', () => {
    const Res = {
      name: ""
    };
    jest.spyOn(fakeServiceMock, 'getData').mockReturnValue(of(Res));
    fixture.detectChanges();
    expect(component.serviceData.name).toBe(Res.name);
  });

});
