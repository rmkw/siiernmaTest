
import { Component, OnInit } from '@angular/core';
import { DGService } from '../../services/dg.service';
import { Escalas, Products } from '../../interfaces/product.interface';

import { iDireccionesGenerales } from '../../interfaces/u_admin.interface';
import { iActividadEstadisticaGeografica } from '../../interfaces/aeg.interface';
import { ProgInformacion } from '../../interfaces/pi.interface';

import { TreeNode } from 'primeng/api';
import { Componente, Mdea, Subcomponente, Topico } from '../../interfaces/mdea.interface';

import { forkJoin } from 'rxjs';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';




@Component({
  selector: 'app-byids',
  templateUrl: './byids.component.html',
  styleUrls: ['./byids.component.css'],
})
export class ByidsComponent implements OnInit {
  cardsData = [
    { title: '' },
    { title: '' },
    { title: '' },
    { title: '' },
    { title: '' },
    { title: '' },
    { title: '' },
    { title: '' },
    { title: '' },
    { title: '' },
  ];

  first: number = 0;
  rows: number = 10;

  selectedCardIndex: number | null = null;

  arrProductos: Products[] = [];
  arrEscalas: Escalas[] = [];
  arrDireccionesGenerales: iDireccionesGenerales[] = [];
  arrActividadEstadisticaGeografica: iActividadEstadisticaGeografica[] = [];
  arrProInfo: ProgInformacion[] = [];

  arrMdea: Mdea[] = [];

  //! arreglos de mdea y sus controles
  arrComponentes: Componente[] = [];
  arrSubComponete: Subcomponente[] = [];
  arrTopico: Topico[] = [];

  arrCompoFiltrado: Mdea[] = [];
  arrProductosFiltrados: Products[] = [];
  arrProductosOriginal: Products[] = [...this.arrProductos]; // Copia del array original

  files: TreeNode<any>[] = [];
  selectedFiles: any;

  paginatedProducts: any[] = [];

  constructor(private _direServices: DGService) {
    // Inicializa la copia del array original
    this._direServices.productos().subscribe((data) => {
      this.arrProductos = data;
      this.updatePaginatedProducts();
      this.arrProductosOriginal = [...this.arrProductos];
      console.log('arrProductosOriginal', this.arrProductosOriginal);
    });
  }

  ngOnInit(): void {
    this.mdeaControll();
    this.getMdea_Collection();
    this.getAllControl();
  }

  updatePaginatedProducts() {
    const start = this.first;
    const end = this.first + this.rows;
    this.paginatedProducts = this.arrProductos.slice(start, end);
  }
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.updatePaginatedProducts();
  }

  getProductos(): void {
    this._direServices.productos().subscribe((data) => {
      this.arrProductos = data;
      this.updatePaginatedProducts();
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
  getMdea_Collection() {
    this._direServices.mdea().subscribe((data) => {
      this.arrMdea = data;
    });
  }

  toggleCollapse(index: number) {
    // Alterna la visibilidad del card actual
    this.selectedCardIndex = this.selectedCardIndex === index ? null : index;
  }

  getDireccionGeneral(dgProd: string | number): string {
    const numDgProd = Number(dgProd);
    switch (numDgProd) {
      case 1:
        return 'Dirección General de Geografía y Medio Ambiente';
      case 2:
        return 'Dirección General de Estadísticas Sociodemográficas';
      case 3:
        return 'Dirección General de Estadísticas Económicas';
      case 4:
        return 'Dirección General de Estadísticas de Gobierno, Seguridad Pública y Justicia';
      case 5:
        return 'Dirección General de Integración, Análisis e Investigación';
      default:
        return '';
    }
  }
  getIconClass(dgProd: number | string): string {
    const numDgProd = Number(dgProd); // Convertimos a número

    switch (numDgProd) {
      case 1:
        return 'bi bi-globe me-2 titulodetarjeta';
      case 2:
        return 'bi bi-bar-chart me-2 titulodetarjeta';
      case 3:
        return 'bi bi-cash-stack me-2 titulodetarjeta';
      case 4:
        return 'bi bi-bank me-2 titulodetarjeta';
      case 5:
        return 'bi bi-file-earmark-text me-2 titulodetarjeta';
      default:
        return ''; // Retorna una cadena vacía o un ícono por defecto si es necesario
    }
  }
  getTipoProd(tipo1: string | number, tipo2: string | number): string {
    const numTipo1 = Number(tipo1);
    const numTipo2 = Number(tipo2);

    if (numTipo1 === 1 && numTipo2 === 0) {
      return 'Geográfico';
    } else if (numTipo1 === 0 && numTipo2 === 1) {
      return 'Estadístico';
    } else if (numTipo1 === 1 && numTipo2 === 1) {
      return 'Geográfico y Estadístico';
    } else {
      return ''; // Retorna una cadena vacía si no se cumple ninguna condición
    }
  }
  getCoberturas(item: any): string[] {
    const coberturas = [];
    if (item?.cobertura_geo__1 === 1) coberturas.push('Nacional');
    if (item?.cobertura_geo__2 === 1) coberturas.push('Estatal');
    if (item?.cobertura_geo__3 === 1) coberturas.push('Municipal');
    if (item?.cobertura_geo__4 === 1) coberturas.push('Regional');
    if (item?.cobertura_geo__5 === 1) {
      coberturas.push(item.o_cobertura);
    }
    return coberturas;
  }
  // Método para obtener el texto de fragmentación
  getFragmentacionText(item: any): string {
    if (item?.fragmenta === 1) {
      return 'Sí';
    } else if (item?.fragmenta === 2) {
      return 'No';
    } else {
      return '';
    }
  }
  // Método para verificar si el producto está fragmentado
  isFragmentado(item: any): boolean {
    return item?.fragmenta === 1;
  }
  // Método para verificar si el elemento se actualiza
  seActualiza(item: any): boolean {
    return item?.actualizacion === 1;
  }
  // Método para obtener el texto de actualización
  getTextoActualizacion(item: any): string {
    switch (item?.p_actualizacion) {
      case 1:
        return 'Mensual';
      case 2:
        return 'Anual';
      case 3:
        return 'Bienal';
      case 4:
        return 'Cuatrienal';
      case 5:
        return 'Quinquenal';
      case 6:
        return 'Irregular';
      case 7:
        return item.o_periodo || ''; // Maneja el caso especial
      default:
        return '';
    }
  }
  // Método para obtener el título de la actualización
  getTituloActualizacion(item: any): string {
    return item?.p_actualizacion === 7 ? item.o_periodo || '' : '';
  }
  getEscalasText(indicador_ps: number | undefined): string {
    let escalasText = '';
    for (let escalas of this.arrEscalas) {
      if (escalas.id === indicador_ps) {
        escalasText = escalas.text;
        break;
      }
    }
    return escalasText;
  }
  truncateText(text: string, maxLength: number): string {
    if (!text) return '';
    return text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text;
  }
  // Método para truncar el texto con puntos suspensivos
  truncateTextACTUALIZA(text: string, maxLength: number): string {
    if (!text) return '';
    return text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text;
  }
  // Método combinado que trunca el texto obtenido por getTextoActualizacion
  getTruncatedTextoActualizacion(item: any, maxLength: number): string {
    return this.truncateTextACTUALIZA(
      this.getTextoActualizacion(item),
      maxLength
    );
  }

  mdeaControll() {
    forkJoin({
      componentes: this._direServices.componentes(),
      subcomponentes: this._direServices.subcomponentes(),
      topicos: this._direServices.topicos(),
    }).subscribe({
      next: ({ componentes, subcomponentes, topicos }) => {
        this.files =
          this.transformDataToTreeNodeMdea(
            componentes,
            subcomponentes,
            topicos
          ) || [];
      },
      error: (err) => {
        console.error('Error al obtener datos:', err);
      },
    });
  }
  //! para el treenode
  transformDataToTreeNodeMdea(
    componentes: Componente[],
    subcomponentes: Subcomponente[],
    topicos: Topico[]
  ): TreeNode[] {
    const subcomponentesMap: { [key: number]: Subcomponente[] } =
      subcomponentes.reduce((acc, subcomponente) => {
        if (!acc[subcomponente.parentid]) {
          acc[subcomponente.parentid] = [];
        }
        acc[subcomponente.parentid].push(subcomponente);
        return acc;
      }, {} as { [key: number]: Subcomponente[] });

    const topicosMap: { [key: number]: Topico[] } = topicos.reduce(
      (acc, topico) => {
        if (!acc[topico.parentid]) {
          acc[topico.parentid] = [];
        }
        acc[topico.parentid].push(topico);
        return acc;
      },
      {} as { [key: number]: Topico[] }
    );

    return componentes.map((componente) => ({
      key: `componente_${componente.id}`,
      label: componente.text,
      data: componente,
      children: (subcomponentesMap[componente.id] || []).map(
        (subcomponente: Subcomponente) => ({
          key: `subcomponente_${subcomponente.id}`,
          label: subcomponente.text,
          data: subcomponente,
          children: (topicosMap[subcomponente.id] || []).map(
            (topico: Topico) => ({
              key: `topico_${topico.id}`,
              label: topico.text,
              data: topico,
            })
          ),
        })
      ),
    }));
  }

  filtroMdea() {
    const selected = this.selectedFiles.map((file: any) => {
      const keyParts = file.key.split('_');
      return parseInt(keyParts[1], 10); // Obtenemos el número del key
    });
    console.log(' IDs seleccionados:', selected);
    this.obtenerResultadoFiltrado(selected);
  }

  filtrarMdeaPorComponente(select: any) {
    console.log('memandaste', select);
    return of(this.arrMdea).pipe(
      map((mdea) => mdea.filter((item) => item.comp_mdea == select))
    );
  }

  obtenerResultadoFiltrado(selected: any) {
    if (selected.length === 0) {
      // Si no hay elementos seleccionados, restaura arrProductos al estado original
      this.arrProductos = [...this.arrProductosOriginal];
      console.log(
        'Filtro eliminado, productos restaurados:',
        this.arrProductos
      );
    } else {
      const select = selected;
      console.log('memandaste', select);
      console.log('first', this.arrProductosOriginal);
      this.filtrarMdeaPorComponente(select)
        .pipe(
          map((resultado) => {
            const interviewIds = resultado.map((item) => item.interview__id);
            const productosFiltrados = this.arrProductosOriginal.filter(
              (producto) => interviewIds.includes(producto.interview__id)
            );
            this.arrProductos = productosFiltrados; // Actualiza arrProductos con los productos filtrados
            return productosFiltrados;
          })
        )
        .subscribe((productosFiltrados) => {
          console.log('Productos filtrados:', productosFiltrados);
        });
    }
  }
}


