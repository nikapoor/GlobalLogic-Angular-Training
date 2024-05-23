import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsychronousComponent } from './asychronous.component';

describe('AsychronousComponent', () => {
  let component: AsychronousComponent;
  let fixture: ComponentFixture<AsychronousComponent>;

  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    
    TestBed.configureTestingModule({
      declarations: [AsychronousComponent]
    });
    fixture = TestBed.createComponent(AsychronousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call setTimeout', () => {
    expect(component.timeoutResponse).not.toBe('setTimeoutcheck');
    jest.advanceTimersByTime(1000);
    component.checkSettimeout();
    expect(setTimeout).toHaveBeenCalledTimes(1000);
    expect(component.timeoutResponse).toBe('setTimeoutcheck');
    expect(setTimeout).toHaveBeenCalledTimes(1);

});

});