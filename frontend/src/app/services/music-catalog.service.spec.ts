import { TestBed, inject } from '@angular/core/testing';

import { MusicCatalogService } from './music-catalog.service';

describe('MusicCatalogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicCatalogService]
    });
  });

  it('should be created', inject([MusicCatalogService], (service: MusicCatalogService) => {
    expect(service).toBeTruthy();
  }));
});
