import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableReportComponent } from './expandable-report.component';

describe('ExpandableReportComponent', () => {
  let component: ExpandableReportComponent;
  let fixture: ComponentFixture<ExpandableReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandableReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
