import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixCatalogComponent } from './netflix-catalog.component';

describe('NetflixCatalogComponent', () => {
  let component: NetflixCatalogComponent;
  let fixture: ComponentFixture<NetflixCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetflixCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetflixCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
