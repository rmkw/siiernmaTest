import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dg',
  templateUrl: './dg.component.html',
  styleUrls: ['./dg.component.css'],
})
export class DgComponent implements OnInit {
  public isINEGISelected: boolean = true;
  public isMDEASelected: boolean = true;
  public isODSSelected: boolean = true;
  public isINDSelected: boolean = true;
  public isGeoNodeSelected: boolean = true;
  private intervalId: any;
  private userClicked: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.isINEGISelected = false;
    this.startAutoSelection();
  }
  startAutoSelection(): void {
    let option = 1;
    this.intervalId = setInterval(() => {
      this.setSelection(option, false);

      option = option < 5 ? option + 1 : 1;
    }, 4000);

  }
  stopAutoSelection(): void {

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  setSelection(option: number, userClick: boolean = true): void {
    if (userClick) {

      this.userClicked = true;
      this.stopAutoSelection(); // Stop automatic selection when user clicks
    }

    switch (option) {
      case 1:
        this.isINEGISelected = false;
        this.isMDEASelected = true;
        this.isODSSelected = true;
        this.isINDSelected = true;
        this.isGeoNodeSelected = true;
        break;

      case 2:
        this.isINEGISelected = true;
        this.isMDEASelected = false;
        this.isODSSelected = true;
        this.isINDSelected = true;
        this.isGeoNodeSelected = true;
        break;

      case 3:
        this.isINEGISelected = true;
        this.isMDEASelected = true;
        this.isODSSelected = false;
        this.isINDSelected = true;
        this.isGeoNodeSelected = true;
        break;

      case 4:
        this.isINEGISelected = true;
        this.isMDEASelected = true;
        this.isODSSelected = true;
        this.isINDSelected = false;
        this.isGeoNodeSelected = true;
        break;

      case 5:
        this.isINEGISelected = true;
        this.isMDEASelected = true;
        this.isODSSelected = true;
        this.isINDSelected = true;
        this.isGeoNodeSelected = false;
        break;

      default:
        console.warn('Opción no válida');
        break;
    }
  }
}

