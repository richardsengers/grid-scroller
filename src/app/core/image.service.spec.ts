import { inject, TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';
import { ApiHttpService } from './api-http.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ImageService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ApiHttpService]
  }));

  it('should be initialized', inject([ApiHttpService], (apiHttpService: ApiHttpService) => {
    expect(ApiHttpService).toBeTruthy();
  }));

  it('should be created', () => {
    const service: ImageService = TestBed.get(ImageService);
    expect(service).toBeTruthy();
  });
});
