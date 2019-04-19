import { TestBed, inject } from '@angular/core/testing';

import { MagazinesCatalogService } from './magazines-catalog.service';

describe('MagazinesCatalogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagazinesCatalogService]
    });
  });

  it('should be created', inject([MagazinesCatalogService], (service: MagazinesCatalogService) => {
    expect(service).toBeTruthy();
  }));
});
