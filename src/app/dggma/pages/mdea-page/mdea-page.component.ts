import { Componente, Mdea, Subcomponente, Topico } from '../../interfaces/mdea.interface';
import { DGService } from '../../services/dg.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  Products, SecuenciaVar } from '../../interfaces/product.interface';
import { Observable,  of,  switchMap  } from 'rxjs';
import { FormControl } from '@angular/forms';
import { UAdmin } from '../../interfaces/u_admin.interface';



@Component({
  selector: 'app-mdea-page',
  templateUrl: './mdea-page.component.html',
  styleUrls: ['./mdea-page.component.css']
})

export class MdeaPageComponent  implements OnInit, AfterViewInit{

  


    //Boton para regresar arriba
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Esto desplaza suavemente hacia arriba
    }

  startComponente: number = 0;
  startSubcomponente: number = 0 ;
  startTópico: number = 0; 

  searchFormControl: FormControl = new FormControl();
  selectedProduct: any;
 
   // Observable para los productos filtrados
  filteredProducts$: Observable<Products[]> = of([]);
  public showSuggestions = false;
  public products: Products[] = [];
  public produtosIDS: any[] = [];
  //Boton para expandir la sección de filtros
  expanded = true; 
  public productsById: Products[] = [];
  public componentesMDEA: Componente[]=[];
  public SubcomponentesPorComponente: Mdea[]=[];
  public subComponentesMDEA: Subcomponente[]=[];
  public topicoMDEA: Topico[]=[];
  public mdeas?: Mdea[]=[];
  public segundoSelectorHabilitado: boolean = false;
  public selectedOptionA: any;
  public selectedOptionB: any;
  public selectedOptionC: any;
  selectorBHabilitado: boolean = false;
  selectorCHabilitado: boolean = false;
  public secuenciaVAR: SecuenciaVar[]=[]
  selectedProductMDEA: any;
  seleccionComponente: number = 0;

  // Variable para almacenar las opciones del segundo selector basado en la selección del primero
  subComponentesFiltrados: any[] = [];
  TopicosFiltrados: any [] = [];



  relacion_mdeaComponenteDesde: string[] = [];
  relacion_mdeaSubComponenteDesde: string[] = [];
  relacion_mdeaTopicoDesde: string[] = [];

  
  filteredProducts: Products[] = [];
  showFilteredProducts = false;

  public dgs: UAdmin[] = [];
  currentDirection: any;

  noProductsFound: boolean = false;

 
  
  constructor(
    private _direServices: DGService,
    private _leeLink: ActivatedRoute,
  ){
    this.searchFormControl = new FormControl('');
  }
      // Lógica para habilitar o deshabilitar selectores según la selección en selectorA

    habilitarSelectorB() {
    
      if (this.selectedOptionA =! null ) {
        this.selectorBHabilitado = true;
      } else if (this.selectedOptionA === null){
        this.selectorBHabilitado = false;
        this.selectorCHabilitado = false;
      }
    }
  
    habilitarSelectorC() {
     if (this.selectedOptionB != null) {
      this.selectorCHabilitado = true;
    }else if( this.selectedOptionB === 0)
      this.selectorCHabilitado = false;
    }
  
  
    funcionselectora(event: any)  {
      const selectedValue = event.target.value;
      console.log(selectedValue);
  
      this._direServices.getMDEASCompByProduct(selectedValue)
      .subscribe( data => {
        this.produtosIDS = data; console.log('ProductosComponente', data);

        if (selectedValue === '0') { 
          this.subComponentesFiltrados;
        }else if (selectedValue === '1') { 
          this.subComponentesFiltrados = this.subComponentesMDEA.slice(0, 3);
        } else if(selectedValue === '2'){
          this.subComponentesFiltrados = this.subComponentesMDEA.slice(3, 9);
        } else if(selectedValue === '3'){
          this.subComponentesFiltrados = this.subComponentesMDEA.slice(9, 13);
        } else if(selectedValue === '4'){
          this.subComponentesFiltrados = this.subComponentesMDEA.slice(13, 15);
        } else if(selectedValue === '5'){
          this.subComponentesFiltrados = this.subComponentesMDEA.slice(15, 17);
        } else if(selectedValue === '6'){
          this.subComponentesFiltrados = this.subComponentesMDEA.slice(17, 21);
        } else {
          
          this.subComponentesFiltrados;
        }
      })
      const idsUnicos = Array.from(new Set(this.produtosIDS.map(producto => producto.interview__id)));
      console.log('ProductosUnicos',idsUnicos);
      
      
    }

    funcionselectorb(event: any)  {
      const selectedValue = event.target.value;
      console.log(selectedValue);
  
      this._direServices.getMDEASSubCompByComp(selectedValue)
      .subscribe( data => {
        this.produtosIDS = data; console.log('ProductosSubComponente', data);
        if (selectedValue === '0') { 
          this.TopicosFiltrados;
        }else if (selectedValue === '1') { 
          this.TopicosFiltrados = this.topicoMDEA.slice(0, 4);
        } else if(selectedValue === '2'){
          this.TopicosFiltrados = this.topicoMDEA.slice(4, 7);
        } else if(selectedValue === '3'){
          this.TopicosFiltrados = this.topicoMDEA.slice(7, 12);
        } else if(selectedValue === '4'){
          this.TopicosFiltrados = this.topicoMDEA.slice(12, 14);
        } else if(selectedValue === '5'){
          this.TopicosFiltrados = this.topicoMDEA.slice(14, 16);
        } else if(selectedValue === '6'){
          this.TopicosFiltrados = this.topicoMDEA.slice(16, 18);
        } else if(selectedValue === '7'){
          this.TopicosFiltrados = this.topicoMDEA.slice(18, 19);
        } else if(selectedValue === '8'){
          this.TopicosFiltrados = this.topicoMDEA.slice(19, 24);
        } else if(selectedValue === '9'){
          this.TopicosFiltrados = this.topicoMDEA.slice(24, 26);
        } else if(selectedValue === '10'){
          this.TopicosFiltrados = this.topicoMDEA.slice(26, 29);
        } else if(selectedValue === '11'){
          this.TopicosFiltrados = this.topicoMDEA.slice(29, 32);
        } else if(selectedValue === '12'){
          this.TopicosFiltrados = this.topicoMDEA.slice(32, 34);
        } else if(selectedValue === '13'){
          this.TopicosFiltrados = this.topicoMDEA.slice(34, 35);
        } else if(selectedValue === '14'){
          this.TopicosFiltrados = this.topicoMDEA.slice(35, 37);
        } else if(selectedValue === '15'){
          this.TopicosFiltrados = this.topicoMDEA.slice(37, 39);
        } else if(selectedValue === '16'){
          this.TopicosFiltrados = this.topicoMDEA.slice(39, 44);
        } else if(selectedValue === '17'){
          this.TopicosFiltrados = this.topicoMDEA.slice(44, 49);
        } else if(selectedValue === '18'){
          this.TopicosFiltrados = this.topicoMDEA.slice(49, 51);
        } else if(selectedValue === '19'){
          this.TopicosFiltrados = this.topicoMDEA.slice(51, 54);
        } else if(selectedValue === '20'){
          this.TopicosFiltrados = this.topicoMDEA.slice(54, 56);
        } else if(selectedValue === '21'){
          this.TopicosFiltrados = this.topicoMDEA.slice(56, 60);
        } else {
          // Restablecer las opciones de selector2 a todas las disponibles
          this.TopicosFiltrados;
        }
      })
      const idsUnicos = Array.from(new Set(this.produtosIDS.map(producto => producto.interview__id)));
      console.log('ProductosUnicos',idsUnicos);
      
    }

    funcionselectorc(event: any)  {
      const selectedValue = event.target.value;
      console.log(selectedValue);
  
      this._direServices.getMDEASTopicoBySubcomp(selectedValue)
      .subscribe( data => {
        this.produtosIDS = data; console.log('ProductosTopico', data);
        
      })
      const idsUnicos = Array.from(new Set(this.produtosIDS.map(producto => producto.interview__id)));
      console.log('ProductosUnicos',idsUnicos);
    
    }


  ngAfterViewInit(): void {
    
    
    this._direServices.getComponentes()
    .subscribe( componentes => {this.componentesMDEA = componentes;console.log('componente',this.componentesMDEA);
    })

    this._direServices.getSubcomponentes()
    .subscribe( subcomponentes => {this.subComponentesMDEA = subcomponentes;console.log('subcomponente',this.subComponentesMDEA);
    })

    this._direServices.getTopicos()
    .subscribe( topicos => {this.topicoMDEA = topicos;console.log('topico',this.topicoMDEA);
    })

  }

 
 
  

  ngOnInit(): void {
   
    this._direServices.getProducts()
    .subscribe(data => this.products = data )

    this._direServices.getComponentes()
    .subscribe( componentes => this.componentesMDEA = componentes)

    this._direServices.getSubcomponentes()
    .subscribe( subcomponente => this.subComponentesMDEA = subcomponente)

    this._direServices.getTopicos()
    .subscribe( topicomdea => this.topicoMDEA = topicomdea)
  
    //Se definene los servicios para mandarlos a llamar y reflejarlos en la pagina
    this._leeLink.params
    .pipe(
      switchMap(({ id }) => this._direServices.getMDEASById(id))
    )
    .subscribe(data => {
      this.mdeas = data;
    });
    
    this._leeLink.params
    .pipe(
      switchMap(({ id }) => this._direServices.getMDEASCompByProduct(id))
    )
    .subscribe(data => {
      this.componentesMDEA = data;
    });

    this._leeLink.params
    .pipe(
      switchMap(({ id }) => this._direServices.getMDEASById(id))
    )
    .subscribe(data => {
      this.mdeas = data;
    });


   //Para leer las subdirecciones
   this._leeLink.params
   .pipe(
     switchMap(({ by }) =>{
       return this._direServices.getSecuenciaProductBy(by)
     } )
   )
   .subscribe( data => {
     this.productsById = data;
     this.applyFilters();
   })
  }


  //función que detecta los cambios en los checks box

  allFalse(): void {

        this.showFilteredProducts = false;

  this.ngOnInit();
}

  applyFilters(): void {
  this.showFilteredProducts = false; // Inicialmente, asumimos que no se muestran productos filtrados
  this.filteredProducts = this.productsById; // Establecemos los productos filtrados como todos los productos disponibles

  

  if (this.filteredProducts.length === 0) {
    this.noProductsFound = true;
  } else {
    this.noProductsFound = false;
  }
}



loadComponentesByID (){
  this._direServices.getComponentes().subscribe(data => {
    this.componentesMDEA = data;
    console.log(data)
  })
}

filterProductsByMdeaComponente(): void {
  if (this.componentesMDEA) {
    this.showFilteredProducts = true;
  this.filteredProducts = this.filteredProducts.filter(product => {
    const SeleccionComponente = parseInt(product.relacion_mdea.toString());
    return SeleccionComponente >= this.startComponente;
  });

  console.log(this.filteredProducts)
}
}


get obtnenerComponente(): Componente[]{
    return this._direServices.obtnenerComponente; //
  }
}





