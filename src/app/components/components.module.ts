import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ReportPackComponent } from './report-pack/report-pack.component';
import { ExpandableReportComponent } from './expandable-report/expandable-report.component';
import { ReportTableComponent } from './report-table/report-table.component';
import { UserToolsComponent } from './user-tools/user-tools.component';
import { DateRangeFieldComponent } from './date-range-field/date-range-field.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { DateFieldComponent } from './date-field/date-field.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    ReportPackComponent,
    ExpandableReportComponent,
    ReportTableComponent,
    UserToolsComponent,
    DateRangeFieldComponent,
    ButtonGroupComponent,
    DateFieldComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    DateRangeFieldComponent,
    ButtonGroupComponent,
    ReportTableComponent,
    ExpandableReportComponent,
    ReportPackComponent,
  ],
})
export class ComponentsModule {
}
