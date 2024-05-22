import { TestBed } from '@angular/core/testing';

import { FakeService } from './fake.service';
import { of } from 'rxjs';

describe('FakeService', () => {
  let service: FakeService;
  let HttpClientSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // service = TestBed.inject(FakeService);
    HttpClientSpy = {
      get: jest.fn()
    }
    service = new FakeService(HttpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getData()', () => { 
    const res = {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    };
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    jest.spyOn(HttpClientSpy, 'get').mockReturnValue(of(res));
    service.getData();
    expect(HttpClientSpy.get).toHaveBeenCalledTimes(1);
    expect(HttpClientSpy.get).toHaveBeenCalledWith(url);
  })
});
