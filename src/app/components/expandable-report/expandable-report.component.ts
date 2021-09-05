import { Component, Input, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'bt-expandable-report',
  templateUrl: './expandable-report.component.html',
  styleUrls: ['./expandable-report.component.scss']
})
export class ExpandableReportComponent implements OnInit {
  @Input() title = '';
  @Input() description = '';
  // TODO: this is for demo purpose only
  @Input() content = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia ante sit amet augue placerat sollicitudin non sit amet nisi. Quisque aliquet bibendum eros, a porta elit auctor sed. Curabitur posuere eleifend dignissim. Donec vitae commodo mi.',
    'Suspendisse feugiat elit euismod, cursus eros eu, pharetra leo. Mauris eget lorem velit. Vivamus tincidunt magna sed pretium volutpat. Mauris eget velit laoreet, accumsan orci pretium, egestas tortor.',
  ];
  contentId = uuid();
  isCollapsed = true;

  constructor() {}

  ngOnInit(): void {
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
