// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';
// import { products, testError } from './script';

// describe('AppComponent', () => {
//   beforeEach(() => TestBed.configureTestingModule({
//     imports: [RouterTestingModule],
//     declarations: [AppComponent]
//   }));
  

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'angular-jest-demo'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('angular-jest-demo');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('.content span')?.textContent).toContain('angular-jest-demo app is running!');
//   });
//    test('checking item in  tarray', () => {
//  expect (products).toContain('ERP');
//  expect(new Set (products)).toContain('ERP');
//    })
//    test('checking item in  tarray', () => {
//      expect(() => testError()).toThrow('');
//      expect(() => testError()).toThrow('error');
//      expect(() => testError()).toThrow("your signup shwoing  error");
//      expect(() => testError()).toThrow(/your signup shwoing  error.$/);  
//   })
// });

// steup initial 
  beforeAll(() =>{
    console.log('beforeall() renderd..')


  })
  test('Test One', () =>{
       console.log('Test One renderd..')
  })
  test('Test Two', () =>{
    console.log('Test Two renderd..')
  })
 afterAll(() =>{
  console.log('afterall() renderd..')
 })
