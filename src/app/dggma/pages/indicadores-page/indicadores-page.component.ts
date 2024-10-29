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
    this.indi_table.indicadoresCollectionTable().subscribe(
      (data: IndicadorTable[]) => {
        this.indicadores = data;
        this.filteredIndicadores = [...this.indicadores]; // Inicializa con todos los indicadores
      },
      (error) => {
        console.error('Error al obtener los indicadores', error);
      }
    );
  }

  filteredIndicadores: IndicadorTable[] = [];

  filterByTema(tema: string) {
    if (tema) {
      this.filteredIndicadores = this.indicadores.filter(
        (indicador) => indicador.tema === tema
      );
    } else {
      this.filteredIndicadores = [...this.indicadores]; // Muestra todos los indicadores
    }
  }
}

