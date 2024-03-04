import { Componente, Mdea, Subcomponente, Topico } from '../../interfaces/mdea.interface';
import { DGService } from '../../services/dg.service';
import { FlagService } from '../../services/flagService.service';
import { Router } from '@angular/router';
import {  Component, OnInit } from '@angular/core';
import {  Products } from '../../interfaces/product.interface';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsTreeMap from 'highcharts/modules/treemap';
import HighchartsTreeGraph from 'highcharts/modules/treegraph';
import HighchartsTreeGrid from 'highcharts/modules/treegrid';

interface CheckboxesState {
  [key: string]: boolean;
}
@Component({
  selector: 'app-mdea-page',
  templateUrl: './mdea-page.component.html',
  styleUrls: ['./mdea-page.component.css']
})

export class MdeaPageComponent implements OnInit{

  isMobile: boolean = window.innerWidth <= 480; 
  loadingCharts: boolean = true;
  showCharts = true;

  public componentesArray: any [] = [];
  public subcomponentesArray: any [] = [];

  public products: Products[] = [];
  public componentesMDEA: Componente[]=[];
  public SubcomponentesPorComponente: Mdea[]=[];
  public subComponentesMDEA: Subcomponente[]=[];
  public topicoMDEA: Topico[]=[];
  public mdeas: Mdea[]=[];
  componente: Componente[]= [];
  subcomponentes: Subcomponente[] =[];
  topicos: Topico[] = [];
  chart: any

  ComponenteCountstop: any;
  SubcomponenteCountstop2: any;

  public primerComp: number = 0;
  public segundoCom: number = 0;
  public tercerComp: number = 0;
  public cuartoComp: number = 0;
  
  public isMDEASelected: boolean = true;

  CompMdeaimg: boolean = false;

  cardsData = [
    { title: '' },
  ];

  constructor(
    private router: Router,
    private _direServices: DGService,
    private _flagService: FlagService
  ){}

  checkboxesState: CheckboxesState = {
    filtroMdeaComp1: false,
    filtroMdeaComp2: false,
    filtroMdeaComp3: false,
    filtroMdeaComp4: false,
    filtroMdeaComp5: false,
    filtroMdeaComp6: false, 
  };

  //Variables para almacenar y dar coherencia a los numeros que se manejan en el HTML donde se cuentan los productos del INEGI por componentes
  longitudesPorSubCompId: { [key: number]: number } = {};

  longitudesPorCompId: { [key: number]: number } = {};
  
 // Arreglo de iconos para relacionarlos por componente Id y Subcomponente Id.
  
  iconosComp: { [key: number]: string } = {
    1: 'bi-tree',
    2: 'bi-minecart-loaded',
    3: 'bi-trash3',
    4: 'bi-cloud-lightning-rain',
    5: 'bi-houses',
    6: 'bi-people'
  };

  iconosSubComp: { [key: number]: string } = {
    1: 'bi-tree',
    2: 'bi-tree',
    3: 'bi-tree',
    4: 'bi-minecart-loaded',
    5: 'bi-minecart-loaded',
    6: 'bi-minecart-loaded',
    7: 'bi-minecart-loaded',
    8: 'bi-minecart-loaded',
    9: 'bi-minecart-loaded',
    10: 'bi-trash3',
    11: 'bi-trash3',
    12: 'bi-trash3',
    13: 'bi-trash3',
    14: 'bi-cloud-lightning-rain',
    15: 'bi-cloud-lightning-rain',
    16: 'bi-houses',
    17: 'bi-houses',
    18: 'bi-people',
    19: 'bi-people',
    20: 'bi-people',
    21: 'bi-people',
  };



  filterProductsByComponente(componente: any[]): any[] {
    return this.products.filter(data => componente.some(comp => comp.interview__id === data.interview__id));
  }

  filterProductsBySubComponente(subcomponente: any[]): any[] {
    return this.products.filter(data => subcomponente.some(subcomp => subcomp.interview__id === data.interview__id));
  }

  expanded1 = true; 
  toggleExpansionA() {
    this.expanded1 = !this.expanded1;
  }
 

    ngOnInit(): void {

      this.loadingCharts = false;

      this.loadChart();

      this._direServices.productos()
      .subscribe(data => this.products = data )
     
      this._direServices.componentes()
      .subscribe( componentes => this.componentesMDEA = componentes)
  
      this._direServices.subcomponentes()
      .subscribe( subcomponente => this.subComponentesMDEA = subcomponente)
      
      this._direServices.topicos()
      .subscribe( topicomdea => this.topicoMDEA = topicomdea)

      this._direServices.mdea()
      .subscribe(dato => {
        this.mdeas = dato;
    
        // Inicializa un arreglo para almacenar los componentes
        
        this.componentesArray = [];
        this.subcomponentesArray = [];
        // Arreglo para componentes
        for (let i = 1; i <= 6; i++) {
          const componente = this.mdeas.filter(data => data.comp_mdea === i);
          this.componentesArray[i] = this.filterProductsByComponente(componente);
        }
      
        for (let i = 1; i <= 6; i++) {
          this.longitudesPorCompId[i] = this.componentesArray[i].length || 0;
        }

        console.log(this.longitudesPorCompId)

       // Arreglo para subcomponentes
       for (let i = 1; i <= 21; i++) {
        const subcomponente = this.mdeas.filter(data => data.subcomp_mdea === i);
        this.subcomponentesArray[i] = this.filterProductsBySubComponente(subcomponente);
        }
      
        for (let i = 1; i <= 21; i++) {
          this.longitudesPorSubCompId[i] = this.subcomponentesArray[i].length || 0;
        }

        console.log(this.longitudesPorSubCompId)
        
      
   // Grafico de pastel para mostrar los datos por componente

    var colors = Highcharts.getOptions().colors
      const componentesData: { name: string; y: any; color: any; }[] = [];

      for (let i = 1; i <= 6; i++) {
        componentesData.push({
          name: `Componente ${i}`,
          y: this.componentesArray[i]?.length || 0,
          color: colors[i + 1] 
        });

      }
       var chart1 = Highcharts.chart('container-pie-componentes', {
          chart: {
              type: 'pie'
          },
          title: {
              text: 'Productos del INEGI que se apegan a determinados Componentes',
              align: 'center'
          },
          plotOptions: {
            series: {
              borderRadius: 5,
              }
          },
          tooltip: {
              valueSuffix: ' productos'
          },
          series: [{
              name: 'Componentes',
              data: componentesData,
              size: '100%',
              dataLabels: {
                  color: '#113250',
                  distance: 10,
                  format: '<b>{point.name}:</b><br><span style="text-allign: center;">{point.y} Productos</span>',
                  filter: {
                      property: 'y',
                      operator: '>',
                      value: 1
                  },
                  style: {
                      fontWeight: 'normal'
                  }
              }
          }],
        });

        var loadingLabelcomp = chart1.renderer.text('Cargando datos...', chart1.plotWidth / 2.2, chart1.plotHeight / 1.7).attr({
          zIndex: 10
      }).add();
      
      // Simular una llamada a la API que carga los datos
      setTimeout(() => {
        loadingLabelcomp.destroy(); // Ocultar la pantalla de carga
        chart1.series[0].setData(componentesData);
      }, 3000); // Simulando un tiempo de espera de 3 segundos
        
      //TODO Graficos para dispositivos moviles

    
      // Grafica para mostrar los Subcomponentes 

      var colors = Highcharts.getOptions().colors
      const subcomponentesData: {
        name: string; y: any; color: any; // Ajusta según tu lógica de asignación de colores
      }[] = [];

      for (let i = 1; i <= 21; i++) {
        subcomponentesData.push({
          name: `SubComponente ${i}`,
          y: this.subcomponentesArray[i]?.length || 0,
          color: colors[i + 1] // Ajusta según tu lógica de asignación de colores
        });

      }
       var chart2 = Highcharts.chart('container-pie-subcomponentes', {
          chart: {
              type: 'pie'
          },
          title: {
              text: 'Productos del INEGI que se apegan a determinados SubComponentes',
              align: 'center'
          },
          plotOptions: {
            series: {
              borderRadius: 5,
            }
          },   
          tooltip: {
              valueSuffix: ' productos',
          },
          series: [{
              name: 'SubComponente',
              data: subcomponentesData,
              size: '100%',
              dataLabels: {
                  color: '#113250',
                  distance: 10,
                  format: '<b>{point.name}:</b><br><span style="text-allign: center;">{point.y} Productos</span>',
                  filter: {
                      property: 'y',
                      operator: '>',
                      value: 1
                  },
                  style: {
                      fontWeight: 'normal'
                  }, 
                          
              }, 
              
          }],
        });

        var loadingLabelsubcomp = chart2.renderer.text('Cargando datos...', chart2.plotWidth / 2.2, chart2.plotHeight / 1.7).attr({
          zIndex: 10
      }).add();
      
      // Simular una llamada a la API que carga los datos
      setTimeout(() => {
          loadingLabelsubcomp.destroy(); // Ocultar la pantalla de carga
          chart2.series[1].setData(subcomponentesData);
      }, 3000); // Simulando un tiempo de espera de 3 segundos

      });

    var Highcharts = require('highcharts'); 

    HighchartsAccessibility(Highcharts);
    HighchartsExporting(Highcharts);
    HighchartsTreeMap(Highcharts);
    HighchartsTreeGraph(Highcharts);
    HighchartsTreeGrid(Highcharts);
    HighchartsTreeGraph(Highcharts);


    this._direServices.componentes().subscribe(componentes => {
      this.componentesMDEA = componentes;
      this._direServices.subcomponentes().subscribe(subcomponentes => {
        this.subComponentesMDEA = subcomponentes;
        this._direServices.topicos().subscribe(topicos => {
          this.topicoMDEA = topicos;

          const data: any = [];
          this.componentesMDEA.forEach(componente => {
            data.push({
              id: `componente-${componente.id}`,
              parent: '',
              name: componente.text,
            });

            const subcomponentes = this.subComponentesMDEA.filter(subcomponente => subcomponente.parentid === componente.id);
            subcomponentes.forEach(subcomponente => {
              data.push({
                id: `subcomponente-${subcomponente.id}`,
                parent: `componente-${componente.id}`,
                name: subcomponente.text,
              });

              const topicos = this.topicoMDEA.filter(topico => topico.parentid === subcomponente.id);
              topicos.forEach(topico => {
                data.push({
                  id: `topico-${topico.id}`,
                  parent: `subcomponente-${subcomponente.id}`,
                  name: topico.text,
                });
              });
            });
          });
  
          data.reverse();
          // Crear el gráfico una vez que los datos estén disponibles
          Highcharts.chart('treegraph-container', {
            title: {
              style: {
                color: '#deebf8',
              },
              text: 'Estructura MDEA',
            },
            subtitle: {
              style: {
                color: '#deebf8',
              },
              text: 'Componente, Subcomponente y Tópíco',
              
            },
            chart: {
              backgroundColor: '#113250',

            },
            exporting: {
              enabled: true, 
              buttons: {
                contextButton: {
                  symbol: 'square',
                  symbolStrokeWidth: .5,
                  symbolFill: '#5EC1AB',
                  symbolStroke: '#000000',
                  menuItems: [
                    "viewFullscreen",
                  ]
                }
              }
            },
            series: [    
              {
                type: 'treegraph',
                data: data,
                borderRadius: 10,
                crisp: true,
                clip: true,
                tooltip: {
                  pointFormat: '{point.name}',
                },
                link: {
                  color: '#bdd8f1',
                  lineWidth: 1,
                },
                marker: {
                  symbol: 'rect',
                  width: '30%',
                  height: '2%',
                  lineColor: '#07141f',
                  lineWidth: 1.5,
                  
                },
                dataLabels: {
                  shadow: true,
                  color: '#FFFFFF',
                 
                  style: {
                    cursor:   'text',
                    whiteSpace: 'normal',
                    textOverflow: 'ellipsis',
                    margin: 20,
                    fontSize: '11.5px',
                    textOutline: '1px contrast',
                  },
                },
                levels: [
                  {
                   level: 1,
                    levelIsConstant: false,
                    colorVariation: null
                    },
                  {
                    level: 2,
                    levelIsConstant : true,
                    colorByPoint: true,
                    colorVariation: {
                      key: 'brightness',
                      to: -.1,
                    }
                  },
                  {
                    level: 3,
                    levelIsConstant : true,
                    colorVariation: {
                      key: 'brightness',
                      to: -.2,
                    },   
                  },
                ],
              },
            ],
          });

        });
      });
    });
  }

  navigateWithParam(componentId: number) {
    switch (componentId) {
      case 1:
        this._flagService.setFlagComp1(true);
        break;
      case 2:
        this._flagService.setFlagComp2(true);
        break;
      case 3:
        this._flagService.setFlagComp3(true);
        break;
      case 4:
        this._flagService.setFlagComp4(true);
        break;
      case 5:
        this._flagService.setFlagComp5(true);
        break;
      case 6:
        this._flagService.setFlagComp6(true);
        break;
      default:
        break;
    }
    this.router.navigate(['/dg/products']);
  }

  navigateWithParamSubcomp(subcomponentId: number) {
    // Utiliza el id del componente para establecer la bandera correspondiente
    switch (subcomponentId) {
      case 1:
        this._flagService.setFlagSubComp1(true);
        break;
      case 2:
        this._flagService.setFlagSubComp2(true);
        break;
      case 3:
        this._flagService.setFlagSubComp3(true);
        break;
      case 4:
        this._flagService.setFlagSubComp4(true);
        break;
      case 5:
        this._flagService.setFlagSubComp5(true);
        break;
      case 6:
        this._flagService.setFlagSubComp6(true);
        break;
      case 7:
        this._flagService.setFlagSubComp7(true);
         break;
       case 8:
         this._flagService.setFlagSubComp8(true);
         break;
       case 9:
         this._flagService.setFlagSubComp9(true);
         break;
       case 10:
         this._flagService.setFlagSubComp10(true);
         break;
       case 11:
         this._flagService.setFlagSubComp11(true);
         break;
       case 12:
         this._flagService.setFlagSubComp12(true);
         break;
       case 13:
         this._flagService.setFlagSubComp13(true);
         break;
       case 14:
         this._flagService.setFlagSubComp14(true);
         break;
       case 15:
         this._flagService.setFlagSubComp15(true);
         break;
       case 16:
         this._flagService.setFlagSubComp16(true);
         break;
       case 17:
         this._flagService.setFlagSubComp17(true);
         break;
       case 18:
         this._flagService.setFlagSubComp18(true);
         break;
       case 19:
         this._flagService.setFlagSubComp19(true);
         break;
       case 20:
         this._flagService.setFlagSubComp20(true);
         break;
       case 21:
         this._flagService.setFlagSubComp21(true);
         break;
       default:
         break;
        }    // Navega a la ruta deseada
    this.router.navigate(['/dg/products']);
  }


  loadChart(){
    this._direServices.componentes().subscribe(
      (data) => {
        this.componentesMDEA = data;
        this.loadingCharts = false; // Marcamos como cargados cuando los datos llegan
      },
    )
    this._direServices.subcomponentes().subscribe(
      (data) => {
        this.subComponentesMDEA = data;
        this.loadingCharts = false; // Marcamos como cargados cuando los datos llegan
      },
    )
  }
}

