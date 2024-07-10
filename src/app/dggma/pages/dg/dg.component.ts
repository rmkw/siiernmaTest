import { Component, OnInit } from '@angular/core';
import { DGService } from '../../services/dg.service';
import { Products } from '../../interfaces/product.interface';
import { Router } from '@angular/router';
import { FlagService } from '../../services/flagService.service';

interface CheckboxesState {
  [key: string]: boolean;
}
@Component({
  selector: 'app-dg',
  templateUrl: './dg.component.html',
  styleUrls: ['./dg.component.css'],
})
export class DgComponent implements OnInit {
  isMobile: boolean = window.innerWidth <= 480;

  public products: Products[] = [];

  public isINEGISelected: boolean = true;
  public isMDEASelected: boolean = true;
  public isODSSelected: boolean = true;
  public isINDSelected: boolean = true;
  public isGeoNodeSelected: boolean = true;

  public primerDireccion: any[] = [];
  public segundaDireccion: any[] = [];
  public terceraDireccion: any[] = [];
  public cuartaDireccion: any[] = [];
  public quintaDireccion: any[] = [];

  public primerDir: number = 0;
  public segundaDir: number = 0;
  public terceraDir: number = 0;
  public cuartaDir: number = 0;
  public quintaDir: number = 0;

  showMoreText: boolean = false;

  constructor(
    private router: Router,
    private _direServices: DGService,
    private _flagService: FlagService
  ) {
    window.addEventListener('resize', (event) => this.onResize(event));
  }

  //!Definimos los checkbox
  checkboxesState: CheckboxesState = {
    direGeogrAmbiente: false,
    direEstaSocio: false,
    direEstaEconomicas: false,
    direEstaGobSegPubJus: false,
    direInteAnaInv: false,
  };
  DireccionCountstop: any;
  DireccionCountstop2: any;
  DireccionCountstop3: any;
  DireccionCountstop4: any;
  DireccionCountstop5: any;

  ngOnInit(): void {
    this.isINEGISelected = false;

    //! Merge S.E.
    this._direServices.productos().subscribe((data) => {
      this.products = data;
      this.filtrarProductosPorDirecciones();

    });
  }

  toggleShowMoreText() {
    this.showMoreText = !this.showMoreText;
  }

  onResize(event: Event): void {
    this.isMobile = window.innerWidth <= 480;
  }

  hiddenTheOtherContents_INEGI() {
    this.isINEGISelected = false;
    this.isMDEASelected = true;
    this.isODSSelected = true;
    this.isINDSelected = true;
    this.isGeoNodeSelected = true;
  }
  hiddenTheOtherContents_MDEA() {
    this.isINEGISelected = true;
    this.isMDEASelected = false;
    this.isODSSelected = true;
    this.isINDSelected = true;
    this.isGeoNodeSelected = true;
  }
  hiddenTheOtherContents_ODS() {
    this.isINEGISelected = true;
    this.isMDEASelected = true;
    this.isODSSelected = false;
    this.isINDSelected = true;
    this.isGeoNodeSelected = true;
  }
  hiddenTheOtherContents_IND() {
    this.isINEGISelected = true;
    this.isMDEASelected = true;
    this.isODSSelected = true;
    this.isINDSelected = false;
    this.isGeoNodeSelected = true;
  }
  hiddenTheOtherContents_GeoNode(){
    this.isINEGISelected = true;
    this.isMDEASelected = true;
    this.isODSSelected = true;
    this.isINDSelected = true;
    this.isGeoNodeSelected = false;
  }

  navigateWithParam() {
    this._flagService.setFlagGeo(true);
    this.router.navigate(['/dg/products']);
  }
  navigateWithParam1() {
    this._flagService.setFlagEstadisticas(true);
    this.router.navigate(['/dg/products']);
  }
  navigateWithParam2() {
    this._flagService.setFlagEconomicas(true);
    this.router.navigate(['/dg/products']);
  }
  navigateWithParam3() {
    this._flagService.setFlagGobierno(true);
    this.router.navigate(['/dg/products']);
  }
  navigateWithParam4() {
    this._flagService.setFlagIntegracion(true);
    this.router.navigate(['/dg/products']);
  }

  filtrarProductosPorDirecciones() {
    this.primerDireccion = this.products.filter((product) => {
      return product.dg_prod === 1;
    });
    this.segundaDireccion = this.products.filter((product) => {
      return product.dg_prod === 2;
    });

    this.terceraDireccion = this.products.filter((product) => {
      return product.dg_prod === 3;
    });

    this.cuartaDireccion = this.products.filter((product) => {
      return product.dg_prod === 4;
    });

    this.quintaDireccion = this.products.filter((product) => {
      return product.dg_prod === 5;
    });

    console.log(this.products);
  }


}

