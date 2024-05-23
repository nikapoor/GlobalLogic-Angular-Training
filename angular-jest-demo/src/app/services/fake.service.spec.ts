import { TestBed } from '@angular/core/testing';
import { FakeService } from './fake.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
describe('FakeService', () => {
  let service: FakeService;
  let HttpClientSpy: any;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    HttpClientSpy = {
      get: jest.fn()
    }
    service = new FakeService(HttpClientSpy)
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should test getData', () => {
    const rest = {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    };
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    jest.spyOn(HttpClientSpy, 'get').mockReturnValue(of(rest))
    service.getData();
    expect(HttpClientSpy.get).toHaveBeenCalledTimes(1);
    expect(HttpClientSpy.get).toHaveBeenCalledWith(url);
  });
  it(`should test getDatav2()`, () => {
    const res = {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    };
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    jest.spyOn(HttpClientSpy, "get").mockReturnValue(of(res));
    service.getDatav2().subscribe(
    {
      next: data => {
        expect(data).toEqual(res);
      },
      error: error => {
        console.log(error);
      }
  }
   );
expect(HttpClientSpy.get).toHaveBeenCalledTimes(1);
expect(HttpClientSpy.get).toHaveBeenCalledWith(url);
})
it('should test getDatav2() thorw error', (done) => {
const errorResponse = new HttpErrorResponse({
  error : '404 error',
  status: 404,
  statusText:'Not Found'
});
const url = "https://jsonplaceholder.typicode.com/todos/1";
jest.spyOn(HttpClientSpy, 'get').mockReturnValue(throwError(() => errorResponse));
service.getDatav2().subscribe(
  {
next: data =>console.log(data),
error: error => {
expect(error.message).toContain('404 error');
done ();
}})
expect (HttpClientSpy.get). toHaveBeenCalledTimes (1);
expect (HttpClientSpy.get).toHaveBeenCalledWith(url);
})
})