import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { DggmaRoutingModule } from './dggma-routing.module';
import { DgComponent } from './pages/dg/dg.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ByidsComponent } from './pages/byids/byids.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OdsPageComponent } from './pages/ods-page/ods-page.component';
import { MdeaPageComponent } from './pages/mdea-page/mdea-page.component';

import { TreeModule } from 'primeng/tree';
import { PaginatorModule } from 'primeng/paginator';

import { HighchartsChartModule } from 'highcharts-angular';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { IndicadoresPageComponent } from './pages/indicadores-page/indicadores-page.component';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    DgComponent,
    LayoutPageComponent,
    ProductPageComponent,
    NewPageComponent,
    SearchPageComponent,
    ByidsComponent,
    OdsPageComponent,
    MdeaPageComponent,
    IndicadoresPageComponent,
  ],
  imports: [
    CommonModule,
    DggmaRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TreeModule,
    HighchartsChartModule,
    OrganizationChartModule,
    TableModule,
    ButtonModule,
    ToastModule,
    PaginatorModule,
  ],
  exports: [NgbModule],
})
export class DggmaModule {}
