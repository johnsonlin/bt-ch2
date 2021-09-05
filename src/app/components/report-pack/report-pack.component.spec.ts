import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPackComponent } from './report-pack.component';

describe('ReportPackComponent', () => {
  let component: ReportPackComponent;
  let fixture: ComponentFixture<ReportPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
