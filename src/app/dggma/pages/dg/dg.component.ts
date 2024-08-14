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


  constructor() {}

  ngOnInit(): void {
    this.isINEGISelected = false;
  }

  setSelection(option: number): void {

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
        break

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

