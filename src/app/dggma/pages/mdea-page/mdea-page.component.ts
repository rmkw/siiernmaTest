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
  subcomponentes: Subcomponente[] =[];
  topicos: Topico[] = [];

  


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
  
    mdeasByComponente(){
        this.filteredProducts=this.products.filter(data => this.mdeas?.some(mdea => mdea.interview__id === data.interview__id))
         console.log(this.filteredProducts)
    }

    
  

    SelectorComponente(event: any)  {
      const id = event.target.value;
      console.log(id);
  
      this._direServices.getMDEASSubCompByComp(id)
      .subscribe( data => {
        this.subcomponentes = data; console.log('SubComponente', data);
        
      })

      this._direServices.getMDEASCompByProduct(id)
      .subscribe( data => {
        this.mdeas = data;
        this.mdeasByComponente()
      })
      
    }

    SelectorSubcomponente(event: any)  {
      const id = event.target.value;
      console.log(id);
  
      this._direServices.getMDEASTopicoBySubcomp(id)
      .subscribe( data => {
        this.topicos = data; console.log('Topico', data);
      })
      this._direServices.getMDEASSubCompByProduct(id)
      .subscribe( data => {
        this.mdeas = data;
        this.mdeasByComponente()
      })
    }


    SelectorTopico(event: any)  {
      const id = event.target.value;
      console.log(id);
  
      this._direServices.getMDEASTopico(id)
      .subscribe( data => {
        this.mdeas = data;
        this.mdeasByComponente()
      })
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
    
   


   //Para leer las subdirecciones
  }

  //función que detecta los cambios en los checks box

  allFalse(): void {

        this.showFilteredProducts = false;

  this.ngOnInit();
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


}





