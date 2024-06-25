import { Component, AfterViewInit, Renderer2, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Componente, Topico } from '../../interfaces/mdea.interface';
import { FlagService } from '../../services/flagService.service';
import { Router } from '@angular/router';
import { Products } from '../../interfaces/product.interface';
import { DGService } from '../../services/dg.service';

@Component({
  selector: 'app-mdea-page',
  templateUrl: './mdea-page.component.html',
  styleUrls: ['./mdea-page.component.css'],
})
export class MdeaPageComponent implements OnInit, AfterViewInit {
  isMobile: boolean = window.innerWidth <= 480;
  public componentesMDEA: Componente[] = [];
  public topicoMDEA: Topico[] = [];
  public products: Products[] = [];

  longitudesPorCompId: { [key: number]: number } = {};

  constructor(
    private router: Router,
    private _flagService: FlagService,
    private _direServices: DGService,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    // Suscribirse al observable 'productos' de '_direServices'
    this._direServices.productos().subscribe((data) => {
      // Asignar los datos recibidos a la propiedad 'products'
      this.products = data;
      // Imprimir los productos en la consola
      console.log('productos:', this.products);
    });

    // Suscribirse al observable 'topicos' de '_direServices'
    this._direServices.topicos().subscribe((dataTopicomdea) => {
      // Asignar los datos recibidos a la propiedad 'topicoMDEA'
      this.topicoMDEA = dataTopicomdea;
      // Filtrar los productos usando 'topicoMDEA'
      const filteredProducts = this.filterProductsByTopicoMDEA(this.topicoMDEA); // Filtrar productos aquí
      // Imprimir los productos filtrados en la consola
      console.log('productos filtrados:', filteredProducts);
      // Imprimir los tópicos en la consola
      console.log('lostopicos:', this.topicoMDEA);
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
  }

  filterProductsByTopicoMDEA(topicoMDEA: any[]): Products[] {
    return this.products.filter((producto) => {
      return topicoMDEA.some(
        (topico) => topico.interview__id === producto.interview__id
      );
    });
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
    const data = [110, 273, 92, 21, 309, 152];
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
              label: ' Productos que cuentan con una relación',
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
          animation: {
            delay: 1000,
            // loop: true
          },
          responsive: true,
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                labelOffset: 0,

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
          onClick: (event, elements) => {
            if (elements && elements.length > 0) {
              const index = elements[0].index;
              // Aquí puedes redireccionar a la página deseada según la barra clicada
              switch (index) {
                case 0:
                  window.location.href = 'http://localhost:4200/#/dg';
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

  createChart1(): void {
    const labels = [
      '1.1: Condiciones físicas',
      '1.2: Cobertura terrestre, ecosistemas y biodiversidad',
      '1.3: Calidad ambiental',
    ];
    const data = [69, 55, 9];
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
              label: ' Productos que cuentan con una relación',
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
    const data = [14, 35, 85, 135, 49];
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
              label: ' Productos que cuentan con una relación',
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
    const data = [9, 23, 55, 12];
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
              label: ' Productos que cuentan con una relación',
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
    const data = [20, 1];
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
              label: ' Productos que cuentan con una relación',
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
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
  }

  createChart5(): void {
    const labels = ['5.1: Asentamientos humanos.', '5.2: Salud ambiental.'];
    const data = [306, 7];
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
              label: ' Productos que cuentan con una relación',
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
    const data = [35, 63, 9, 55];
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
              label: ' Productos que cuentan con una relación',
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
        },
      });
    } else {
      console.error('Element with id "acquisitions" not found.');
    }
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
    this.router.navigate(['/dg/products']).then(() => {
      // this.hiddenFilters();
    });
  }
}

