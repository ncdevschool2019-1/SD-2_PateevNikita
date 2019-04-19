import { TestBed, inject } from '@angular/core/testing';

import { NetflixCatalogService } from './netflix-catalog.service';

describe('NetflixCatalogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetflixCatalogService]
    });
  });

  it('should be created', inject([NetflixCatalogService], (service: NetflixCatalogService) => {
    expect(service).toBeTruthy();
  }));
});
