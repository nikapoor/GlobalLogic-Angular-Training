import { TestBed } from '@angular/core/testing';

import { FakeService } from './fake.service';

describe('FakeService', () => {
  let service: FakeService;
 let HttpClientSpy:any;
  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(FakeService);

  HttpClientSpy = {
      get:jest.fn()
    }
    service = new FakeService(); // Remove the argument from the constructor call
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  class FakeService {
    getData() {
      // implementation of getData method
    }
  }
});
