import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTemplatesComponent } from './section-templates.component';

describe('SectionTemplatesComponent', () => {
  let component: SectionTemplatesComponent;
  let fixture: ComponentFixture<SectionTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
