import { Component, OnInit, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { MessageService } from 'primeng/api';
import { OdsFilterService } from '../../services/odsfilters.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-ods-page',
  templateUrl: './ods-page.component.html',
  styleUrls: ['./ods-page.component.css'],
  providers: [MessageService],
})
export class OdsPageComponent implements OnInit, AfterViewInit {
  constructor(
    private messageService: MessageService,
    private _odsFlag: OdsFilterService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const collapseElements = [
      document.getElementById('collapseExample')!,
      document.getElementById('collapseExample2')!,
      document.getElementById('collapseExample3')!,
      document.getElementById('collapseExample4')!,
      document.getElementById('collapseExample5')!,
      document.getElementById('collapseExample6')!,
      document.getElementById('collapseExample7')!,
      document.getElementById('collapseExample8')!,
      document.getElementById('collapseExample9')!,
      document.getElementById('collapseExample10')!,
      document.getElementById('collapseExample11')!,
      document.getElementById('collapseExample12')!,
      document.getElementById('collapseExample13')!,
      document.getElementById('collapseExample14')!,
      document.getElementById('collapseExample15')!,
      document.getElementById('collapseExample16')!,
      document.getElementById('collapseExample17')!,
    ];

    // Función para ocultar todos los colapso excepto el cli
    const toggleCollapse = (collapseElements: HTMLElement[]) => {
      collapseElements.forEach((elementToShow, indexToShow) => {
        elementToShow.addEventListener('show.bs.collapse', () => {
          collapseElements.forEach((elementToHide, indexToHide) => {
            if (indexToShow !== indexToHide) {
              const collapseInstance = new (window as any).bootstrap.Collapse(
                elementToHide,
                {
                  toggle: false,
                }
              );
              collapseInstance.hide();
            }
          });
        });
      });
    };

    // Asignar eventos
    toggleCollapse(collapseElements);

    //! free
    const modalElements1 = document.querySelectorAll('.modal');
    modalElements1.forEach((modalElement) => {
      modalElement.addEventListener('hidden.bs.modal', () => {
        this.clickCornerButton();
      });
    });

    //! free

    this.createChart();
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
  }

  //! botón invisible
  clickCornerButton(): void {
    setTimeout(() => {
      const buttonIds = [
        'corner-button',
        'corner-button2',
        'corner-button3',
        'corner-button4',
        'corner-button5',
        'corner-button6',
        'corner-button7',
        'corner-button8',
        'corner-button9',
        'corner-button10',
        'corner-button11',
        'corner-button12',
        'corner-button13',
        'corner-button14',
        'corner-button15',
        'corner-button16',
        'corner-button17',
      ]; // Lista de IDs de botones
      buttonIds.forEach((id) => {
        const button = document.getElementById(id);
        if (button) {
          button.focus(); // Primero enfoca el botón
          button.click(); // Luego hace clic en el botón
        }
      });
    }, 100); // Ajusta el tiempo (500 ms) según sea necesario
  }

  showWarn() {
    this.messageService.add({
      severity: 'warn',
      summary: 'NOTA',
      detail:
        'Esta meta no cuenta con información por parte de México | SIODS | Sistema de Información de los Objetivos de Desarrollo Sostenible.',
    });
  }

  //! gráficas
  createChart(): void {
    const labels = ['Meta 1.1', 'Meta 1.3', 'Meta 1.4', 'Meta 1.5'];
    const data = [6, 17, 104, 19];
    const chartElement = document.getElementById(
      'objetivo1'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con esta meta',
              data: data,
              backgroundColor: [
                'rgba(229, 35, 61, 1)',
                'rgba(229, 35, 61, 1)',
                'rgba(229, 35, 61, 1)',
                'rgba(229, 35, 61, 1)',
              ],
              borderColor: [
                'rgb(229, 35, 61)',
                'rgb(229, 35, 61)',
                'rgb(229, 35, 61)',
                'rgb(229, 35, 61)',
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
    const labels = ['Meta 2.1', 'Meta 2.3', 'Meta 2.4', 'Meta 2.a', 'Meta 2.c'];
    const data = [1, 65, 56, 2, 2];
    const chartElement = document.getElementById(
      'objetivo2'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con esta meta',
              data: data,
              backgroundColor: [
                'rgba(221, 167, 58, 1)',
                'rgba(221, 167, 58, 1)',
                'rgba(221, 167, 58, 1)',
                'rgba(221, 167, 58, 1)',
                'rgba(221, 167, 58, 1)',
              ],
              borderColor: [
                'rgb(221, 167, 58)',
                'rgb(221, 167, 58)',
                'rgb(221, 167, 58)',
                'rgb(221, 167, 58)',
                'rgb(221, 167, 58)',
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
          onHover: (event, elements, chart) => {
            const target = chart.canvas; // Obtén el canvas directamente desde el objeto chart
            if (elements.length > 0) {
                const index = elements[0].index;
                // Cambia el cursor a 'pointer' solo si el índice es uno de los especificados
                if (index === 1 || index === 2 || index === 3 || index === 4) {
                    target.style.cursor = 'pointer';
                } else {
                    target.style.cursor = 'default';
                }
            } else {
                target.style.cursor = 'default';
            }
        },
        onClick: (event, elements) => {
            if (elements && elements.length > 0) {
                const index = elements[0].index;
                // Lógica de activación de la función según la barra clicada
                if (index === 1) {
                    this.filtroMeta2_3();
                }
                if (index === 2) {
                    this.filtroMeta2_4();
                }
                if (index === 3) {
                    this.filtroMeta2_a();
                }
                if (index === 4) {
                    this.filtroMeta2_c();
                }
            }
        },        
        },
      });
    } else {
      console.error('Element with id "componente1" not found.');
    }
  }
  createChart3(): void {
    const labels = ['Meta 3.4', 'Meta 3.7', 'Meta 3.8', 'Meta 3.9'];
    const data = [1, 5, 107, 39];
    const chartElement = document.getElementById(
      'objetivo3'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con esta meta',
              data: data,
              backgroundColor: [
                'rgba(76, 161, 70, 1)',
                'rgba(76, 161, 70, 1)',
                'rgba(76, 161, 70, 1)',
                'rgba(76, 161, 70, 1)',
              ],
              borderColor: [
                'rgb(76, 161, 70)',
                'rgb(76, 161, 70)',
                'rgb(76, 161, 70)',
                'rgb(76, 161, 70)',
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
          onHover: (event, elements, chart) => {
            const target = chart.canvas; 
            if (elements.length > 0) {
                const index = elements[0].index;
                if (index === 2) {
                    target.style.cursor = 'pointer';
                } else {
                    target.style.cursor = 'default';
                }
            } else {
                target.style.cursor = 'default';
            }
        },
        onClick: (event, elements) => {
            if (elements && elements.length > 0) {
                const index = elements[0].index;
                if (index === 2) {
                    this.filtroMeta3_8();
                }
            }
        },        
        },
      });
    } else {
      console.error('Element with id "componente1" not found.');
    }
  }
  createChart4(): void {
    const labels = ['Meta 4.1', 'Meta 4.2', 'Meta 4.3', 'Meta 4.5', 'Meta 4.7'];
    const data = [5, 4, 4, 4, 11];
    const chartElement = document.getElementById(
      'objetivo4'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con esta meta',
              data: data,
              backgroundColor: [
                'rgba(199, 33, 47, 1)',
                'rgba(199, 33, 47, 1)',
                'rgba(199, 33, 47, 1)',
                'rgba(199, 33, 47, 1)',
                'rgba(199, 33, 47, 1)',
              ],
              borderColor: [
                'rgb(199, 33, 47)',
                'rgb(199, 33, 47)',
                'rgb(199, 33, 47)',
                'rgb(199, 33, 47)',
                'rgb(199, 33, 47)',
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
          onHover: (event, elements, chart) => {
            const target = chart.canvas; 
            if (elements.length > 0) {
                const index = elements[0].index;
                if (index === 4) {
                    target.style.cursor = 'pointer';
                } else {
                    target.style.cursor = 'default';
                }
            } else {
                target.style.cursor = 'default';
            }
        },
        onClick: (event, elements) => {
            if (elements && elements.length > 0) {
                const index = elements[0].index;
                if (index === 4) {
                    this.filtroMeta4_7();
                }
            }
        },        
        },
      });
    } else {
      console.error('Element with id "componente1" not found.');
    }
  }
  createChart5(): void {
    const labels = ['Meta 5.1', 'Meta 5.2', 'Meta 5.4', 'Meta 5.5', 'Meta 5.a'];
    const data = [17, 21, 1, 7, 7];
    const chartElement = document.getElementById(
      'objetivo5'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con esta meta',
              data: data,
              backgroundColor: [
                'rgba(239, 64, 45, 1)',
                'rgba(239, 64, 45, 1)',
                'rgba(239, 64, 45, 1)',
                'rgba(239, 64, 45, 1)',
                'rgba(239, 64, 45, 1)',
              ],
              borderColor: [
                'rgb(239, 64, 45)',
                'rgb(239, 64, 45)',
                'rgb(239, 64, 45)',
                'rgb(239, 64, 45)',
                'rgb(239, 64, 45)',
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
          onHover: (event, elements, chart) => {
            const target = chart.canvas; 
            if (elements.length > 0) {
                const index = elements[0].index;
                if (index === 0) {
                    target.style.cursor = 'pointer';
                } else {
                    target.style.cursor = 'default';
                }
            } else {
                target.style.cursor = 'default';
            }
        },
        onClick: (event, elements) => {
            if (elements && elements.length > 0) {
                const index = elements[0].index;
                if (index === 0) {
                    this.filtroMeta5_1();
                }
            }
        },        
        },
      });
    } else {
      console.error('Element with id "componente1" not found.');
    }
  }
  createChart6(): void {
    const labels = [
      'Meta 6.1',
      'Meta 6.2',
      'Meta 6.3',
      'Meta 6.4',
      'Meta 6.5',
      'Meta 6.6',
      'Meta 6.b',
    ];
    const data = [139, 56, 28, 45, 5, 54, 3];
    const chartElement = document.getElementById(
      'objetivo6'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con esta meta',
              data: data,
              backgroundColor: [
                'rgba(39, 191, 230, 1)',
                'rgba(39, 191, 230, 1)',
                'rgba(39, 191, 230, 1)',
                'rgba(39, 191, 230, 1)',
                'rgba(39, 191, 230, 1)',
                'rgba(39, 191, 230, 1)',
                'rgba(39, 191, 230, 1)',
              ],
              borderColor: [
                'rgb(39, 191, 230)',
                'rgb(39, 191, 230)',
                'rgb(39, 191, 230)',
                'rgb(39, 191, 230)',
                'rgb(39, 191, 230)',
                'rgb(39, 191, 230)',
                'rgb(39, 191, 230)',
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
          onHover: (event, elements, chart) => {
            const target = chart.canvas; 
            if (elements.length > 0) {
                const index = elements[0].index;
                if (index === 5 || index === 6) {
                    target.style.cursor = 'pointer';
                } else {
                    target.style.cursor = 'default';
                }
            } else {
                target.style.cursor = 'default';
            }
        },
        onClick: (event, elements) => {
            if (elements && elements.length > 0) {
                const index = elements[0].index;
                if (index === 5) {
                    this.filtroMeta6_6();
                }
                if (index === 6) {
                    this.filtroMeta6_b();
                }
            }
        },        
        },
      });
    } else {
      console.error('Element with id "componente1" not found.');
    }
  }
  createChart7(): void {
    const labels = ['Meta 7.1', 'Meta 7.2', 'Meta 7.3'];
    const data = [146, 13, 5];
    const chartElement = document.getElementById(
      'objetivo7'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con esta meta',
              data: data,
              backgroundColor: [
                'rgba(251, 196, 18, 1)',
                'rgba(251, 196, 18, 1)',
                'rgba(251, 196, 18, 1)',
              ],
              borderColor: [
                'rgb(251, 196, 18)',
                'rgb(251, 196, 18)',
                'rgb(251, 196, 18)',
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
  createChart8(): void {
    const labels = [
      'Meta 8.1',
      'Meta 8.2',
      'Meta 8.3',
      'Meta 8.4',
      'Meta 8.5',
      'Meta 8.6',
      'Meta 8.7',
      'Meta 8.8',
      'Meta 8.10',
      'Meta 8.a',
      'Meta 8.b',
    ];
    const data = [2, 2, 16, 73, 19, 2, 9, 19, 5, 1, 1];
    const chartElement = document.getElementById(
      'objetivo8'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con esta meta',
              data: data,
              backgroundColor: [
                'rgba(163, 28, 68, 1)',
                'rgba(163, 28, 68, 1)',
                'rgba(163, 28, 68, 1)',
                'rgba(163, 28, 68, 1)',
                'rgba(163, 28, 68, 1)',
                'rgba(163, 28, 68, 1)',
                'rgba(163, 28, 68, 1)',
                'rgba(163, 28, 68, 1)',
                'rgba(163, 28, 68, 1)',
                'rgba(163, 28, 68, 1)',
                'rgba(163, 28, 68, 1)',
              ],
              borderColor: [
                'rgb(163, 28, 68)',
                'rgb(163, 28, 68)',
                'rgb(163, 28, 68)',
                'rgb(163, 28, 68)',
                'rgb(163, 28, 68)',
                'rgb(163, 28, 68)',
                'rgb(163, 28, 68)',
                'rgb(163, 28, 68)',
                'rgb(163, 28, 68)',
                'rgb(163, 28, 68)',
                'rgb(163, 28, 68)',
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
          onHover: (event, elements, chart) => {
            const target = chart.canvas; 
            if (elements.length > 0) {
                const index = elements[0].index;
                if (index === 9 || index === 10) {
                    target.style.cursor = 'pointer';
                } else {
                    target.style.cursor = 'default';
                }
            } else {
                target.style.cursor = 'default';
            }
        },
        onClick: (event, elements) => {
            if (elements && elements.length > 0) {
                const index = elements[0].index;
                if (index === 9) {
                    this.filtroMeta8_a();
                }
                if (index === 10) {
                    this.filtroMeta8_b();
                }
            }
        },        
        },
      });
    } else {
      console.error('Element with id "componente1" not found.');
    }
  }
  createChart9(): void {
    const labels = ['Meta 9.1', 'Meta 9.3', 'Meta 9.5'];
    const data = [40, 1, 10];
    const chartElement = document.getElementById(
      'objetivo9'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con esta meta',
              data: data,
              backgroundColor: [
                'rgba(242, 106, 46, 1)',
                'rgba(242, 106, 46, 1)',
                'rgba(242, 106, 46, 1)',
              ],
              borderColor: [
                'rgb(242, 106, 46)',
                'rgb(242, 106, 46)',
                'rgb(242, 106, 46)',
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
  createChart10(): void {
    const labels = ['Meta 10.2', 'Meta 10.4'];
    const data = [28, 9];
    const chartElement = document.getElementById(
      'objetivo10'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con esta meta',
              data: data,
              backgroundColor: [
                'rgba(224, 20, 131, 1)',
                'rgba(224, 20, 131, 1)',
                'rgba(224, 20, 131, 1)',
                'rgba(224, 20, 131, 1)',
              ],
              borderColor: [
                'rgb(224, 20, 131)',
                'rgb(224, 20, 131)',
                'rgb(224, 20, 131)',
                'rgb(224, 20, 131)',
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
  createChart11(): void {
    const labels = [
      'Meta 11.1',
      'Meta 11.2',
      'Meta 11.3',
      'Meta 11.4',
      'Meta 11.5',
      'Meta 11.6',
      'Meta 11.7',
      'Meta 11.a',
      'Meta 11.b',
    ];
    const data = [103, 101, 80, 6, 5, 50, 8, 1, 37];
    const chartElement = document.getElementById(
      'objetivo11'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con esta meta',
              data: data,
              backgroundColor: [
                'rgba(248, 157, 42, 1)',
                'rgba(248, 157, 42, 1)',
                'rgba(248, 157, 42, 1)',
                'rgba(248, 157, 42, 1)',
              ],
              borderColor: [
                'rgb(248, 157, 42)',
                'rgb(248, 157, 42)',
                'rgb(248, 157, 42)',
                'rgb(248, 157, 42)',
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
          onHover: (event, elements, chart) => {
            const target = chart.canvas; 
            if (elements.length > 0) {
                const index = elements[0].index;
                if (index === 7 || index === 8) {
                    target.style.cursor = 'pointer';
                } else {
                    target.style.cursor = 'default';
                }
            } else {
                target.style.cursor = 'default';
            }
        },
        onClick: (event, elements) => {
            if (elements && elements.length > 0) {
                const index = elements[0].index;
                if (index === 7) {
                    this.filtroMeta11_a();
                }
                if (index === 8) {
                    this.filtroMeta11_b();
                }
            }
        },        
        },
      });
    } else {
      console.error('Element with id "componente1" not found.');
    }
  }
  createChart12(): void {
    const labels = [
      'Meta 12.2',
      'Meta 12.3',
      'Meta 12.4',
      'Meta 12.5',
      'Meta 12.6',
      'Meta 12.8',
    ];
    const data = [89, 4, 47, 13, 1, 23];
    const chartElement = document.getElementById(
      'objetivo12'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con esta meta',
              data: data,
              backgroundColor: [
                'rgba(191, 141, 44, 1)',
                'rgba(191, 141, 44, 1)',
                'rgba(191, 141, 44, 1)',
                'rgba(191, 141, 44, 1)',
                'rgba(191, 141, 44, 1)',
                'rgba(191, 141, 44, 1)',
              ],
              borderColor: [
                'rgb(191, 141, 44)',
                'rgb(191, 141, 44)',
                'rgb(191, 141, 44)',
                'rgb(191, 141, 44)',
                'rgb(191, 141, 44)',
                'rgb(191, 141, 44)',
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
          onHover: (event, elements, chart) => {
            const target = chart.canvas;
            if (elements.length > 0) {
                const index = elements[0].index;
                if (index === 1 || index === 2 || index === 4 || index === 5) {
                    target.style.cursor = 'pointer';
                } else {
                    target.style.cursor = 'default';
                }
            } else {
                target.style.cursor = 'default';
            }
        },
        onClick: (event, elements) => {
            if (elements && elements.length > 0) {
                const index = elements[0].index;
                if (index === 1) {
                    this.filtroMeta12_3();
                }
                if (index === 2) {
                    this.filtroMeta12_4();
                }
                if (index === 4) {
                    this.filtroMeta12_6();
                }
                if (index === 5) {
                    this.filtroMeta12_8();
                }
            }
        },        
        },
      });
    } else {
      console.error('Element with id "componente1" not found.');
    }
  }
  createChart13(): void {
    const labels = ['Meta 13.1', 'Meta 13.2', 'Meta 13.3', 'Meta 13.b'];
    const data = [3, 3, 13, 2];
    const chartElement = document.getElementById(
      'objetivo13'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con esta meta',
              data: data,
              backgroundColor: [
                'rgba(64, 127, 70, 1)',
                'rgba(64, 127, 70, 1)',
                'rgba(64, 127, 70, 1)',
                'rgba(64, 127, 70, 1)',
              ],
              borderColor: [
                'rgb(64, 127, 70)',
                'rgb(64, 127, 70)',
                'rgb(64, 127, 70)',
                'rgb(64, 127, 70)',
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
          onHover: (event, elements, chart) => {
            const target = chart.canvas; 
            if (elements.length > 0) {
                const index = elements[0].index;
                if (index === 1 || index === 3) {
                    target.style.cursor = 'pointer';
                } else {
                    target.style.cursor = 'default';
                }
            } else {
                target.style.cursor = 'default';
            }
        },
        onClick: (event, elements) => {
            if (elements && elements.length > 0) {
                const index = elements[0].index;
                if (index === 1) {
                    this.filtroMeta13_2();
                }
                if (index === 3) {
                    this.filtroMeta13_b();
                }
            }
        },        
        },
      });
    } else {
      console.error('Element with id "componente1" not found.');
    }
  }
  createChart14(): void {
    const labels = ['Meta 14.1', 'Meta 14.2', 'Meta 14.4', 'Meta 14.5'];
    const data = [1, 1, 6, 4];
    const chartElement = document.getElementById(
      'objetivo14'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con esta meta',
              data: data,
              backgroundColor: [
                'rgba(31, 151, 212, 1)',
                'rgba(31, 151, 212, 1)',
                'rgba(31, 151, 212, 1)',
                'rgba(31, 151, 212, 1)',
              ],
              borderColor: [
                'rgb(31, 151, 212)',
                'rgb(31, 151, 212)',
                'rgb(31, 151, 212)',
                'rgb(31, 151, 212)',
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
          onHover: (event, elements, chart) => {
            const target = chart.canvas; 
            if (elements.length > 0) {
                const index = elements[0].index;
                if (index === 0 || index === 2) {
                    target.style.cursor = 'pointer';
                } else {
                    target.style.cursor = 'default';
                }
            } else {
                target.style.cursor = 'default';
            }
        },
        onClick: (event, elements) => {
            if (elements && elements.length > 0) {
                const index = elements[0].index;
                if (index === 0) {
                    this.filtroMeta14_1();
                }
                if (index === 2) {
                    this.filtroMeta14_4();
                }
            }
        },
        
        },
      });
    } else {
      console.error('Element with id "componente1" not found.');
    }
  }
  createChart15(): void {
    const labels = [
      'Meta 15.1',
      'Meta 15.2',
      'Meta 15.3',
      'Meta 15.4',
      'Meta 15.5',
      'Meta 15.7',
      'Meta 15.a',
    ];
    const data = [37, 49, 14, 1, 4, 9, 1];
    const chartElement = document.getElementById(
      'objetivo15'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con esta meta',
              data: data,
              backgroundColor: [
                'rgba(89, 186, 71, 1)',
                'rgba(89, 186, 71, 1)',
                'rgba(89, 186, 71, 1)',
                'rgba(89, 186, 71, 1)',
                'rgba(89, 186, 71, 1)',
                'rgba(89, 186, 71, 1)',
                'rgba(89, 186, 71, 1)',
              ],
              borderColor: [
                'rgb(89, 186, 71)',
                'rgb(89, 186, 71)',
                'rgb(89, 186, 71)',
                'rgb(89, 186, 71)',
                'rgb(89, 186, 71)',
                'rgb(89, 186, 71)',
                'rgb(89, 186, 71)',
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
          onHover: (event, elements, chart) => {
            const target = chart.canvas;
            if (elements.length > 0) {
                const index = elements[0].index;
                if (index === 1 || index === 2 || index === 5 || index === 6) {
                    target.style.cursor = 'pointer';
                } else {
                    target.style.cursor = 'default';
                }
            } else {
                target.style.cursor = 'default';
            }
        },
        onClick: (event, elements) => {
            if (elements && elements.length > 0) {
                const index = elements[0].index;
                if (index === 1) {
                    this.filtroMeta15_2();
                }
                if (index === 2) {
                    this.filtroMeta15_3();
                }
                if (index === 5) {
                    this.filtroMeta15_7();
                }
                if (index === 6) {
                    this.filtroMeta15_a();
                }
            }
        },
        },
      });
    } else {
      console.error('Element with id "componente1" not found.');
    }
  }
  createChart16(): void {
    const labels = [
      'Meta 16.1',
      'Meta 16.2',
      'Meta 16.5',
      'Meta 16.7',
      'Meta 16.10',
      'Meta 16.a',
      'Meta 16.b',
    ];
    const data = [12, 6, 12, 1, 3, 10, 1];
    const chartElement = document.getElementById(
      'objetivo16'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con esta meta',
              data: data,
              backgroundColor: [
                'rgba(19, 106, 159, 1)',
                'rgba(19, 106, 159, 1)',
                'rgba(19, 106, 159, 1)',
                'rgba(19, 106, 159, 1)',
                'rgba(19, 106, 159, 1)',
                'rgba(19, 106, 159, 1)',
                'rgba(19, 106, 159, 1)',
              ],
              borderColor: [
                'rgb(19, 106, 159)',
                'rgb(19, 106, 159)',
                'rgb(19, 106, 159)',
                'rgb(19, 106, 159)',
                'rgb(19, 106, 159)',
                'rgb(19, 106, 159)',
                'rgb(19, 106, 159)',
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
          onHover: (event, elements, chart) => {
            const target = chart.canvas;
            if (elements.length > 0) {
                const index = elements[0].index;
                if (index === 1 || index === 4 || index === 5) {
                    target.style.cursor = 'pointer';
                } else {
                    target.style.cursor = 'default';
                }
            } else {
                target.style.cursor = 'default';
            }
        },
        onClick: (event, elements) => {
            if (elements && elements.length > 0) {
                const index = elements[0].index;
                if (index === 1) {
                    this.filtroMeta16_2();
                }
                if (index === 4) {
                    this.filtroMeta16_10();
                }
                if (index === 5) {
                    this.filtroMeta16_a();
                }
            }
        },
        },
      });
    } else {
      console.error('Element with id "componente1" not found.');
    }
  }
  
  createChart17(): void {
    const labels = ['Meta 17.10', 'Meta 17.11'];
    const data = [1, 1];
    const chartElement = document.getElementById(
      'objetivo17'
    ) as HTMLCanvasElement;

    if (chartElement) {
      new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:
                ' Número de productos que tienen relación con esta meta',
              data: data,
              backgroundColor: ['rgba(20, 73, 107, 1)', 'rgba(20, 73, 107, 1)'],
              borderColor: ['rgb(20, 73, 107)', 'rgb(20, 73, 107)'],
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
              // Lógica de activación de la función según la barra clicada

              if (index === 0) {
                this.filtroMeta17_10();
              }
              if (index === 1) {
                this.filtroMeta17_11();
              }

            }
          },
        },
      });
    } else {
      console.error('Element with id "componente1" not found.');
    }
  }

  //! links al
  navigateToLink(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000100010&cveind=1&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink2(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000100020&cveind=482&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink3(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000100030&cveind=594&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink4(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000200002&cveind=2&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink5(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000200004&cveind=550&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink6(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000200005&cveind=637&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink7(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000200007&cveind=395&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink8(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000200010&cveind=105&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink9(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000200015&cveind=551&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink10(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000200020&cveind=396&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink11(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000200030&cveind=638&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink12(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000250010&cveind=106&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink13(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000250020&cveind=639&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink14(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000280010&cveind=107&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink15(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000280020&cveind=114&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink16(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000290010&cveind=108&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink17(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000390020&cveind=111&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink18(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000620010&cveind=494&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink19(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000620020&cveind=554&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink20(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000620030&cveind=573&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink21(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000750010&cveind=478&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink22(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000750020&cveind=479&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink23(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000790010&cveind=480&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink24(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000790015&cveind=563&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink25(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000790020&cveind=495&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink26(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000790025&cveind=571&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink27(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000790030&cveind=496&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink28(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000790040&cveind=569&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink29(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS001000790050&cveind=574&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  //? objetivos 2
  navigateToLink30(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS002000050015&cveind=382&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink31(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS002000050017&cveind=635&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink32(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS002000050020&cveind=118&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink33(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS002000050030&cveind=636&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink34(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS002000080010&cveind=117&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink35(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS002000080020&cveind=120&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink36(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS002000080030&cveind=540&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink37(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS002000080040&cveind=542&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink38(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS002000080050&cveind=608&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink39(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS002000080060&cveind=609&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink40(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS002000690010&cveind=417&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink41(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS002000790010&cveind=474&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink42(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS002000790020&cveind=564&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink43(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS002000790025&cveind=572&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink44(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS002000790030&cveind=565&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink45(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS002000790040&cveind=566&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink46(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS002000890010&cveind=422&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink47(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000030010&cveind=26&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink48(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000030020&cveind=27&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink49(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000030010&cveind=26&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink50(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000030020&cveind=27&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink51(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000050010&cveind=23&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink52(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000050020&cveind=623&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink53(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000100007&cveind=578&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink54(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000100015&cveind=508&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink55(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000100022&cveind=631&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink56(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000100026&cveind=632&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink57(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000100030&cveind=132&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink58(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000100033&cveind=626&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink59(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000100035&cveind=627&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink60(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000100036&cveind=628&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink61(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000100037&cveind=629&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink62(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000100044&cveind=625&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink63(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000100045&cveind=134&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink64(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000200010&cveind=543&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink65(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000200020&cveind=537&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink66(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000200030&cveind=544&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink67(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000500010&cveind=140&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink68(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000500015&cveind=557&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink69(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000500020&cveind=141&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink70(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000500030&cveind=334&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink71(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000500040&cveind=517&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink72(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000500050&cveind=595&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink73(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000700010&cveind=630&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink74(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000700020&cveind=523&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink75(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000700030&cveind=548&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink76(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003000700040&cveind=549&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink77(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003001000010&cveind=150&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink78(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003001200010&cveind=424&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink79(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003001200015&cveind=567&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink80(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003001200017&cveind=575&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink81(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003001200020&cveind=425&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink82(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003001200025&cveind=570&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink83(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003001200030&cveind=427&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink84(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003001200035&cveind=568&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink85(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003001200040&cveind=428&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink86(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003001400010&cveind=432&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink87(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003001500010&cveind=434&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink88(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS003001500020&cveind=611&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink89(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000100011&cveind=587&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink90(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000100012&cveind=529&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink91(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000100013&cveind=599&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink92(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000100014&cveind=600&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  //! 4.2.1
  navigateToLink93(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000200010&cveind=152&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink94(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000200020&cveind=153&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink95(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000300010&cveind=154&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 4r.3.1
  navigateToLink96(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000300020&cveind=507&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 4.4.1
  navigateToLink97(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000400010&cveind=155&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 4.5.1a
  navigateToLink98(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000500010&cveind=156&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink99(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000500020&cveind=640&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink100(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000500030&cveind=641&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink101(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000500040&cveind=642&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink102(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000500050&cveind=643&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink103(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000500060&cveind=644&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  //! 4.6.1.a
  navigateToLink104(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000600010&cveind=157&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink105(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000600020&cveind=518&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink106(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000600025&cveind=615&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink107(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000600030&cveind=612&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink108(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000600040&cveind=616&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  //! 4.a.1.a
  navigateToLink109(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000800010&cveind=159&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink110(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000800020&cveind=385&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink111(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000800030&cveind=386&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink112(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000800040&cveind=387&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink113(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000800045&cveind=400&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink114(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000800050&cveind=388&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink115(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000800060&cveind=389&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink116(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004000800065&cveind=401&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink117(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004001000010&cveind=161&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink118(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004001000020&cveind=383&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink119(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004001000030&cveind=384&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink120(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004001100010&cveind=436&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink121(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS004001200010&cveind=476&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink122(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000120010&cveind=163&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink123(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000120015&cveind=338&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink124(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000120020&cveind=183&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink125(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000120030&cveind=339&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink126(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000140010&cveind=164&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink127(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000140020&cveind=553&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink128(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000250010&cveind=165&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink129(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000250020&cveind=532&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink130(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000250030&cveind=533&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink131(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000250040&cveind=601&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink132(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000250050&cveind=602&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink133(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000250060&cveind=603&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink134(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000250070&cveind=604&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink135(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000350075&cveind=324&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink136(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000350076&cveind=335&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink137(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000350077&cveind=592&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink138(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000350078&cveind=590&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink139(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000350079&cveind=591&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink140(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000350080&cveind=185&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink141(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000450010&cveind=186&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink142(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000550010&cveind=188&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink143(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000550020&cveind=528&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink144(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000650010&cveind=190&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink145(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000750010&cveind=441&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink146(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000750020&cveind=443&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink147(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000750030&cveind=444&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink148(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000750040&cveind=445&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink149(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000850010&cveind=448&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink150(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS005000950010&cveind=450&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink151(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000050010&cveind=54&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink152(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000050020&cveind=617&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink153(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000050030&cveind=618&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink154(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000150010&cveind=192&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink155(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000150020&cveind=621&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink156(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000150030&cveind=622&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink157(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000250010&cveind=193&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink158(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000250020&cveind=194&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink159(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000350010&cveind=195&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink160(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000350020&cveind=407&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink161(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000450010&cveind=197&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink162(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000450020&cveind=198&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink163(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000650010&cveind=582&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink164(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000850010&cveind=451&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink165(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000850015&cveind=624&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink166(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000850020&cveind=619&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink167(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000850030&cveind=620&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink168(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000950010&cveind=452&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink169(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS006000950020&cveind=453&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink170(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS007000100020&cveind=203&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink171(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS007000200010&cveind=204&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink172(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS007000300010&cveind=205&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink173(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS007000600010&cveind=454&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink174(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS007000700010&cveind=455&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink175(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS007000800010&cveind=456&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  // ! 8.1.1
  navigateToLink176(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000150010&cveind=207&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink177(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000250010&cveind=393&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink178(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000250020&cveind=583&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink179(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000350010&cveind=208&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink180(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000350020&cveind=584&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink181(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000450020&cveind=176&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink182(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000450030&cveind=328&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink183(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000450040&cveind=329&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink184(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000550010&cveind=209&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  //! 8.5.1b
  navigateToLink185(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000550020&cveind=534&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink186(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000550030&cveind=535&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink187(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000550040&cveind=536&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink188(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000550050&cveind=210&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink189(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000550060&cveind=585&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink190(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000650010&cveind=211&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink191(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000650015&cveind=588&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink192(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000650017&cveind=589&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink193(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000650020&cveind=556&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink194(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000750010&cveind=212&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink195(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000850010&cveind=213&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink196(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008000950010&cveind=215&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 8.10.1.a
  navigateToLink197(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008001050010&cveind=217&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink198(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008001050015&cveind=370&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink199(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008001050020&cveind=218&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  //! nacionales
  navigateToLink200(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008001150010&cveind=457&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink201(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008001250020&cveind=459&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink202(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008001350010&cveind=460&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink203(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008001350020&cveind=579&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink204(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008001350030&cveind=580&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink205(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008001350040&cveind=581&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink206(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS008001450010&cveind=461&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  //! 9.1.1
  navigateToLink207(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS009000030015&cveind=497&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink208(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS009000030030&cveind=330&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink209(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS009000030040&cveind=331&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink210(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS009000040010&cveind=223&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink211(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS009000040015&cveind=381&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink212(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS009000040020&cveind=224&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink213(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS009000040030&cveind=586&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink214(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS009000200010&cveind=225&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink215(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS009000200020&cveind=226&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink216(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS009000300050&cveind=48&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  navigateToLink217(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS009000400010&cveind=227&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink218(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS009000400020&cveind=228&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink219(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS009000700020&cveind=230&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink220(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS009000800005&cveind=58&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  //! nacionales
  navigateToLink221(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS009001000010&cveind=463&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink222(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS009001100010&cveind=464&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 10.1.1.
  navigateToLink223(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS010000050010&cveind=231&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink224(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS010000050020&cveind=634&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink225(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS010000100010&cveind=93&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink226(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS010000100020&cveind=547&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink227(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS010000200010&cveind=177&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink228(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS010000300010&cveind=232&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink229(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS010000300020&cveind=519&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink230(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS010000300030&cveind=520&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink231(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS010000700010&cveind=466&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink232(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS010000800010&cveind=467&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink233(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS010000900010&cveind=468&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 11.1.1
  navigateToLink234(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS011000050010&cveind=56&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink235(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS011000100010&cveind=94&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink236(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS011000100020&cveind=558&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink237(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS011000100030&cveind=559&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink238(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS011000100040&cveind=560&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink239(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS011000100050&cveind=561&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink240(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS011000200010&cveind=239&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink241(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS011000200020&cveind=240&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink242(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS011000300010&cveind=498&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink243(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS011000400010&cveind=485&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink244(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS011000500010&cveind=501&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink245(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS011000500020&cveind=243&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink246(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS011000500030&cveind=613&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink247(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS011000600010&cveind=244&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink248(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS011000800010&cveind=470&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink249(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS011000900010&cveind=472&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 12.2.2.a
  navigateToLink250(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS012000200010&cveind=605&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink251(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS012000200020&cveind=606&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink252(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS012000200030&cveind=607&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink253(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS012000500010&cveind=502&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink254(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS012000500020&cveind=597&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink255(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS012001000010&cveind=257&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink256(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS012001200010&cveind=471&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink257(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS012001300010&cveind=473&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 13.1.1
  navigateToLink258(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS013000050010&cveind=484&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink259(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS013000050020&cveind=598&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink260(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS013000060010&cveind=576&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink261(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS013000100010&cveind=446&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink262(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS013000100015&cveind=614&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink263(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS013000100020&cveind=447&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink264(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS013000200010&cveind=449&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 14r.2
  navigateToLink265(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS014000200020&cveind=555&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink266(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS014000500010&cveind=266&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink267(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS014000500020&cveind=545&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink268(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS014000800010&cveind=499&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 15.1.1
  navigateToLink269(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS015000050010&cveind=103&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink270(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS015000050020&cveind=272&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink271(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS015000050030&cveind=541&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink272(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS015000050040&cveind=593&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink273(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS015000300010&cveind=274&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink274(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS015000300020&cveind=275&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink275(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS015000400010&cveind=276&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink276(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS015000700010&cveind=439&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink277(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS015000800010&cveind=440&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 16.1.1
  navigateToLink278(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000100010&cveind=101&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink279(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000100035&cveind=404&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink280(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000100036&cveind=405&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink281(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000100037&cveind=406&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink282(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000100040&cveind=327&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 16.3.1
  navigateToLink283(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000300010&cveind=286&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink284(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000300015&cveind=514&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink285(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000300017&cveind=515&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink286(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000300018&cveind=516&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink287(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000300020&cveind=287&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink288(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000300030&cveind=526&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink289(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000300040&cveind=527&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 16.5.1
  navigateToLink290(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000500010&cveind=290&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink291(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000500020&cveind=291&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 16.6.1
  navigateToLink292(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000600010&cveind=292&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink293(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000600030&cveind=524&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink294(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000600040&cveind=525&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 16.7.1b
  navigateToLink295(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000700020&cveind=530&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink296(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000700030&cveind=531&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink297(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000700040&cveind=295&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 16.9.1a
  navigateToLink298(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000900010&cveind=296&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink299(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000900020&cveind=546&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 16.b.1.
  navigateToLink300(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016000950010&cveind=486&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 16n.1.1
  navigateToLink301(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016001000010&cveind=423&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink302(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016001000020&cveind=426&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink303(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016001100010&cveind=429&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink304(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016001100020&cveind=431&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink305(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016001100030&cveind=433&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink306(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016001100040&cveind=435&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink307(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016001200010&cveind=437&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink308(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016001200020&cveind=489&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink309(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016001200030&cveind=490&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink310(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016001200040&cveind=491&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink311(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016001200050&cveind=492&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink312(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016001200060&cveind=493&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink313(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS016001200070&cveind=506&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  //! 17.1.1
  navigateToLink314(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS017000050010&cveind=300&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink315(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS017000050020&cveind=301&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink316(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS017000090020&cveind=304&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink317(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS017000200010&cveind=305&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink318(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS017000600010&cveind=488&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink319(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS017000800003&cveind=377&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink320(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS017000800005&cveind=60&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink321(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS017001800010&cveind=596&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink322(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS017001400010&cveind=412&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink323(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS017001500010&cveind=413&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink324(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS017001700010&cveind=418&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }
  navigateToLink325(): void {
    window.open(
      'https://agenda2030.mx/ODSind.html?ind=ODS017001700020&cveind=421&cveCob=99&lang=es#/Indicator',
      '_blank'
    );
  }

  filtroMeta1_1(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta1_1(true);
    $('#exampleModal').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta1_3(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta1_3(true);
    $('#exampleModal3').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta1_4(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta1_4(true);
    $('#exampleModal4').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta1_5(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta1_5(true);
    $('#exampleModal5').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  //! meta 2
  filtroMeta2_1(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta2_1(true);
    $('#exampleModal9').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta2_3(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta2_3(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta2_4(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta2_4(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta2_a(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta2_a(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta2_c(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta2_c(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  //! metas 3
  filtroMeta3_4(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta3_4(true);
    $('#exampleModal15').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta3_7(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta3_7(true);
    $('#exampleModal16').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta3_8(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta3_8(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta3_9(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta3_9(true);
    $('#exampleModal17').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  //! metas4
  filtroMeta4_1(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta4_1(true);
    $('#exampleModal20').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta4_2(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta4_2(true);
    $('#exampleModal21').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta4_3(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta4_3(true);
    $('#exampleModal22').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta4_5(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta4_5(true);
    $('#exampleModal24').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta4_7(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta4_7(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  //! metas5
  filtroMeta5_1(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta5_1(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta5_2(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta5_2(true);
    $('#exampleModal29').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta5_4(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta5_4(true);
    $('#exampleModal31').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta5_5(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta5_5(true);
    $('#exampleModal32').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta5_a(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta5_a(true);
    $('#exampleModal34').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  //! metas6
  filtroMeta6_1(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta6_1(true);
    $('#exampleModal37').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta6_2(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta6_2(true);
    $('#exampleModal38').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta6_3(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta6_3(true);
    $('#exampleModal39').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta6_4(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta6_4(true);
    $('#exampleModal40').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta6_5(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta6_5(true);
    $('#exampleModal41').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta6_6(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta6_6(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta6_b(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta6_b(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  //! metas7
  filtroMeta7_1(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta7_1(true);
    $('#exampleModal44').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta7_2(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta7_2(true);
    $('#exampleModal45').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta7_3(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta7_3(true);
    $('#exampleModal46').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  //! metas8
  filtroMeta8_1(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta8_1(true);
    $('#exampleModal48').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta8_2(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta8_2(true);
    $('#exampleModal49').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta8_3(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta8_3(true);
    $('#exampleModal50').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta8_4(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta8_4(true);
    $('#exampleModal51').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta8_5(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta8_5(true);
    $('#exampleModal52').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta8_6(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta8_6(true);
    $('#exampleModal53').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta8_7(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta8_7(true);
    $('#exampleModal54').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta8_8(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta8_8(true);
    $('#exampleModal55').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta8_10(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta8_10(true);
    $('#exampleModal57').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta8_a(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta8_a(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta8_b(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta8_b(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  //! metas9
  filtroMeta9_1(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta9_1(true);
    $('#exampleModal59').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta9_3(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta9_3(true);
    $('#exampleModal61').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta9_5(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta9_5(true);
    $('#exampleModal63').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  //! metas10
  filtroMeta10_2(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta10_2(true);
    $('#exampleModal68').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta10_4(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta10_4(true);
    $('#exampleModal70').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  //! metas11
  filtroMeta11_1(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta11_1(true);
    $('#exampleModal72').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta11_2(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta11_2(true);
    $('#exampleModal73').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta11_3(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta11_3(true);
    $('#exampleModal74').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta11_4(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta11_4(true);
    $('#exampleModal75').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta11_5(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta11_5(true);
    $('#exampleModal76').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta11_6(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta11_6(true);
    $('#exampleModal77').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta11_7(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta11_7(true);
    $('#exampleModal78').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta11_a(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta11_a(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta11_b(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta11_b(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  //! metas12
  filtroMeta12_2(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta12_2(true);
    $('#exampleModal80').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta12_3(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta12_3(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta12_4(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta12_4(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta12_5(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta12_5(true);
    $('#exampleModal81').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta12_6(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta12_6(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta12_8(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta12_8(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  //! metas13
  filtroMeta13_1(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta13_1(true);
    $('#exampleModal84').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta13_2(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta13_2(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta13_3(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta13_3(true);
    $('#exampleModal85').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta13_b(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta13_b(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  //! metas14
  filtroMeta14_1(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta14_1(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta14_2(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta14_2(true);
    $('#exampleModal87').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta14_4(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta14_4(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta14_5(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta14_5(true);
    $('#exampleModal88').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  //! metas15
  filtroMeta15_1(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta15_1(true);
    $('#exampleModal90').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta15_2(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta15_2(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta15_3(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta15_3(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta15_4(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta15_4(true);
    $('#exampleModal91').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta15_5(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta15_5(true);
    $('#exampleModal92').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta15_7(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta15_7(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta15_a(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta15_a(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  //! metas16
  filtroMeta16_1(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta16_1(true);
    $('#exampleModal94').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta16_2(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta16_2(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta16_5(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta16_5(true);
    $('#exampleModal96').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta16_7(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta16_7(true);
    $('#exampleModal98').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta16_10(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta16_10(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta16_a(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta16_a(true);
    // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta16_b(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta16_b(true);
    $('#exampleModal100').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  //! metas17
  filtroMeta17_10(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta17_10(true);
    $('#exampleModal100').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
  filtroMeta17_11(): void {
    this._odsFlag.setMasterFlag(true)
    this._odsFlag.setMeta17_11(true);
    $('#exampleModal100').modal('hide'); // Cierra el modal

    // Retrasa la navegación por 1 segundo (1000 milisegundos)
    setTimeout(() => {
      this.router.navigate(['/dg/products']);
    }, 1000);
  }
}
