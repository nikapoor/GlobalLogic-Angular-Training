import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
   TestBed.configureTestingModule({
      declarations: [AppComponent] 
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
    
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-jest-demo'`, () => {
    expect(component.title).toEqual('angular-jest-demo');
  });
  


  it('should renderd tittle', () =>{
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-jest-demo app is running!');
  });
})
