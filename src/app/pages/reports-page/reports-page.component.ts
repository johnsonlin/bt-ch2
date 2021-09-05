import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bt-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss']
})
export class ReportsPageComponent implements OnInit {
  selectedPack: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedPack(packId: number) {
    this.selectedPack = packId;
  }

  resetSelectedPack() {
    this.selectedPack = 0;
  }
}
