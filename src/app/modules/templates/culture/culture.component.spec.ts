import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureComponent } from './culture.component';

describe('CultureComponent', () => {
  let component: CultureComponent;
  let fixture: ComponentFixture<CultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CultureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
