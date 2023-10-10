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
  styleUrls: ['./dg.component.css']
})
export class DgComponent implements OnInit{

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
  }

  ngOnInit(): void {
  
    this.isINEGISelected = false;

    this._direServices.productos()
    .subscribe(data => { this.products = data;
    this.filtrarProductosPorDirecciones();
    })
    
  
  }
  hiddenTheOtherContents_INEGI(){
    this.isINEGISelected = false;
    this.isMDEASelected = true;
    this.isODSSelected = true;
  }
  hiddenTheOtherContents_MDEA(){
    this.isINEGISelected = true;
    this.isMDEASelected = false;
    this.isODSSelected = true;
  }
  hiddenTheOtherContents_ODS(){
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
}



DireccionCountstop: any  = setInterval(() => {

    this.primerDir++;
    if(this.primerDir == this.primerDireccion.length){
      clearInterval(this.DireccionCountstop)
    }

  },50)

  DireccionCountstop2: any  = setInterval(() => {

    this.segundaDir++;
    if(this.segundaDir === this.segundaDireccion.length){
      clearInterval(this.DireccionCountstop2)
    }

  },50)

  DireccionCountstop3: any  = setInterval(() => {

    this.terceraDir++;
        if (this.terceraDir === this.terceraDireccion.length){
          clearInterval(this.DireccionCountstop3)
        } 
        

  },50)

  DireccionCountstop4: any  = setInterval(() => {
  
    this.cuartaDir++;
        if(this.cuartaDir === this.cuartaDireccion.length){
          clearInterval(this.DireccionCountstop4)
        }
  },50)

  DireccionCountstop5: any  = setInterval(() => {

        this.quintaDir++;
        if(this.quintaDir === this.quintaDireccion.length){
          clearInterval(this.DireccionCountstop5)
        }
   
  },50)

}
