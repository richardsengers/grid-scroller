import { inject, TestBed } from '@angular/core/testing';

import { ApiHttpService } from './api-http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiHttpService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ApiHttpService]
  }));

  it('should be initialized', inject([ApiHttpService], (apiHttpService: ApiHttpService) => {
    expect(ApiHttpService).toBeTruthy();
  }));

  it('should be created', () => {
    const service: ApiHttpService = TestBed.get(ApiHttpService);
    expect(service).toBeTruthy();
  });
});
