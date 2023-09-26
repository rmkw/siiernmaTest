import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DggmaRoutingModule } from './dggma-routing.module';
import { DgComponent } from './pages/dg/dg.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { MdeaPageComponent } from './pages/mdea-page/mdea-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ByidsComponent } from './pages/byids/byids.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OdsPageComponent } from './pages/ods-page/ods-page.component';
import { IndicadoresPageComponent } from './pages/indicadores-page/indicadores-page.component';

@NgModule({
  declarations: [
    DgComponent,
    LayoutPageComponent,
    ProductPageComponent,
    MdeaPageComponent,
    SearchPageComponent,
    ByidsComponent,
    OdsPageComponent,
    IndicadoresPageComponent,
  ],
  imports: [
    CommonModule,
    DggmaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DggmaModule { }
