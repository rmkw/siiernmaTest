import { Componente, Mdea, Subcomponente, Topico } from '../../interfaces/mdea.interface';
import { DGService } from '../../services/dg.service';
import {  AfterViewInit, Component, OnInit } from '@angular/core';
import {  Products } from '../../interfaces/product.interface';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsTreeMap from 'highcharts/modules/treemap';
import HighchartsTreeGraph from 'highcharts/modules/treegraph';
import HighchartsTreeGrid from 'highcharts/modules/treegrid';


@Component({
  selector: 'app-mdea-page',
  templateUrl: './mdea-page.component.html',
  styleUrls: ['./mdea-page.component.css']
})

export class MdeaPageComponent implements OnInit{

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
  
  CompMdeaimg: boolean = false;

  constructor(
    private _direServices: DGService,
  ){}
 
  longitudesPorCompId: { [key: number]: number } = {};
  
  longitudesPorSubCompId: { [key: number]: number } = {};

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
 
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    ngOnInit(): void {

     
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
        console.log(this.mdeas);
    
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

       // Arreglo para subcomponentes
       for (let i = 1; i <= 21; i++) {
        const subcomponente = this.mdeas.filter(data => data.subcomp_mdea === i);
        this.subcomponentesArray[i] = this.filterProductsBySubComponente(subcomponente);
        }
      
        for (let i = 1; i <= 21; i++) {
          this.longitudesPorSubCompId[i] = this.subcomponentesArray[i].length || 0;
        }
      
   // Grafico de pastel para mostrar los datos por componente

    var colors = Highcharts.getOptions().colors
      const componentesData = [];

      for (let i = 1; i <= 6; i++) {
        componentesData.push({
          name: `Componente ${i}`,
          y: this.componentesArray[i]?.length || 0,
          color: colors[i + 1] 
        });

      }
        Highcharts.chart('container-pie-componentes', {
          chart: {
              type: 'pie'
          },
          title: {
              text: 'Productos del INEGI que se apegan a determinados Componentes',
              align: 'center'
          },
          plotOptions: {
              pie: {
                  shadow: false,
                  center: ['50%', '50%']
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
          responsive: {
              rules: [{
                  condition: {
                      maxWidth: 500
                  },
                  chartOptions: {
                      series: [{
                          dataLabels: {
                              enabled: false
                          }
                      }]
                  }
              }]
          }
        });
    

      // Grafica para mostrar los Subcomponentes 

      var colors = Highcharts.getOptions().colors
      const subcomponentesData = [];

      for (let i = 1; i <= 21; i++) {
        subcomponentesData.push({
          name: `SubComponente ${i}`,
          y: this.subcomponentesArray[i]?.length || 0,
          color: colors[i + 1] // Ajusta según tu lógica de asignación de colores
        });

      }
        Highcharts.chart('container-pie-subcomponentes', {
          chart: {
              type: 'pie'
          },
          title: {
              text: 'Productos del INEGI que se apegan a determinados SubComponentes',
              align: 'center'
          },
          plotOptions: {
              pie: {
                  shadow: false,
                  center: ['50%', '50%']
              }
          },
          tooltip: {
              valueSuffix: ' productos'
          },
          series: [{
              name: 'SubComponentes',
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
                  }
              }
          }],
          responsive: {
              rules: [{
                  condition: {
                      maxWidth: 500
                  },
                  chartOptions: {
                      series: [{
                          dataLabels: {
                              enabled: false
                          }
                      }]
                  }
              }]
          }
        });

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
                    levelIsConstant : true,
                    colorVariation: {
                      key: 'brightness',
                      to: -.1 ,
                    },
                    
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
                      to: -.1,
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

}