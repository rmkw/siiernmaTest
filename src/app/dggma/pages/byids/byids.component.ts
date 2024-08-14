
import { Component, OnInit } from '@angular/core';
import { DGService } from '../../services/dg.service';
import { Escalas, Products } from '../../interfaces/product.interface';

import { iDireccionesGenerales } from '../../interfaces/u_admin.interface';
import { iActividadEstadisticaGeografica } from '../../interfaces/aeg.interface';
import { ProgInformacion } from '../../interfaces/pi.interface';


@Component({
  selector: 'app-byids',
  templateUrl: './byids.component.html',
  styleUrls: ['./byids.component.css'],
})
export class ByidsComponent implements OnInit {
  arrProductos: Products[] = [];
  arrEscalas: Escalas[] = [];
  arrDireccionesGenerales: iDireccionesGenerales[] = [];
  arrActividadEstadisticaGeografica: iActividadEstadisticaGeografica[] = [];
  arrProInfo: ProgInformacion[] = [];

  constructor(private _direServices: DGService) {}

  ngOnInit(): void {
    this.getProductos();
    this.getAllControl();
  }

  getProductos(): void {
    this._direServices.productos().subscribe((data) => {
      this.arrProductos = data;
    });
  }

  getAllControl() {
    //! DIRECCIONES
    this._direServices.direccionesGenerales().subscribe((data) => {
      this.arrDireccionesGenerales = data;
    });

    //! ESCALAS
    this._direServices.escalas().subscribe((data) => {
      this.arrEscalas = data;
    });

    //! ActividadEstadisticaGeografica
    this._direServices.actiEstaGeoName().subscribe((data) => {
      this.arrActividadEstadisticaGeografica = data;
    });

    //! PROGRAMAS DE INFORMACIÓN
    this._direServices.programasInformaName().subscribe((data) => {
      this.arrProInfo = data;
    });
  }
}


