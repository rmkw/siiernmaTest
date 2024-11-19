import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DGService } from '../../services/dg.service';
import { IndicadorTable } from '../../interfaces/indicador.interface';

@Component({
  selector: 'app-indicadores-page',
  templateUrl: './indicadores-page.component.html',
  styleUrls: ['./indicadores-page.component.css'],
})
export class IndicadoresPageComponent implements OnInit {
  indicadores: IndicadorTable[] = [];
  paginatedData: any[] = []; // Datos mostrados en la tabla
  isLoading: boolean = true; // Estado de carga
  first: number = 0; // Índice del primer registro visible
  rows: number = 15; // Número de registros por página

  constructor(public indi_table: DGService) {
    this.indi_table.indicadoresCollectionTable().subscribe(
      (data: IndicadorTable[]) => {
        this.indicadores = data;
      },
      (error) => {
        console.error('Error al obtener los indicadores', error);
      }
    );
  }

  ngOnInit() {
    this.cargarIndicadores();
  }

  cargarIndicadores(): void {
    this.isLoading = true; 
    this.indi_table.indicadoresCollectionTable().subscribe(
      (data: IndicadorTable[]) => {
        this.indicadores = data;
        this.filteredIndicadores = [...this.indicadores]; 
        this.updatePaginatedData();
        this.isLoading = false; 
      },
      (error) => {
        console.error('Error al obtener los indicadores', error);
        this.isLoading = false; 
      }
    );
  }

  updatePaginatedData(): void {
    const start = this.first;
    const end = this.first + this.rows;
    this.paginatedData = this.filteredIndicadores.slice(start, end);
  }

  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
    this.updatePaginatedData();
  }


  filteredIndicadores: IndicadorTable[] = [];

  filterByTema(tema: string) {
    if (tema) {
      this.filteredIndicadores = this.indicadores.filter(
        (indicador) => indicador.tema === tema
      );
    } else {
      this.filteredIndicadores = [...this.indicadores]; 
    }
  }
}

