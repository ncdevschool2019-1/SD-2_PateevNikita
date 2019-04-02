import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicCatalogComponent } from './music-catalog.component';

describe('MusicCatalogComponent', () => {
  let component: MusicCatalogComponent;
  let fixture: ComponentFixture<MusicCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
