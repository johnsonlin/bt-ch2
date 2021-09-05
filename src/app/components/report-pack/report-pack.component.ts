import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bt-report-pack',
  templateUrl: './report-pack.component.html',
  styleUrls: ['./report-pack.component.scss']
})
export class ReportPackComponent implements OnInit {
  @Input() title = '';
  @Input() description = '';
  @Input() packSelected = false;
  @Output() packSelect = new EventEmitter();
  @Output() packDeselect = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  selectPack() {
    this.packSelected = true;
    this.packSelect.emit();
  }

  deselectPack(event: Event) {
    event.stopPropagation();
    this.packSelected = false;
    this.packDeselect.emit();
  }
}
