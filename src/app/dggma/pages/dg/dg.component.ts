import { Component, OnInit } from '@angular/core';
import { DGService } from '../../services/dg.service';
import { Products } from '../../interfaces/product.interface';
import { Router } from '@angular/router';

interface CheckboxesState {
  [key: string]: boolean;
}
@Component({
  selector: 'app-dg',
  templateUrl: './dg.component.html',
  styleUrls: ['./dg.component.css'],
})
export class DgComponent implements OnInit {


  public products: Products [] = [];

  public isINEGISelected : boolean = true
  public isMDEASelected : boolean = true
  public isODSSelected : boolean = true
  public isINDSelected : boolean = true

  public primerDireccion: any[] = [];
  public segundaDireccion: any[] = [];
  public terceraDireccion: any[] = [];
  public cuartaDireccion: any[] = [];
  public quintaDireccion: any[] = [];

  public primerDir: number=0;
  public segundaDir: number=0;
  public terceraDir: number=0;
  public cuartaDir: number=0;
  public quintaDir: number=0;

  constructor(
    private router: Router,
    private _direServices : DGService,
  ){}

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
      this.fun();
    });


  }
  hiddenTheOtherContents_INEGI() {
    this.isINEGISelected = false;
    this.isMDEASelected = true;
    this.isODSSelected = true;
  }
  hiddenTheOtherContents_MDEA() {
    this.isINEGISelected = true;
    this.isMDEASelected = false;
    this.isODSSelected = true;
  }
  hiddenTheOtherContents_ODS() {
    this.isINEGISelected = true;
    this.isMDEASelected = true;
    this.isODSSelected = false;
  }

  navigateWithParam() {
    this.checkboxesState['direGeogrAmbiente'] = true;

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

  fun() {
    if (this.products.length == 0) {
      console.log('first');
    } else {
      this.DireccionCountstop = setInterval(() => {
        this.primerDir++;

        if (this.primerDir == this.primerDireccion.length) {
          clearInterval(this.DireccionCountstop);
        }
        if (this.primerDireccion.length == 0) {
          this.primerDir = 0;
        }
      }, 30);

      this.DireccionCountstop2 = setInterval(() => {
        this.segundaDir++;

        if (this.segundaDir === this.segundaDireccion.length) {
          clearInterval(this.DireccionCountstop2);
        }
      }, 25);

      this.DireccionCountstop3 = setInterval(() => {
        this.terceraDir++;

        if (this.terceraDir === this.terceraDireccion.length) {
          clearInterval(this.DireccionCountstop3);
        }
      }, 25);

      this.DireccionCountstop4 = setInterval(() => {
        this.cuartaDir++;

        if (this.cuartaDir === this.cuartaDireccion.length) {
          clearInterval(this.DireccionCountstop4);
        }
      }, 25);

      this.DireccionCountstop5 = setInterval(() => {
        this.quintaDir++;

        if (this.quintaDir === this.quintaDireccion.length) {
          clearInterval(this.DireccionCountstop5);
        }
        if (this.quintaDireccion.length == 0) {
          this.quintaDir = 0;
        }
      }, 30);
    }
  }
}
