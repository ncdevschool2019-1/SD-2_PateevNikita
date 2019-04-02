import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazinesCatalogComponent } from './magazines-catalog.component';

describe('MagazinesCatalogComponent', () => {
  let component: MagazinesCatalogComponent;
  let fixture: ComponentFixture<MagazinesCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazinesCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazinesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
