import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Products, Escalas, SecuenciaVar } from '../../interfaces/product.interface';
import { DgaPprod, Pi, ProgInformacion } from '../../interfaces/pi.interface';
import { UAdmin } from '../../interfaces/u_admin.interface';
import { Aeg2, DgaProd, SecuenciaAeg } from '../../interfaces/aeg.interface';
import { Componente, Mdea, Subcomponente, Topico } from '../../interfaces/mdea.interface';
import { MetaODS, Ods, SecuenciaOds } from '../../interfaces/ods.interface';
import { IndicadoresPS2023, PS2023, SecuenciaPS } from '../../interfaces/ps.interface';

import { DGService } from '../../services/dg.service';
import { TreeNode } from 'primeng/api';
import { Tree } from 'primeng/tree';
import { FlagService } from '../../services/flagService.service';


//! Interface de los checkbox
interface CheckboxesState {
  [key: string]: boolean;
}


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  //*PRODUCTOS
  public products: Products[] = [];

  //*ESCALAS
  public escalas: Escalas[] = [];

  //* VARIABLES
  public secuenciaVAR: SecuenciaVar[] = [];

  //* Productos de información
  public pi?: Pi[] = [];

  //* direcciones generales
  public dgs: UAdmin[] = [];

  //*secuencia PI
  public proInfo: ProgInformacion[] = [];

  //*Secuencia AEG
  public aegSecuencia: SecuenciaAeg[] = [];

  //* NOMBRE dirección general AEG
  public dga_Pprod: DgaPprod[] = [];

  //*NOMBRES DE LA AEG
  public aeg_2: Aeg2[] = [];

  //* NOMBRE DE LA DIRECCIÓN GENERAL ADJUNTA RESPONSABLE
  public aeg_Prod: DgaProd[] = [];

  //*secuencia MDEAS
  public mdeas: Mdea[] = [];

  //* NOMBRE DE LOS COMPONENTES
  public componentesMDEA: Componente[] = [];

  //*nombres de los sub componentes
  public subComponentesMDEA: Subcomponente[] = [];

  //*nombres de los tópicos
  public topicoMDEA: Topico[] = [];

  //*secuencia de los ODS
  public ODSes: SecuenciaOds[] = [];

  public odsSecuencia: SecuenciaOds[] = [];

  //*nombre de los objetivos ODS
  public objetivODS: Ods[] = [];

  //*nombre de las metas del ods
  public metasODS: MetaODS[] = [];

  //*secuencia PS
  public PSes?: SecuenciaPS[] = [];

  //*nombre de los ps
  public ps2023: PS2023[] = [];

  //*nombre del segundo parámetro del PS
  public indicadoresPS2023: IndicadoresPS2023[] = [];

  //*banderas para ocultar filtros y mostrarlos
  flagHidden: boolean = true;
  flagFilter: boolean = false;
  flagOther: boolean = true;

  //! elementoSeleccionado es una variable para tomar el objeto del array de productos y poder sacar la info de uno solo
  elementoSeleccionado: any;

  //!Definimos los checkbox
  checkboxesState: CheckboxesState = {
    direGeogrAmbiente: false,
    direEstaSocio: false,
    direEstaEconomicas: false,
    direEstaGobSegPubJus: false,
    direInteAnaInv: false,
  };
  checkboxesCobe: CheckboxesState = {
    cobeNacional: false,
    cobeEstatal: false,
    cobeMunicipal: false,
    cobRegional: false,
  };
  checkboxesType: CheckboxesState = {
    typeDatoGeo: false,
    typeTabulado: false,
    typePublicacion: false,
  };

  //! elementos que nos ayudara a filtrar
  filteredProducts: Products[] = [];
  filteredProductsBySearchByQuery: Products[] = [];
  showFilteredProducts = false;
  displayedProductCount: number = 0;
  displayedProductCountAll: number = 0;

  //! términos de búsqueda
  terminoBusqueda: string = '';

  //! otro elemento para filtrar
  selectedRadioValue: string = '';

  //! FECHAS SELECT referencia
  allYears: number[] = [];
  uniqueYears: number[] = [];

  allYearsHasta: number[] = [];
  uniqueYearsHasta: number[] = [];

  //* Filtro fechas
  selectedYear: number | null = null;
  selectedYearHasta: number | null = null;

  //! FECHAS SELECT publicación
  pU_allYears: number[] = [];
  pU_uniqueYears: number[] = [];

  pU_allYearsHasta: number[] = [];
  pU_uniqueYearsHasta: number[] = [];
  //* Filtro fechas publicación
  pU_selectedYear: number | null = null;
  pU_selectedYearHasta: number | null = null;

  //! MDEA
  componentes: Componente[] = [];
  subcomponente: Subcomponente[] = [];
  topicos: Topico[] = [];
  mdeasbyCompo: Mdea[] = [];

  selectedOptionsSub_componente: { [key: string]: boolean } = {};

  selectedOptionsTopico: { [key: string]: boolean } = {};

  loading = true;
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
    { title: '' },
    { title: '' },
    { title: '' },
    { title: '' },
  ];

  //* filtros mdea
  selectedNodesMdea: any;
  treeDataMdea: TreeNode[] = [];

  combinedResultsMdea: Mdea[] = [];

  selectedTree: boolean = false;
  unSelectedTree: boolean = false;

  selectComponentekey: any;
  unSelectComponentekey: any;

  filterStates: { [key: string]: boolean } = {};
  flagFirtsFilters: boolean = false;
  flagSegundaFilters: boolean = false;
  flagTerceroFilters: boolean = false;

  //* Filtros ods
  treeDataOds: TreeNode[] = [];
  selectedNodesOds: any;
  filterStatesODS: { [key: string]: boolean } = {};
  selectODSkey: any;
  unSelectODSkey: any;

  public combinedResultsODS: SecuenciaOds[] = [];

  deleteFilterFlag: boolean = true;

  tree!: Tree;
  banderaSearchByQuery: boolean = false;

  constructor(
    private _direServices: DGService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private _flagService: FlagService,
  ) {
    this.combinedResultsMdea = [];
  }

  //!Funcion que ayuda a transformar los arreglos de objetos de componentes, subcomponentes y topicos para que este pueda ser compatible con la estructura treenode
  transformDataToTreeNodeMdea(
    componentes: Componente[],
    subcomponentes: Subcomponente[],
    topicos: Topico[]
  ): TreeNode[] {
    return componentes.map((componente) => {
      const subcomponenteNodes: TreeNode[] = subcomponentes
        .filter((subcomponente) => subcomponente.parentid === componente.id)
        .map((subcomponente) => {
          const topicoNodes: TreeNode[] = topicos
            .filter((topico) => topico.parentid === subcomponente.id)
            .map((topico) => ({
              key: `topico_${topico.id}`,
              label: topico.text,
              data: topico,
            }));
          return {
            key: `subcomponente_${subcomponente.id}`,
            label: subcomponente.text,
            data: subcomponente,
            children: topicoNodes,
          };
        });
      return {
        key: `componente_${componente.id}`,
        label: componente.text,
        data: componente,
        children: subcomponenteNodes,
      };
    });
  }

  //! funcion para ods la misma que arriba
  transformDataToTreeNodeOds(
    objetivoOds: Ods[],
    metaOds: MetaODS[]
  ): TreeNode[] {
    return objetivoOds.map((objetivo) => {
      const objetivosNodes: TreeNode[] = metaOds
        .filter((metas) => metas.parentid === objetivo.id)
        .map((metas) => {
          return {
            key: `metas_${metas.id}`,
            label: metas.text,
            data: metas,
            selected: false,
          };
        });
      return {
        key: `objetivos_${objetivo.id}`,
        label: objetivo.text.slice(3, 50),
        data: objetivo,
        children: objetivosNodes,
        selected: false,
      };
    });
  }

  async thisFlags() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.applyFilters();
  }

  ngOnInit(): void {

    if (this._flagService.getFlagGeo()) {
      this.changeFlagFilter();
      this._flagService.setFlagGeo(false);
      const string = 'direGeogrAmbiente';
      this.checkboxesState[string] = true;
      this.thisFlags();
    }
    if (this._flagService.getFlagEstadisticas()) {
      this.changeFlagFilter()
      this._flagService.setFlagEstadisticas(false)
      const string = 'direEstaSocio';
      this.checkboxesState[string] = true;
      this.thisFlags();
    }
    if (this._flagService.getFlagEconomicas()) {
      this.changeFlagFilter()
      this._flagService.setFlagEconomicas(false)
      const string = 'direEstaEconomicas';
      this.checkboxesState[string] = true;
      this.thisFlags();
    }
    if (this._flagService.getFlagGobierno()) {
      this.changeFlagFilter();
      this._flagService.setFlagGobierno(false)
      const string = 'direEstaGobSegPubJus';
      this.checkboxesState[string] = true;
      this.thisFlags();
    }
    if (this._flagService.getFlagIntegracion()) {
      this.changeFlagFilter()
      this._flagService.setFlagIntegracion(false)
      const string = 'direInteAnaInv';
      this.checkboxesState[string] = true;
      this.thisFlags();
    }

    //! botones MDEA filtro by componente

    if (this._flagService.getFlagComp1()) {
      this.changeFlagFilter();
      this._flagService.setFlagComp1(false);
      const string = 'componente_1';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    if (this._flagService.getFlagComp2()) {
      this.changeFlagFilter()
      this._flagService.setFlagComp2(false)
      const string = 'componente_2';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    if (this._flagService.getFlagComp3()) {
      this.changeFlagFilter()
      this._flagService.setFlagComp3(false)
      const string = 'componente_3';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    if (this._flagService.getFlagComp4()) {
      this.changeFlagFilter();
      this._flagService.setFlagComp4(false)
      const string = 'componente_4';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    if (this._flagService.getFlagComp5()) {
      this.changeFlagFilter()
      this._flagService.setFlagComp5(false)
      const string = 'componente_5';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    if (this._flagService.getFlagComp6()) {
      this.changeFlagFilter()
      this._flagService.setFlagComp6(false)
      const string = 'componente_6';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }

    //! botones MDEA filtro by Subcomponentes

    if (this._flagService.getFlagSubComp1()) {
      this.changeFlagFilter();
      this._flagService.setFlagSubComp1(false);
      const string = 'subcomponente_1';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    if (this._flagService.getFlagSubComp2()) {
      this.changeFlagFilter()
      this._flagService.setFlagSubComp2(false)
      const string = 'subcomponente_2';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    if (this._flagService.getFlagSubComp3()) {
      this.changeFlagFilter()
      this._flagService.setFlagSubComp3(false)
      const string = 'subcomponente_3';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    if (this._flagService.getFlagSubComp4()) {
      this.changeFlagFilter();
      this._flagService.setFlagSubComp4(false)
      const string = 'subcomponente_4';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    if (this._flagService.getFlagSubComp5()) {
      this.changeFlagFilter()
      this._flagService.setFlagSubComp5(false)
      const string = 'subcomponente_5';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    if (this._flagService.getFlagSubComp6()) {
      this.changeFlagFilter()
      this._flagService.setFlagSubComp6(false)
      const string = 'subcomponente_6';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    if (this._flagService.getFlagSubComp7()) {
      this.changeFlagFilter();
      this._flagService.setFlagSubComp7(false);
      const string = 'subcomponente_7';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    
    if (this._flagService.getFlagSubComp8()) {
      this.changeFlagFilter();
      this._flagService.setFlagSubComp8(false);
      const string = 'subcomponente_8';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    
    if (this._flagService.getFlagSubComp9()) {
      this.changeFlagFilter();
      this._flagService.setFlagSubComp9(false);
      const string = 'subcomponente_9';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    
    if (this._flagService.getFlagSubComp10()) {
      this.changeFlagFilter();
      this._flagService.setFlagSubComp10(false);
      const string = 'subcomponente_10';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    
    if (this._flagService.getFlagSubComp11()) {
      this.changeFlagFilter();
      this._flagService.setFlagSubComp11(false);
      const string = 'subcomponente_11';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    
    if (this._flagService.getFlagSubComp12()) {
      this.changeFlagFilter();
      this._flagService.setFlagSubComp12(false);
      const string = 'subcomponente_12';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    
    if (this._flagService.getFlagSubComp13()) {
      this.changeFlagFilter();
      this._flagService.setFlagSubComp13(false);
      const string = 'subcomponente_13';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    
    if (this._flagService.getFlagSubComp14()) {
      this.changeFlagFilter();
      this._flagService.setFlagSubComp14(false);
      const string = 'subcomponente_14';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    
    if (this._flagService.getFlagSubComp15()) {
      this.changeFlagFilter();
      this._flagService.setFlagSubComp15(false);
      const string = 'subcomponente_15';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    
    if (this._flagService.getFlagSubComp16()) {
      this.changeFlagFilter();
      this._flagService.setFlagSubComp16(false);
      const string = 'subcomponente_16';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    
    if (this._flagService.getFlagSubComp17()) {
      this.changeFlagFilter();
      this._flagService.setFlagSubComp17(false);
      const string = 'subcomponente_17';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    
    if (this._flagService.getFlagSubComp18()) {
      this.changeFlagFilter();
      this._flagService.setFlagSubComp18(false);
      const string = 'subcomponente_18';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    
    if (this._flagService.getFlagSubComp19()) {
      this.changeFlagFilter();
      this._flagService.setFlagSubComp19(false);
      const string = 'subcomponente_19';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    
    if (this._flagService.getFlagSubComp20()) {
      this.changeFlagFilter();
      this._flagService.setFlagSubComp20(false);
      const string = 'subcomponente_20';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    
    if (this._flagService.getFlagSubComp21()) {
      this.changeFlagFilter();
      this._flagService.setFlagSubComp21(false);
      const string = 'subcomponente_21';
      this.selectComponentekey = string;
      this.filterStates[string] = true;
      this.thisFlags();
    }
    

    //! Funcion que manda a llamar el servicio y los datos de este para que se pueda combinar con la transformaciión de datos a la estructura de treenode
    this._direServices.componentes().subscribe((componentes) => {
      this._direServices.subcomponentes().subscribe((subcomponentes) => {
        this._direServices.topicos().subscribe((topicos) => {
          this.treeDataMdea = this.transformDataToTreeNodeMdea(
            componentes,
            subcomponentes,
            topicos
          );
        });
      });
    });

    this._direServices.mdea().subscribe((data) => (this.mdeas = data));

    //!ODS para Tree Node
    this._direServices.objetivos().subscribe((objetivoOds) => {
      this._direServices.metas().subscribe((metasODS) => {
        this.treeDataOds = this.transformDataToTreeNodeOds(
          objetivoOds,
          metasODS
        );
      });
    });

    this._direServices.ods().subscribe((data) => {
      this.odsSecuencia = data;
    });

    //! TODOS LOS PRODUCTOS
    this._direServices.productos().subscribe((data) => {
      this.products = data;

      this.displayedProductCountAll = this.products.length;
      this.extractAndSortYears();
      this.extractAndSortYearsHasta();
      this.pU_extractAndSortYears();
      this.pU_extractAndSortYearsHasta();
      this.loading = false;
    });

    //! ESCALAS
    this._direServices.escalas().subscribe((escala) => (this.escalas = escala));

    //! PRODUCTOS DE INFORMACIÓN
    this._direServices.programasInformaName().subscribe((pInfo) => {
      this.proInfo = pInfo;
    });

    //! DIRECCIONES
    this._direServices
      .direccionesGeneralesPI()
      .subscribe((dgs) => (this.dgs = dgs));

    //!direcciones en AEG
    this._direServices
      .dirGenProAEG()
      .subscribe((dga_pprod) => (this.dga_Pprod = dga_pprod));

    //!AEG nombre del AEG
    this._direServices
      .actiEstaGeoName()
      .subscribe((aeg_2) => (this.aeg_2 = aeg_2));

    //!DIRECCIÓN GENERAL ADJUNTA RESPONSABLE
    this._direServices
      .direAdjResAEG()
      .subscribe((aeg_prod) => (this.aeg_Prod = aeg_prod));

    //! TODOS LOS COMPONENTES DEL MDEA
    this._direServices
      .componentes()
      .subscribe((componentes) => (this.componentesMDEA = componentes));

    //! todos los sub componentes del MDEA
    this._direServices
      .subcomponentes()
      .subscribe((subcomponente) => (this.subComponentesMDEA = subcomponente));

    //! todos los tópicos
    this._direServices
      .topicos()
      .subscribe((topicomdea) => (this.topicoMDEA = topicomdea));

    //! todos los OBJETIVOS del ods
    this._direServices
      .objetivos()
      .subscribe((objetivos) => (this.objetivODS = objetivos));

    //! todas las metas de los ODS
    this._direServices.metas().subscribe((metas) => (this.metasODS = metas));

    //? COMPONENTES
    this._direServices.componentes().subscribe((data) => {
      this.componentes = data;
    });

    console.log('se llamo el ngOnInit');
  }
  //! LLENAMOS SELECT de fechas hasta referencia
  extractAndSortYears(): void {
    const allYearSet = new Set<number>();
    this.products.forEach((product) => {
      const year = product.a_referencia;
      if (typeof year === 'number' && !isNaN(year)) {
        allYearSet.add(year);
      }
    });
    this.allYears = Array.from(allYearSet);
    this.allYears.sort((a, b) => a - b);
    this.uniqueYears = [...this.allYears];
  }
  //! LLENAMOS SELECT de fechas desde referencia
  extractAndSortYearsHasta(): void {
    const allYearSet = new Set<number>();
    this.products.forEach((product) => {
      const year = product.a_referencia2;
      if (typeof year === 'number' && !isNaN(year)) {
        allYearSet.add(year);
      }
    });
    this.allYearsHasta = Array.from(allYearSet);
    this.allYearsHasta.sort((a, b) => a - b);
    this.uniqueYearsHasta = [...this.allYearsHasta];
  }

  //! LLENAMOS SELECT de fechas hasta publicación
  pU_extractAndSortYears(): void {
    const allYearSet = new Set<number>();
    this.products.forEach((product) => {
      const year = product.a_publicacion;
      if (typeof year === 'number' && !isNaN(year)) {
        allYearSet.add(year);
      }
    });
    this.pU_allYears = Array.from(allYearSet);
    this.pU_allYears.sort((a, b) => a - b);
    this.pU_uniqueYears = [...this.pU_allYears];
  }
  //! LLENAMOS SELECT de fechas desde publicación
  pU_extractAndSortYearsHasta(): void {
    const allYearSet = new Set<number>();
    this.products.forEach((product) => {
      const year = product.a_publicacion2;
      if (typeof year === 'number' && !isNaN(year)) {
        allYearSet.add(year);
      }
    });
    this.pU_allYearsHasta = Array.from(allYearSet);
    this.pU_allYearsHasta.sort((a, b) => a - b);
    this.pU_uniqueYearsHasta = [...this.pU_allYearsHasta];
  }

  //!bandera para filtros para que mostrar
  changeFlagFilter() {
    this.flagHidden = false;
    this.flagFilter = true;
    this.flagOther = false;
  }
  //!bandera para filtros para que oculte
  hiddenFilters() {
    this.flagHidden = true;
    this.flagFilter = false;
    this.flagOther = true;
  }

  //* ABRE EL MODAL CON INFO
  openModal(elemento: any) {
    this.elementoSeleccionado = elemento;

    //! VARIABLES
    this._direServices
      .variableById(this.elementoSeleccionado.interview__id)
      .subscribe((data) => {
        this.secuenciaVAR = data;
      });

    //! Programas de Información
    this._direServices
      .prograInfo(this.elementoSeleccionado.interview__id)
      .subscribe((data) => {
        this.pi = data;
      });

    //! Actividad Estadística o Geográfica
    this._direServices
      .actiEstaGeoById(this.elementoSeleccionado.interview__id)
      .subscribe((data) => {
        this.aegSecuencia = data;
      });

    //!secuencia MDEA by id del producto
    this._direServices
      .mdeaById(this.elementoSeleccionado.interview__id)
      .subscribe((data) => {
        this.mdeas = data;
      });

    //!secuencia de los ODS
    this._direServices
      .odsById(this.elementoSeleccionado.interview__id)
      .subscribe((data) => {
        this.ODSes = data;
      });

    //!secuencia de PS
    this._direServices
      .programaSectorialById(this.elementoSeleccionado.interview__id)
      .subscribe((data) => {
        this.PSes = data;
      });

    //! primer parámetro de texto del PS
    this._direServices.ps2023().subscribe((ps2023) => (this.ps2023 = ps2023));

    //! segundo parámetro de texto del ps
    this._direServices
      .indicadoresPS2023()
      .subscribe((indiPS2023) => (this.indicadoresPS2023 = indiPS2023));
  }

  //! ESCALAS Transformando IDs a texto
  getEscalasText(indicador_ps: number): string {
    let escalasText = '';
    for (let escalas of this.escalas) {
      if (escalas.id === indicador_ps) {
        escalasText = escalas.text;
        break;
      }
    }
    return escalasText;
  }
  //! DIRECCIONES Transformando ID a texto
  getDireccionGeneralText(dg_pi: number): string {
    let direccionGeneralText = '';
    for (let direccion_general of this.dgs) {
      if (direccion_general.id === dg_pi) {
        direccionGeneralText = direccion_general.text;
        break;
      }
    }
    return direccionGeneralText;
  }
  //! PROGRAMAS DE INFORMACIÓN TRANSFORMANDO ID A TEXTO
  getProgInfoText(nom_pi: number): string {
    let progInfoText = '';
    for (let progInfo of this.proInfo) {
      if (progInfo.id === nom_pi) {
        progInfoText = progInfo.text;
        break;
      }
    }
    return progInfoText;
  }
  //! Dirección general en Actividad estadística o geográfica
  getDga_PprodText(dga_pi: number): string {
    let dga_PprodText = '';
    for (let dga_Pprod of this.dga_Pprod) {
      if (dga_Pprod.id === dga_pi) {
        dga_PprodText = dga_Pprod.text;
        break;
      }
    }
    return dga_PprodText;
  }
  //!TRANSFORMA EL IDS de LA AEG para hacerla texto
  getAEG_2Text(nom_aeg: number): string {
    let aeg_2Text = '';
    for (let aeg_2 of this.aeg_2) {
      if (aeg_2.id === nom_aeg) {
        aeg_2Text = aeg_2.text;
        break;
      }
    }
    return aeg_2Text;
  }
  //!TRANSFORMA EL IDS DEL DIRECCIÓN ADJUNTA RESPONSABLE PARA HACERLA TEXTO
  getAEG_ProdText(dga_eag: number): string {
    let aeg_ProdText = '';
    for (let aeg_Prod of this.aeg_Prod) {
      if (aeg_Prod.id === dga_eag) {
        aeg_ProdText = aeg_Prod.text;
        break;
      }
    }
    return aeg_ProdText;
  }
  //! TRANSFORMA EL IDs del componente para hacerlo texto
  getComponenteText(comp_mdea: number): string {
    let componentesMDEAText = '';
    for (let componentesMDEA of this.componentesMDEA) {
      if (componentesMDEA.id === comp_mdea) {
        componentesMDEAText = componentesMDEA.text;
        break;
      }
    }
    return componentesMDEAText;
  }
  //! transforma los ids de los sub componentes para hacerlos texto
  getSubcomponenteText(subcomp_mdea: number): string {
    let subComponentesMDEAText = '';
    for (let subComponentesMDEA of this.subComponentesMDEA) {
      if (subComponentesMDEA.id === subcomp_mdea) {
        subComponentesMDEAText = subComponentesMDEA.text;
        break;
      }
    }
    return subComponentesMDEAText;
  }
  //! Transforma los ids de los tópicos para hacerlos a texto
  getTopicoText(topico_mdea: number): string {
    let topicoMDEAText = '';
    for (let topicoMDEA of this.topicoMDEA) {
      if (topicoMDEA.id === topico_mdea) {
        topicoMDEAText = topicoMDEA.text;
        break;
      }
    }
    return topicoMDEAText;
  }
  //! Transforma los id de los objetivos a texto
  getObjetivODSText(obj_ods: number): string {
    let objetivODSText = '';
    for (let objetivODS of this.objetivODS) {
      if (objetivODS.id === obj_ods) {
        objetivODSText = objetivODS.text;
        break;
      }
    }
    return objetivODSText;
  }
  //! transforma los id de las metas a texto
  getMetaODSText(meta_ods: number): string {
    let metasODSText = '';
    for (let metasODS of this.metasODS) {
      if (metasODS.id === meta_ods) {
        metasODSText = metasODS.text;
        break;
      }
    }
    return metasODSText;
  }
  //! transforma los id de los ps a texto
  getps2023Text(prog_ps: number): string {
    let ps2023Text = '';
    for (let ps2023 of this.ps2023) {
      if (ps2023.id === prog_ps) {
        ps2023Text = ps2023.text;
        break;
      }
    }
    return ps2023Text;
  }
  //! transforma los ids del segunda parámetro de los ps a texto
  getIndicadoresPS2023Text(indicador_ps: number): string {
    let indicadoresPS2023Text = '';
    for (let indicadoresPS2023 of this.indicadoresPS2023) {
      if (indicadoresPS2023.id === indicador_ps) {
        indicadoresPS2023Text = indicadoresPS2023.text;
        break;
      }
    }
    return indicadoresPS2023Text;
  }

  //! función que detecta los cambios en los checks box DIRECCIONES
  handleCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement;

    const checkboxId = target.id;
    this.checkboxesState[checkboxId] = target.checked;

    this.applyFilters();
  }
  //! check flag de radios TIPO
  handleRadioChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.selectedRadioValue = target.value;
    this.applyFilters();
  }
  //! función que detecta los cambios en los checks box COBERTURA
  handleCheckboxCobe(event: Event): void {
    const target = event.target as HTMLInputElement;
    const checkboxId = target.id;
    this.checkboxesCobe[checkboxId] = target.checked;
    this.applyFilters();
  }
  //! función que detecta los cambios en los checks box TYPO SOPORTE
  handleCheckboxType(event: Event): void {
    const target = event.target as HTMLInputElement;
    const checkboxId = target.id;
    this.checkboxesType[checkboxId] = target.checked;
    this.applyFilters();
  }
  //! función que detecta los cambios en los checks box FECHAS desde referencia
  onChangeDesdeRefe(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedYear = parseInt(target.value, 10); // Convierte el valor a un número entero
    this.selectedYear = selectedYear; // Asigna el valor a la propiedad selectedYear
    this.applyFilters();
  }
  onChangeHastaRefe(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedYearHasta = parseInt(target.value, 10);
    this.selectedYearHasta = selectedYearHasta;
    this.applyFilters();
  }

  //! función que detecta los cambios en los checks box FECHAS desde referencia
  onChangeDesdePubli(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedYear = parseInt(target.value, 10);
    this.pU_selectedYear = selectedYear;
    this.applyFilters();
  }
  onChangeHastaPubli(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedYearHasta = parseInt(target.value, 10);
    this.pU_selectedYearHasta = selectedYearHasta;
    this.applyFilters();
  }

  selectComponente(event: { originalEvent: Event; node: TreeNode }): void {
    this.selectComponentekey = event.node.key;
    this.filterStates[this.selectComponentekey] = true;
    this.applyFilters();
  }

  unSelectComponente(event: { originalEvent: Event; node: TreeNode }): void {
    this.unSelectComponentekey = event.node.key;
    this.filterStates[this.unSelectComponentekey] = false;

    this.applyFilters();
  }

  selectODS(event: { originalEvent: Event; node: TreeNode }): void {
    this.selectODSkey = event.node.key;
    this.filterStatesODS[this.selectODSkey] = true;

    this.applyFilters();
  }

  unSelectODS(event: { originalEvent: Event; node: TreeNode }): void {
    this.unSelectODSkey = event.node.key;
    this.filterStatesODS[this.unSelectODSkey] = false;

    this.applyFilters();
  }

  //TODO FILTROS

  applyFilters(): void {
    this.filteredProducts = [];
    let combinedResults = [...this.products];

    this.showFilteredProducts = false;
    this.deleteFilterFlag = false;

    let shouldContinue = true;
    let shouldContinue2 = true;

    // console.log('\x1b[35m%s\x1b[0m', this.banderaSearchByQuery);

    if (this.banderaSearchByQuery) {
      combinedResults = this.filteredProductsBySearchByQuery;
    }

    console.log('\x1b[36m%s\x1b[0m', 'combinacion', combinedResults);
    if (
      this.checkboxesState['direGeogrAmbiente'] ||
      this.checkboxesState['direEstaSocio'] ||
      this.checkboxesState['direEstaEconomicas'] ||
      this.checkboxesState['direEstaGobSegPubJus'] ||
      this.checkboxesState['direInteAnaInv']
    ) {
      console.log('\x1b[29m%s\x1b[0m', 'filtro direcciones generales');

      combinedResults = combinedResults.filter((product) => {
        return (
          (this.checkboxesState['direGeogrAmbiente'] &&
            product.dg_prod === 1) ||
          (this.checkboxesState['direEstaSocio'] && product.dg_prod === 2) ||
          (this.checkboxesState['direEstaEconomicas'] &&
            product.dg_prod === 3) ||
          (this.checkboxesState['direEstaGobSegPubJus'] &&
            product.dg_prod === 4) ||
          (this.checkboxesState['direInteAnaInv'] && product.dg_prod === 5)
        );
      });
    }

    const radioOption = this.selectedRadioValue;
    if (radioOption) {
      console.log('\x1b[30m%s\x1b[0m', 'filtro de radio Button');
      combinedResults = combinedResults.filter((product) => {
        if (radioOption === 'option1') {
          return product.tipo_prod__1 === 1 && product.tipo_prod__2 === 0;
        } else if (radioOption === 'option2') {
          return product.tipo_prod__1 === 0 && product.tipo_prod__2 === 1;
        } else if (radioOption === 'option3') {
          return product.tipo_prod__1 === 1 && product.tipo_prod__2 === 1;
        }
        return true;
      });
    }

    if (
      this.checkboxesCobe['cobeNacional'] ||
      this.checkboxesCobe['cobeEstatal'] ||
      this.checkboxesCobe['cobeMunicipal'] ||
      this.checkboxesCobe['cobRegional']
    ) {
      console.log('\x1b[31m%s\x1b[0m', 'filtro de COBERTURA');

      combinedResults = combinedResults.filter((product) => {
        const coberturaGeo1 =
          this.checkboxesCobe['cobeNacional'] && product.cobertura_geo__1 === 1;
        const coberturaGeo2 =
          this.checkboxesCobe['cobeEstatal'] && product.cobertura_geo__2 === 1;
        const coberturaGeo3 =
          this.checkboxesCobe['cobeMunicipal'] &&
          product.cobertura_geo__3 === 1;
        const coberturaGeo4 =
          this.checkboxesCobe['cobRegional'] && product.cobertura_geo__4 === 1;

        return coberturaGeo1 || coberturaGeo2 || coberturaGeo3 || coberturaGeo4;
      });
    }

    if (
      this.checkboxesType['typeDatoGeo'] ||
      this.checkboxesType['typeTabulado'] ||
      this.checkboxesType['typePublicacion']
    ) {
      console.log('\x1b[32m%s\x1b[0m', 'filtro de TIPO DE SOPORTE');

      combinedResults = combinedResults.filter((product) => {
        const typeDato =
          this.checkboxesType['typeDatoGeo'] && product.tipo_soporte__1 === 1;
        const typeTabu =
          this.checkboxesType['typeTabulado'] && product.tipo_soporte__2 === 1;
        const typePubl =
          this.checkboxesType['typePublicacion'] &&
          product.tipo_soporte__3 === 1;

        return typeDato || typeTabu || typePubl;
      });
    }

    if (this.selectedYear == 0) {
      this.selectedYear = null;

      return;
    } else if (this.selectedYear) {
      combinedResults = combinedResults.filter((product) => {
        const productYear = parseInt(product.a_referencia as string, 10);
        return !isNaN(productYear) && productYear >= this.selectedYear!;
      });
    }

    if (this.selectedYearHasta == 0) {
      this.selectedYearHasta = null;

      return;
    } else if (this.selectedYearHasta) {
      combinedResults = combinedResults.filter((product) => {
        const productYear = parseInt(
          product.a_referencia2 as unknown as string,
          10
        );
        return !isNaN(productYear) && productYear <= this.selectedYearHasta!;
      });
    }
    //? desde aquí se filtra por a_publicación
    if (this.pU_selectedYear == 0) {
      this.pU_selectedYear = null;
      return;
    } else if (this.pU_selectedYear) {
      combinedResults = combinedResults.filter((product) => {
        const productYear = parseInt(product.a_publicacion as string, 10); // Convierte a número
        return !isNaN(productYear) && productYear >= this.pU_selectedYear!;
      });
    }

    if (this.pU_selectedYearHasta == 0) {
      this.pU_selectedYearHasta = null;
      return;
    } else if (this.pU_selectedYearHasta) {
      combinedResults = combinedResults.filter((product) => {
        const productYear = parseInt(
          product.a_publicacion2 as unknown as string,
          10
        );
        return !isNaN(productYear) && productYear <= this.pU_selectedYearHasta!;
      });
    }
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    Object.entries(this.filterStates).forEach(([key, value]) => {

      console.log(this.treeDataMdea);
      console.log(this.selectedNodesMdea);

      if (value) {
        if (key === this.selectComponentekey) {
          console.log(this.selectComponentekey);
          
          this._direServices.mdea().subscribe((data) => (this.mdeas = data));
          let thismdeas = [...this.mdeas];

          console.log('\x1b[33m%s\x1b[0m', 'MDEAS');

          const keyParts = this.selectComponentekey.split('_');
          const tipo = keyParts[0];
          const id = keyParts[1];
          let mdeasResults: Mdea[] = [];
          if (tipo === 'componente') {
            mdeasResults = thismdeas.filter((mdeas) => mdeas.comp_mdea === +id);
          } else if (tipo === 'subcomponente') {
            mdeasResults = thismdeas.filter(
              (mdeas) => mdeas.subcomp_mdea === +id
            );
          } else if (tipo === 'topico') {
            mdeasResults = thismdeas.filter(
              (mdeas) => mdeas.topico_mdea === +id
            );
          }

          this.combinedResultsMdea =
            this.combinedResultsMdea.concat(mdeasResults);

          combinedResults = combinedResults.filter((data) =>
            this.combinedResultsMdea.some(
              (mdeas) => mdeas.interview__id === data.interview__id
            )
          );
        }
      } else {
        if (key === this.unSelectComponentekey) {
          const unselectedKeyParts = this.unSelectComponentekey.split('_');
          const unselectedTipo = unselectedKeyParts[0];
          const unselectedId = unselectedKeyParts[1];

          if (unselectedTipo === 'componente') {
            this.combinedResultsMdea = this.combinedResultsMdea.filter(
              (mdeas) => mdeas.comp_mdea !== +unselectedId
            );
          } else if (unselectedTipo === 'subcomponente') {
            this.combinedResultsMdea = this.combinedResultsMdea.filter(
              (mdeas) => mdeas.subcomp_mdea !== +unselectedId
            );
          } else if (unselectedTipo === 'topico') {
            this.combinedResultsMdea = this.combinedResultsMdea.filter(
              (mdeas) => mdeas.topico_mdea !== +unselectedId
            );
          }
          combinedResults = combinedResults.filter((data) =>
            this.combinedResultsMdea.some(
              (mdeas) => mdeas.interview__id === data.interview__id
            )
          );

          //! Eliminar las entradas con valor false del arreglo
          this.filterStates = Object.fromEntries(
            Object.entries(this.filterStates).filter(([_, value]) => value)
          );

          if (this.combinedResultsMdea.length == 0) {
            this.handleComponenteFilter();

            shouldContinue = false;
            return;
          }
        }
        return;
      }
    });

    if (!shouldContinue) return;

    Object.entries(this.filterStatesODS).forEach(([key, value]) => {
      if (value) {
        if (key === this.selectODSkey) {
          this._direServices
            .ods()
            .subscribe((data) => (this.odsSecuencia = data));
          let thisodsSecuencia = [...this.odsSecuencia];

          console.log('\x1b[34m%s\x1b[0m', 'filtro de ODS');

          const keyParts = this.selectODSkey.split('_');
          const tipo = keyParts[0];
          const id = keyParts[1];
          let odsResults: SecuenciaOds[] = [];
          if (tipo === 'objetivos') {
            odsResults = thisodsSecuencia.filter((ods) => ods.obj_ods === +id);
          } else if (tipo === 'metas') {
            odsResults = thisodsSecuencia.filter((ods) => ods.meta_ods === +id);
          }
          this.combinedResultsODS = this.combinedResultsODS.concat(odsResults);

          combinedResults = combinedResults.filter((data) =>
            this.combinedResultsODS.some(
              (ods) => ods.interview__id === data.interview__id
            )
          );
        }
      } else {
        if (key === this.unSelectODSkey) {
          const unselectedKeyParts = this.unSelectODSkey.split('_');
          const unselectedTipo = unselectedKeyParts[0];
          const unselectedId = parseInt(unselectedKeyParts[1], 10);

          if (unselectedTipo === 'objetivos') {
            this.combinedResultsODS = this.combinedResultsODS.filter(
              (mdeas) => mdeas.obj_ods !== +unselectedId
            );
          } else if (unselectedTipo === 'metas') {
            this.combinedResultsODS = this.combinedResultsODS.filter(
              (mdeas) => mdeas.meta_ods !== +unselectedId
            );
          }

          combinedResults = combinedResults.filter((data) =>
            this.combinedResultsODS.some(
              (mdeas) => mdeas.interview__id === data.interview__id
            )
          );

          // Eliminar las entradas con valor false del arreglo
          this.filterStatesODS = Object.fromEntries(
            Object.entries(this.filterStatesODS).filter(([_, value]) => value)
          );

          if (this.combinedResultsODS.length == 0) {
            this.handleODSFilter();

            shouldContinue2 = false;
            return;
          }
        }
      }
    });

    if (!shouldContinue2) return;

    this.filteredProducts = combinedResults;
    this.displayedProductCount = this.filteredProducts.length;
    this.showFilteredProducts = true;
    console.log(this.filteredProducts);
  }

  handleComponenteFilter(): void {
    this.filteredProducts = [...this.products];
    this.displayedProductCount = this.filteredProducts.length;
    this.showFilteredProducts = true;
    this.applyFilters();
  }

  handleODSFilter(): void {
    this.filteredProducts = [...this.products];
    this.displayedProductCount = this.filteredProducts.length;
    this.showFilteredProducts = true;
    this.applyFilters();
  }

  deleteFilter() {
    this.selectedNodesMdea = [];
    this.filterStates = {};
    this.treeDataMdea = [];

    this.selectedNodesOds = [];
    this.filterStatesODS = {};
    this.treeDataOds = [];
    this.cdr.detectChanges();

    this.deleteFilterFlag = true;
    this.terminoBusqueda = '';

    this.checkboxesState = {
      direGeogrAmbiente: false,
      direEstaSocio: false,
      direEstaEconomicas: false,
      direEstaGobSegPubJus: false,
      direInteAnaInv: false,
    };

    this.checkboxesCobe = {
      cobeNacional: false,
      cobeEstatal: false,
      cobeMunicipal: false,
      cobRegional: false,
    };

    this.checkboxesType = {
      typeDatoGeo: false,
      typeTabulado: false,
      typePublicacion: false,
    };

    this.selectedRadioValue = '';
    this.showFilteredProducts = false;

    //! FECHAS SELECT referencia
    this.allYears = [];
    this.uniqueYears = [];
    this.allYearsHasta = [];
    this.uniqueYearsHasta = [];
    //* Filtro fechas
    this.selectedYear = null;
    this.selectedYearHasta = null;
    //! FECHAS SELECT publicación
    this.pU_allYears = [];
    this.pU_uniqueYears = [];
    this.pU_allYearsHasta = [];
    this.pU_uniqueYearsHasta = [];
    //* Filtro fechas publicación
    this.pU_selectedYear = null;
    this.pU_selectedYearHasta = null;
    this.banderaSearchByQuery = false;

    this.ngOnInit();
  }

  //! función para búsqueda difusa
  funcionParaBuscarByQuery() {
    const inputValue =
      this.terminoBusqueda !== null && this.terminoBusqueda !== undefined
        ? this.terminoBusqueda
        : '';
    console.log(inputValue);
    console.log('no deberia de haber entrado aqui');

    if (inputValue) {
      this.banderaSearchByQuery = true;

      this._direServices.suggestionByQuery(inputValue).subscribe((result) => {
        this.filteredProductsBySearchByQuery = result;
        this.applyFilters();
      });
    }
  }

  borrarTermino() {
    this.banderaSearchByQuery = false;
    console.log('borro');
    this.terminoBusqueda = '';
    this.applyFilters();
    // this._direServices
    //   .suggestionByQuery(this.terminoBusqueda)
    //   .subscribe((result) => {
    //     this.filteredProducts = result;

    //     this.displayedProductCount = this.filteredProducts.length;
    //     this.showFilteredProducts = true;
    //   });
  }

  hiddenFirtsFilters() {
    this.flagFirtsFilters = true;
  }
  showFirtsFilters() {
    this.flagFirtsFilters = false;
  }
  hiddenSegundaFilters() {
    this.flagSegundaFilters = true;
  }
  showSegundaFilters() {
    this.flagSegundaFilters = false;
  }
  hiddenTerceroFilters() {
    this.flagTerceroFilters = true;
  }
  showTerceroFilters() {
    this.flagTerceroFilters = false;
  }
}

// if (this.checkSelect) {
//     const keyParts = this.selectComponentekey.split('_');
//     const tipo = keyParts[0];
//     const id = keyParts[1];
//     let componentResults: Mdea[] = [];

//     if (tipo === 'componente') {
//       componentResults = this.mdeas.filter((mdeas) => mdeas.comp_mdea === +id);
//     } else if (tipo === 'subcomponente') {
//       componentResults = this.mdeas.filter((mdeas) => mdeas.subcomp_mdea === +id);
//     } else if (tipo === 'topico') {
//       componentResults = this.mdeas.filter((mdeas) => mdeas.topico_mdea === +id);
//     }
//
//     this.combinedResultsMdea = this.combinedResultsMdea.concat(componentResults);
//     combinedResults = combinedResults.filter(data =>
//       this.combinedResultsMdea.some(mdeas => mdeas.interview__id === data.interview__id));
//
//     this.checkSelect = false;
//
//   }


// if (this.check_UnSelect) {
//         const unselectedKeyParts = this.unSelectComponentekey.split('_');
//         const unselectedTipo = unselectedKeyParts[0];
//         const unselectedId = unselectedKeyParts[1];
//         if (unselectedTipo === 'componente') {
//             this.combinedResultsMdea = this.combinedResultsMdea.filter((mdeas) => mdeas.comp_mdea !== +unselectedId);
//         } else if (unselectedTipo === 'subcomponente') {
//             this.combinedResultsMdea = this.combinedResultsMdea.filter((mdeas) => mdeas.subcomp_mdea !== +unselectedId);
//         } else if (unselectedTipo === 'topico') {
//             this.combinedResultsMdea = this.combinedResultsMdea.filter((mdeas) => mdeas.topico_mdea !== +unselectedId);
//         }
//         combinedResults = combinedResults.filter((data) =>
//         this.combinedResultsMdea.some((mdeas) => mdeas.interview__id === data.interview__id));
//         this.check_UnSelect = false;

//         if (this.combinedResultsMdea.length == 0 &&
//           !(this.checkboxesState['direGeogrAmbiente'] || this.checkboxesState['direEstaSocio'] ||
//           this.checkboxesState['direEstaEconomicas'] || this.checkboxesState['direEstaGobSegPubJus']
//           || this.checkboxesState['direInteAnaInv']) && !(this.checkboxesCobe['cobeNacional'] || this.checkboxesCobe['cobeEstatal'] || this.checkboxesCobe['cobeMunicipal'] ||this.checkboxesCobe['cobRegional'])) {
//
//           return;

//         }
//     }



