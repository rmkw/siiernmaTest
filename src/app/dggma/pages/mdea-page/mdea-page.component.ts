import { Component, AfterViewInit, Renderer2, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Componente, Mdea, Topico, Subcomponente } from '../../interfaces/mdea.interface';
import { FlagService } from '../../services/flagService.service';
import { Router } from '@angular/router';
import { Products } from '../../interfaces/product.interface';
import { DGService } from '../../services/dg.service';
import { OdsFilterService } from '../../services/odsfilters.service';

@Component({
  selector: 'app-mdea-page',
  templateUrl: './mdea-page.component.html',
  styleUrls: ['./mdea-page.component.css'],
})
export class MdeaPageComponent implements OnInit, AfterViewInit {
  isMobile: boolean = window.innerWidth <= 480;
  public componentesMDEA: Componente[] = [];
  public subcomponentesMDEA: Subcomponente[] = [];
  public topicoMDEA: Topico[] = [];
  public products: Products[] = [];
  public mdea: Mdea[] = [];

  // Resultados de conteo
  productosPorComponente: any = {};
  productosPorSubcomponente: any = {};
  productosPorTopico: any = {};

  constructor(
    private router: Router,
    private _flagService: FlagService,
    private _direServices: DGService,
    private renderer: Renderer2,
    private _odsService: OdsFilterService
  ) {}
  ngOnInit(): void {
    // Suscribirse a los datos de 'productos', 'mdea' y 'topicoMDEA'
    this._direServices.productos().subscribe((data: Products[]) => {
      this.products = data;
      this.processData();
    });

    this._direServices.mdea().subscribe((data: Mdea[]) => {
      this.mdea = data;
      this.processData();
    });

    this._direServices.componentes().subscribe((data: Componente[]) => {
      this.componentesMDEA = data;
      this.processData();
    });

    this._direServices.subcomponentes().subscribe((data: Subcomponente[]) => {
      this.subcomponentesMDEA = data;
      this.processData();
    });

    this._direServices.topicos().subscribe((data: Topico[]) => {
      this.topicoMDEA = data;
      this.processData();
    });
  }

  ngAfterViewInit(): void {
    this.createChart();
    this.createChart1();
    this.createChart2();
    this.createChart3();
    this.createChart4();
    this.createChart5();
    this.createChart6();
    this.createChart7();
    this.createChart8();
    this.createChart9();
    this.createChart10();
    this.createChart11();
    this.createChart12();
    this.createChart13();
    this.createChart14();
    this.createChart15();
    this.createChart16();
    this.createChart17();
    this.createChart18();
    this.createChart19();
    this.createChart20();
    this.createChart21();
    this.createChart22();
    this.createChart23();
    this.createChart24();
    this.createChart25();
    this.createChart26();
  }
  createChart(): void {
    const labels = [
      ['1. Condiciones y', 'calidad ambiental.'],
      ['2. Recursos ambientales', 'y su uso.'],
      ['3. Residuos y actividades', 'humanas relacionadas.'],
      ['4. Eventos extremos y', 'desastres.'],
      ['5. Asentamientos humanos y', 'salud ambiental.'],
      ['6. Protección ambiental y', 'participación ciudadana.'],
    ];
    const data = [182, 386, 151, 25, 578, 320];
    const chartElement = document.getElementById(
      'acquisitions'
    ) as HTMLCanvasElement;
  
    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este componente ',
              data: data,
              backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 205, 86, 0.6)',
              ],
              borderColor: [
                'rgb(54, 162, 235)',
                'rgb(255, 159, 64)',
                'rgb(255, 99, 132)',
                'rgb(153, 102, 255)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
              ],
              borderWidth: 1,
            },
          ],
        },
  
        options: {
          responsive: true,
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                textAlign: 'center',
              },
            },
          },
          onHover: (event, elements) => {
            const target = chartElement;
            if (elements.length > 0) {
              target.style.cursor = 'pointer';
            } else {
              target.style.cursor = 'default';
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              switch (index) {
                case 0:
                  this.filtroComponente1();
                  break;
                case 1:
                  this.filtroComponente2();
                  break;
                case 2:
                  this.filtroComponente3();
                  break;
                case 3:
                  this.filtroComponente4();
                  break;
                case 4:
                  this.filtroComponente5();
                  break;
                case 5:
                  this.filtroComponente6();
                  break;
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }
  

  createChart1(): void {
    const labels = [
      ['1.1: Condiciones físicas',],
      ['1.2: Cobertura terrestre, ecosistemas', 
        'y biodiversidad',],
      ['1.3: Calidad ambiental',],
    ];
    const data = [114, 97, 15];
    const chartElement = document.getElementById(
      'componente1'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este subcomponente ',
              data: data,
              backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
              ],
              borderColor: [
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,

                padding: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement;
            if (elements.length > 0) {
              target.style.cursor = 'pointer';
            } else {
              target.style.cursor = 'default';
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroSubComponente1();
                  break;
                case 1:
                  this.filtroSubComponente2();
                  break;
                case 2:
                  this.filtroSubComponente3();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "componente1" not found.');
    }
  }

  createChart2(): void {
    const labels = [
      ['2.1: Recursos', 'minerales.'],
      ['2.2: Recursos', 'energéticos.'],

      '2.3: Tierra.',
      ['2.5: Recursos', 'biológicos.'],

      '2.6: Recursos hídricos',
    ];
    const data = [41, 54, 126, 174, 65];
    const chartElement = document.getElementById(
      'componente2'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este subcomponente',
              data: data,
              backgroundColor: [
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 159, 64, 0.6)',
              ],
              borderColor: [
                'rgb(255, 159, 64)',
                'rgb(255, 159, 64)',
                'rgb(255, 159, 64)',
                'rgb(255, 159, 64)',
                'rgb(255, 159, 64)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement;
            if (elements.length > 0) {
              target.style.cursor = 'pointer';
            } else {
              target.style.cursor = 'default';
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroSubComponente4();
                  break;
                case 1:
                  this.filtroSubComponente5();
                  break;
                case 2:
                  this.filtroSubComponente6();
                  break;
                case 3:
                  this.filtroSubComponente8();
                  break;
                case 4:
                  this.filtroSubComponente9();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }

  createChart3(): void {
    const labels = [
      '3.1: Emisiones al aire.',
      ['3.2: Generación y gestión', 'de aguas residuales.'],
      ['3.3: Generación y gestión', 'de desechos.'],
      '3.4: Aplicación de químicos.',
    ];
    const data = [11, 24, 111, 12];
    const chartElement = document.getElementById(
      'componente3'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este subcomponente',
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 99, 132)',
                'rgb(255, 99, 132)',
                'rgb(255, 99, 132)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement;
            if (elements.length > 0) {
              target.style.cursor = 'pointer';
            } else {
              target.style.cursor = 'default';
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroSubComponente10();
                  break;
                case 1:
                  this.filtroSubComponente11();
                  break;
                case 2:
                  this.filtroSubComponente12();
                  break;
                case 3:
                  this.filtroSubComponente13();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }

  createChart4(): void {
    const labels = [
      '4.1: Eventos naturales extremos y desastres.',
      '4.2: Desastres tecnológicos.',
    ];
    const data = [24, 2];
    const chartElement = document.getElementById(
      'componente4'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este subcomponente',
              data: data,
              backgroundColor: [
                'rgba(153, 102, 255, 0.6)',
                'rgba(153, 102, 255, 0.6)',
              ],
              borderColor: ['rgb(153, 102, 255)', 'rgb(153, 102, 255)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement;
            if (elements.length > 0) {
              target.style.cursor = 'pointer';
            } else {
              target.style.cursor = 'default';
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroSubComponente14();
                  break;
                case 1:
                  this.filtroSubComponente15();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }

  createChart5(): void {
    const labels = ['5.1: Asentamientos humanos.', '5.2: Salud ambiental.'];
    const data = [499, 83];
    const chartElement = document.getElementById(
      'componente5'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este subcomponente',
              data: data,
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(75, 192, 192, 0.6)',
              ],
              borderColor: ['rgb(75, 192, 192)', 'rgb(75, 192, 192)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement;
            if (elements.length > 0) {
              target.style.cursor = 'pointer';
            } else {
              target.style.cursor = 'default';
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroSubComponente16();
                  break;
                case 1:
                  this.filtroSubComponente17();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }

  createChart6(): void {
    const labels = [
      ['6.1: Gastos en protección', 'ambiental.'],
      ['6.2: Regulación y gobernanza', 'ambiental.'],
      ['6.3: Preparación ante eventos', 'extremos y gestión de desastres.'],
      ['6.4: Información y conciencia', 'ambiental.'],
    ];
    const data = [80, 121, 38, 93];
    const chartElement = document.getElementById(
      'componente6'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este subcomponente ',
              data: data,
              backgroundColor: [
                'rgba(255, 205, 86, 0.6)',
                'rgba(255, 205, 86, 0.6)',
                'rgba(255, 205, 86, 0.6)',
                'rgba(255, 205, 86, 0.6)',
              ],
              borderColor: [
                'rgb(255, 205, 86)',
                'rgb(255, 205, 86)',
                'rgb(255, 205, 86)',
                'rgb(255, 205, 86)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement;
            if (elements.length > 0) {
              target.style.cursor = 'pointer';
            } else {
              target.style.cursor = 'default';
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroSubComponente18();
                  break;
                case 1:
                  this.filtroSubComponente19();
                  break;
                case 2:
                  this.filtroSubComponente20();
                  break;
                case 3:
                  this.filtroSubComponente21();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }

  //! graficas de topicos
  createChart7(): void {
    const labels = [
      ['1.1.1: Atmósfera, clima',' y condiciones', 
        'meteorológicas'],
      ['1.1.2: Características hidrográficas'],
      ['1.1.3: Información geológica ', 
        'y geográfica'],
      ['1.1.4: Características del suelo'],
    ];
    const data = [23, 40, 70, 35, 90];
    const chartElement = document.getElementById(
      'topico1'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este tópico ',
              data: data,
              backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
              ],
              borderColor: [
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement;
            if (elements.length > 0) {
              target.style.cursor = 'pointer';
            } else {
              target.style.cursor = 'default';
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico1();
                  break;
                case 1:
                  this.filtroTopico2();
                  break;
                case 2:
                  this.filtroTopico3();
                  break;
                case 3:
                  this.filtroTopico4();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "componente1" not found.');
    }
  }
  createChart8(): void {
    const labels = [
      ['1.2.1: Cobertura terrestre'],
      ['1.2.2: Ecosistemas y biodiversidad'],

      '1.2.3: Bosques',
    ];
    const data = [76, 70, 16];
    const chartElement = document.getElementById(
      'topico2'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este tópico ',
              data: data,
              backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
              ],
              borderColor: [
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement;
            if (elements.length > 0) {
              target.style.cursor = 'pointer';
            } else {
              target.style.cursor = 'default';
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico5();
                  break;
                case 1:
                  this.filtroTopico6();
                  break;
                case 2:
                  this.filtroTopico7();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }
  createChart9(): void {
    const labels = [
      '1.3.2: Calidad del agua dulce',
      '1.3.4: Contaminación del suelo',
      '1.3.5: Ruido',
    ];
    const data = [6, 5, 4, 8];
    const chartElement = document.getElementById(
      'topico3'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este tópico ',
              data: data,
              backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
              ],
              borderColor: [
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement;
            if (elements.length > 0) {
              target.style.cursor = 'pointer';
            } else {
              target.style.cursor = 'default';
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico9();
                  break;
                case 1:
                  this.filtroTopico11();
                  break;
                case 2:
                  this.filtroTopico12();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "componente1" not found.');
    }
  }

  createChart10(): void {
    const labels = [
      ['2.1.1: Stocks y cambios de los recursos minerales'],
      ['2.1.2: Producción y comercio de minerales'],
    ];
    const data = [6, 41];
    const chartElement = document.getElementById(
      'topico4'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este tópico ',
              data: data,
              backgroundColor: [
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 159, 64, 0.6)',
              ],
              borderColor: ['rgb(255, 159, 64)', 'rgb(255, 159, 64)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement;
            if (elements.length > 0) {
              target.style.cursor = 'pointer';
            } else {
              target.style.cursor = 'default';
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico13();
                  break;
                case 1:
                  this.filtroTopico14();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }
  createChart11(): void {
    const labels = [
      ['2.2.1: Stocks y cambios de los recursos energéticos'],
      ['2.2.2: Producción, comercio y consumo de energía'],
    ];
    const data = [1, 53];
    const chartElement = document.getElementById(
      'topico5'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este tópico ',
              data: data,
              backgroundColor: [
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 159, 64, 0.6)',
              ],
              borderColor: ['rgb(255, 159, 64)', 'rgb(255, 159, 64)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement;
            if (elements.length > 0) {
              target.style.cursor = 'pointer';
            } else {
              target.style.cursor = 'default';
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico15();
                  break;
                case 1:
                  this.filtroTopico16();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }
  createChart12(): void {
    const labels = [
      ['2.3.1: Uso de la tierra'],
      ['2.3.2: Uso de tierra boscosa'],
    ];
    const data = [115, 23];
    const chartElement = document.getElementById(
      'topico6'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este tópico ',
              data: data,
              backgroundColor: [
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 159, 64, 0.6)',
              ],
              borderColor: ['rgb(255, 159, 64)', 'rgb(255, 159, 64)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement;
            if (elements.length > 0) {
              target.style.cursor = 'pointer';
            } else {
              target.style.cursor = 'default';
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico17();
                  break;
                case 1:
                  this.filtroTopico18();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }
  createChart13(): void {
    const labels = [
      ['2.5.1: Recursos', 'maderables'],
      ['2.5.2: Recursos acuáticos'],
      '2.5.3: Cultivos',
      '2.5.4: Ganado',
      ['2.5.5: Otros recursos', 'biológicos no cultivados'],
    ];
    const data = [44, 24, 79, 66, 15];
    const chartElement = document.getElementById(
      'topico7'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este tópico ',
              data: data,
              backgroundColor: [
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 159, 64, 0.6)',
              ],
              borderColor: [
                'rgb(255, 159, 64)',
                'rgb(255, 159, 64)',
                'rgb(255, 159, 64)',
                'rgb(255, 159, 64)',
                'rgb(255, 159, 64)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement;
            if (elements.length > 0) {
              target.style.cursor = 'pointer';
            } else {
              target.style.cursor = 'default';
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico20();
                  break;
                case 1:
                  this.filtroTopico21();
                  break;
                case 2:
                  this.filtroTopico22();
                  break;
                case 3:
                  this.filtroTopico23();
                  break;
                case 4:
                  this.filtroTopico24();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }
  createChart14(): void {
    const labels = [
      ['2.6.1: Recursos hídricos'],
      ['2.6.2: Extracción, uso y retornos de agua'],
    ];
    const data = [32, 43];
    const chartElement = document.getElementById(
      'topico8'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este tópico ',
              data: data,
              backgroundColor: [
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 159, 64, 0.6)',
              ],
              borderColor: ['rgb(255, 159, 64)', 'rgb(255, 159, 64)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement;
            if (elements.length > 0) {
              target.style.cursor = 'pointer';
            } else {
              target.style.cursor = 'default';
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico25();
                  break;
                case 1:
                  this.filtroTopico26();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }

  createChart15(): void {
    const labels = [
      ['3.1.1: Emisiones de gases', 'efecto invernadero (GEI)'],
      ['3.1.2: Consumo de sustancias', 'agotadoras de la capa de ozono (SAO)'],
    ];
    const data = [6, 5, 9];
    const chartElement = document.getElementById(
      'topico9'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este tópico ',
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
              ],
              borderColor: ['rgb(255, 99, 132)', 'rgb(255, 99, 132)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement;
            if (elements.length > 0) {
              target.style.cursor = 'pointer';
            } else {
              target.style.cursor = 'default';
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico27();
                  break;
                case 1:
                  this.filtroTopico28();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }
  createChart16(): void {
    const labels = [
      ['3.2.1: Generación y contenido', 'contaminante de aguas residuales'],
      ['3.2.2: Recolección y tratamiento', 'de aguas residuales'],
      ['3.2.3: Descargas de aguas residuales', 'al ambiente'],
    ];
    const data = [1, 20, 8, 22];
    const chartElement = document.getElementById(
      'topico10'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este tópico ',
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 99, 132)',
                'rgb(255, 99, 132)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement; // Se refiere directamente al elemento canvas
            if (elements.length > 0) {
              target.style.cursor = 'pointer'; // Cambia el cursor a mano (puntero)
            } else {
              target.style.cursor = 'default'; // Restaura el cursor predeterminado
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico30();
                  break;
                case 1:
                  this.filtroTopico31();
                  break;
                case 2:
                  this.filtroTopico32();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }
  createChart17(): void {
    const labels = [
      ['3.3.1: Generación de desechos'],
      ['3.3.2: Gestión de desechos'],
    ];
    const data = [7, 108];
    const chartElement = document.getElementById(
      'topico11'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este tópico ',
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
              ],
              borderColor: ['rgb(255, 99, 132)', 'rgb(255, 99, 132)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement; // Se refiere directamente al elemento canvas
            if (elements.length > 0) {
              target.style.cursor = 'pointer'; // Cambia el cursor a mano (puntero)
            } else {
              target.style.cursor = 'default'; // Restaura el cursor predeterminado
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico33();
                  break;
                case 1:
                  this.filtroTopico34();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }
  createChart18(): void {
    const labels = [['3.4.1: Aplicación de químicos']];
    const data = [12, 15];
    const chartElement = document.getElementById(
      'topico12'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con este tópico ',
              data: data,
              backgroundColor: ['rgba(255, 99, 132, 0.6)'],
              borderColor: ['rgb(255, 99, 132)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement; // Se refiere directamente al elemento canvas
            if (elements.length > 0) {
              target.style.cursor = 'pointer'; // Cambia el cursor a mano (puntero)
            } else {
              target.style.cursor = 'default'; // Restaura el cursor predeterminado
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico35();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }

  createChart19(): void {
    const labels = [
      '4.1.1: Ocurrencia de eventos naturales extremos y desastres',
      '4.1.2: Impacto de eventos naturales extremos y desastres',
    ];
    const data = [18, 13, 20];
    const chartElement = document.getElementById(
      'topico13'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: ' Número de productos que tienen relación con este tópico',
              data: data,
              backgroundColor: [
                'rgba(153, 102, 255, 0.6)',
                'rgba(153, 102, 255, 0.6)',
              ],
              borderColor: ['rgb(153, 102, 255)', 'rgb(153, 102, 255)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement; // Se refiere directamente al elemento canvas
            if (elements.length > 0) {
              target.style.cursor = 'pointer'; // Cambia el cursor a mano (puntero)
            } else {
              target.style.cursor = 'default'; // Restaura el cursor predeterminado
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico36();
                  break;
                case 1:
                  this.filtroTopico37();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }
  createChart20(): void {
    const labels = ['4.2.2: Impacto de los desastres tecnológicos'];
    const data = [2, 10];
    const chartElement = document.getElementById(
      'topico14'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: ' Número de productos que tienen relación con este tópico',
              data: data,
              backgroundColor: [
                'rgba(153, 102, 255, 0.6)',
                'rgba(153, 102, 255, 0.6)',
              ],
              borderColor: ['rgb(153, 102, 255)', 'rgb(153, 102, 255)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement; // Se refiere directamente al elemento canvas
            if (elements.length > 0) {
              target.style.cursor = 'pointer'; // Cambia el cursor a mano (puntero)
            } else {
              target.style.cursor = 'default'; // Restaura el cursor predeterminado
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico39();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }

  createChart21(): void {
    const labels = [
      ['5.1.1: Población urbana', 'y rural'],
      ['5.1.2: Acceso a servicios', 'básicos seleccionados'],
      ['5.1.3: Condiciones', 'de la vivienda'],
      ['5.1.4: Exposición a', 'contaminación ambiental'],
      [
        '5.1.5: Cuestiones ambientales',
        'específicas de los',
        'asentamientos urbanos',
      ],
    ];
    const data = [32, 247, 74, 8, 190];
    const chartElement = document.getElementById(
      'topico15'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: ' Número de productos que tienen relación con este tópico',
              data: data,
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(75, 192, 192, 0.6)',
              ],
              borderColor: [
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 4; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement; // Se refiere directamente al elemento canvas
            if (elements.length > 0) {
              target.style.cursor = 'pointer'; // Cambia el cursor a mano (puntero)
            } else {
              target.style.cursor = 'default'; // Restaura el cursor predeterminado
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico40();
                  break;
                case 1:
                  this.filtroTopico41();
                  break;
                case 2:
                  this.filtroTopico42();
                  break;
                case 3:
                  this.filtroTopico43();
                  break;
                case 4:
                  this.filtroTopico44();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }
  createChart22(): void {
    const labels = [
      ['5.2.1: Enfermedades y', 'condiciones transmitidas', 'por el aire'],
      ['5.2.2: Enfermedades y', 'condiciones relacionadas', 'con el agua'],
      ['5.2.3: Enfermedades', 'transmitidas por vectores'],
      [
        '5.2.4: Problemas',
        'de salud asociados con',
        'la exposición excesiva',
        'a la radiación UV',
      ],
      [
        '5.2.5: Enfermedades',
        'y condiciones relacionadas',
        'con sustancias tóxicas',
        'y radiación nuclear',
      ],
    ];
    const data = [5, 6, 78, 2, 2];
    const chartElement = document.getElementById(
      'topico16'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: ' Número de productos que tienen relación con este tópico',
              data: data,
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(75, 192, 192, 0.6)',
              ],
              borderColor: [
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 4; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 12; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: -1,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement; // Se refiere directamente al elemento canvas
            if (elements.length > 0) {
              target.style.cursor = 'pointer'; // Cambia el cursor a mano (puntero)
            } else {
              target.style.cursor = 'default'; // Restaura el cursor predeterminado
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico45();
                  break;
                case 1:
                  this.filtroTopico46();
                  break;
                case 2:
                  this.filtroTopico47();
                  break;
                case 3:
                  this.filtroTopico48();
                  break;
                case 4:
                  this.filtroTopico49();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }

  createChart23(): void {
    const labels = [
      [
        '6.1.1: Gasto público en protección ambiental',
        'y en gestión de recursos naturales',
      ],
      [
        '6.1.2: Gasto de empresas privadas, de institución',
        'ambiental y en gestión de recursos naturales',
      ],
    ];
    const data = [57, 30];
    const chartElement = document.getElementById(
      'topico17'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: ' Número de productos que tienen relación con este tópico',
              data: data,
              backgroundColor: [
                'rgba(255, 205, 86, 0.6)',
                'rgba(255, 205, 86, 0.6)',
              ],
              borderColor: ['rgb(255, 205, 86)', 'rgb(255, 205, 86)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement; // Se refiere directamente al elemento canvas
            if (elements.length > 0) {
              target.style.cursor = 'pointer'; // Cambia el cursor a mano (puntero)
            } else {
              target.style.cursor = 'default'; // Restaura el cursor predeterminado
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico50();
                  break;
                case 1:
                  this.filtroTopico51();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }

  createChart24(): void {
    const labels = [
      ['6.2.1: Fortaleza institucional'],
      ['6.2.2: Regulación e instrumentos ambientales'],
    ];
    const data = [38, 83];
    const chartElement = document.getElementById(
      'topico18'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: ' Número de productos que tienen relación con este tópico',
              data: data,
              backgroundColor: [
                'rgba(255, 205, 86, 0.6)',
                'rgba(255, 205, 86, 0.6)',
              ],
              borderColor: ['rgb(255, 205, 86)', 'rgb(255, 205, 86)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement; // Se refiere directamente al elemento canvas
            if (elements.length > 0) {
              target.style.cursor = 'pointer'; // Cambia el cursor a mano (puntero)
            } else {
              target.style.cursor = 'default'; // Restaura el cursor predeterminado
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico52();
                  break;
                case 1:
                  this.filtroTopico53();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }
  createChart25(): void {
    const labels = [
      ['6.3.1: Preparación ante eventos extremos naturales y de desastres'],
      ['6.3.2: Preparación ante desastres tecnológicos'],
    ];
    const data = [27, 12];
    const chartElement = document.getElementById(
      'topico19'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: ' Número de productos que tienen relación con este tópico',
              data: data,
              backgroundColor: [
                'rgba(255, 205, 86, 0.6)',
                'rgba(255, 205, 86, 0.6)',
              ],
              borderColor: ['rgb(255, 205, 86)', 'rgb(255, 205, 86)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement; // Se refiere directamente al elemento canvas
            if (elements.length > 0) {
              target.style.cursor = 'pointer'; // Cambia el cursor a mano (puntero)
            } else {
              target.style.cursor = 'default'; // Restaura el cursor predeterminado
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico55();
                  break;
                case 1:
                  this.filtroTopico56();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }
  createChart26(): void {
    const labels = [
      ['6.4.1: Información ambiental'],
      ['6.4.2: Educación ambiental'],
      ['6.4.3: Percepción', 'y conciencia ambiental'],
      ['6.4.4: Participación/acción', 'ambiental'],
    ];
    const data = [4, 15, 53, 30];
    const chartElement = document.getElementById(
      'topico20'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: ' Número de productos que tienen relación con este tópico',
              data: data,
              backgroundColor: [
                'rgba(255, 205, 86, 0.6)',
                'rgba(255, 205, 86, 0.6)',
                'rgba(255, 205, 86, 0.6)',
                'rgba(255, 205, 86, 0.6)',
              ],
              borderColor: [
                'rgb(255, 205, 86)',
                'rgb(255, 205, 86)',
                'rgb(255, 205, 86)',
                'rgb(255, 205, 86)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,
                font: {
                  // Cambia el tamaño de la fuente dependiendo del tamaño de la pantalla
                  size: function (context) {
                    const width = window.innerWidth;
                    if (width <= 480) {
                      return 6; // Tamaño de fuente pequeño para pantallas móviles
                    } else if (width <= 1024) {
                      return 10.5; // Tamaño de fuente mediano para tablets
                    } else {
                      return 13; // Tamaño de fuente estándar para pantallas grandes
                    }
                  },
                },
                padding: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Productos',
                font: {
                  size: 20,
                },
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
          onHover: (event, elements) => {
            const target = chartElement; // Se refiere directamente al elemento canvas
            if (elements.length > 0) {
              target.style.cursor = 'pointer'; // Cambia el cursor a mano (puntero)
            } else {
              target.style.cursor = 'default'; // Restaura el cursor predeterminado
            }
          },
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  this.filtroTopico57();
                  break;
                case 1:
                  this.filtroTopico58();
                  break;
                case 2:
                  this.filtroTopico59();
                  break;
                case 3:
                  this.filtroTopico60();
                  break;

                // Puedes añadir más casos para las demás barras si es necesario
              }
            }
          },
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }

  //! filtrado para saber cuantos productos tienen relación
  processData() {
    // Verificar los datos de productos y MDEA
    console.log('Datos de productos:', this.products);
    console.log('Datos de MDEA:', this.mdea);

    // Crear un mapa para relacionar `interview__id` con productos
    const productsMap = new Map(
      this.products.map((product) => [product.interview__id, product])
    );

    // Crear un mapa para contar productos por componente, subcomponente y tópico
    const componentCounts = this.initializeCounts(this.componentesMDEA);
    const subcomponentCounts = this.initializeCounts(this.subcomponentesMDEA);
    const topicCounts = this.initializeCounts(this.topicoMDEA);

    // Contar productos por componente, subcomponente y tópico
    this.mdea.forEach((mdeaItem) => {
      const product = productsMap.get(mdeaItem.interview__id);
      if (product) {
        if (mdeaItem.comp_mdea) {
          componentCounts[mdeaItem.comp_mdea].count =
            (componentCounts[mdeaItem.comp_mdea].count || 0) + 1;
        }
        if (mdeaItem.subcomp_mdea) {
          subcomponentCounts[mdeaItem.subcomp_mdea].count =
            (subcomponentCounts[mdeaItem.subcomp_mdea].count || 0) + 1;
        }
        if (mdeaItem.topico_mdea) {
          topicCounts[mdeaItem.topico_mdea].count =
            (topicCounts[mdeaItem.topico_mdea].count || 0) + 1;
        }
      }
    });

    this.productosPorComponente = componentCounts;
    this.productosPorSubcomponente = subcomponentCounts;
    this.productosPorTopico = topicCounts;

    console.log(
      'Conteo de productos por componente:',
      this.productosPorComponente
    );
    console.log(
      'Conteo de productos por subcomponente:',
      this.productosPorSubcomponente
    );
    console.log('Conteo de productos por tópico:', this.productosPorTopico);
  }

  initializeCounts(items: any[]) {
    let counts: any = {};
    items.forEach((item) => {
      counts[item.id] = {
        name: item.text,
        count: 0,
      };
    });
    return counts;
  }
  //! links para filtrado
  filtroComponente1(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagComp1(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroComponente2(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagComp2(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroComponente3(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagComp3(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroComponente4(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagComp4(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroComponente5(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagComp5(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroComponente6(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagComp6(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }

  filtroSubComponente1(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp1(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }

  filtroSubComponente2(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp2(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroSubComponente3(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp3(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroSubComponente4(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp4(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroSubComponente5(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp5(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroSubComponente6(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp6(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }

  filtroSubComponente8(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp8(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroSubComponente9(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp9(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroSubComponente10(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp10(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroSubComponente11(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp11(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroSubComponente12(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp12(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroSubComponente13(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp13(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroSubComponente14(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp14(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroSubComponente15(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp15(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroSubComponente16(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp16(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroSubComponente17(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp17(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroSubComponente18(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp18(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroSubComponente19(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp19(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroSubComponente20(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp20(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroSubComponente21(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagSubComp21(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }

  filtroTopico1(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico1(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico2(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico2(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico3(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico3(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico4(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico4(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico5(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico5(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico6(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico6(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico7(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico7(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }

  filtroTopico9(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico9(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico11(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico11(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico12(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico12(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico13(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico13(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico14(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico14(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico15(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico15(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico16(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico16(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico17(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico17(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico18(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico18(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }

  filtroTopico20(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico20(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico21(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico21(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico22(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico22(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico23(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico23(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico24(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico24(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico25(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico25(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico26(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico26(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico27(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico27(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico28(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico28(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico29(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico29(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico30(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico30(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico31(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico31(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico32(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico32(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico33(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico33(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico34(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico34(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico35(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico35(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico36(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico36(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico37(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico37(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico39(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico39(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico40(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico40(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico41(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico41(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico42(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico42(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico43(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico43(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico44(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico44(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico45(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico45(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico46(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico46(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico47(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico47(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico48(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico48(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico49(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico49(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico50(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico50(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico51(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico51(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico52(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico52(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico53(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico53(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }

  filtroTopico55(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico55(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico56(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico56(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico57(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico57(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico58(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico58(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico59(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico59(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroTopico60(): void {
    this._odsService.setMasterFlag(true);
    this._flagService.setFlagTopico60(true);
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
}

