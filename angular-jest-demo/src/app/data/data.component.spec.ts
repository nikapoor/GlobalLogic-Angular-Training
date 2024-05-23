import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import { FakeService } from '../fake.service';
import { of } from 'rxjs'; // Import the 'of' operator from 'rxjs'

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let FakeServiceMock: any;
  beforeEach(async() => {
    FakeServiceMock={
      getData: jest.fn()
    }
     await TestBed.configureTestingModule({
      declarations: [DataComponent],
      providers: [{ 
        provide: FakeService, 
        useValue: FakeServiceMock }]
    }).compileComponents();;
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should test getServiceData', () => {
    const expres = {
      name:""
    };
    const Res = {}; 
    jest.spyOn(FakeServiceMock, 'getData').mockReturnValue(of(Res)); 
    fixture.detectChanges();
  });
});
