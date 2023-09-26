import { MetaODS, SecuenciaOds, Ods } from './../../interfaces/ods.interface';
import { DGService } from './../../services/dg.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Products } from '../../interfaces/product.interface';

@Component({
  selector: 'app-ods-page',
  templateUrl: './ods-page.component.html',
  styleUrls: ['./ods-page.component.css']
})
export class OdsPageComponent implements OnInit{

  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Esto desplaza suavemente hacia arriba
  }
  
  expanded = false;
  public products: Products[] = [];
  public selectedOptionA: any;
  public selectedOptionB: any;
  public selectedOptionC: any;
  public ods: SecuenciaOds[]=[];
  public objetivods: Ods[]=[];
  public metaods: MetaODS[]=[];
  public productsById: Products[] = [];
  selectorBHabilitado: boolean = false;
  selectorCHabilitado: boolean = false;
  public produtosIDS: any[] = [];
  producto: any[] = [];
  componente: any[] = [];
  objetivosfiltrados: any[] = [];
  metasfiltradas: any[]=[];
  filteredProducts: Products[] = [];


  constructor(
    private fb: FormBuilder, 
    private _direServices: DGService
    ) 
    {}
 

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
    
    odsByProducts(){
    
      this.filteredProducts = this.products.filter(data => this.ods.some(ods => ods.interview__id === data.interview__id))
       console.log(this.filteredProducts)
  }
    

    SelectorODS(event: any)  {
      const id = event.target.value;
      console.log(id);
  
      this._direServices.getMetabyObjetivo(id)
      .subscribe( data => {
        this.metaods = data; console.log('Metas', data);

        
      })
      this._direServices.getODSObjetivo(id)
      .subscribe(data => {
        this.ods = data;
        this.odsByProducts()
      })
  
      
    }

    SelectorMetas(event: any)  {
      const id = event.target.value;
      console.log(id);

      this._direServices.getODSMeta(id)
      .subscribe(data => {
        this.ods = data;
        this.odsByProducts()
      })
  
      
    }

  


  isModalOpen = false;

    openModal() {
      this.isModalOpen = true;
    }
  
    closeModal() {
      this.isModalOpen = false;
    }



    
  ngOnInit(): void{
    this._direServices.getProducts().subscribe(producto => {
      this.products = producto;
      console.log(producto)
    });

    this._direServices.getObjetivos()
  .subscribe( objetivoOds => this.objetivods = objetivoOds)

  this._direServices.getMetas()
  .subscribe( metaOds => this.metaods = metaOds)

  this._direServices.getODSObj()
  .subscribe( data => this.ods = data)

  
  }
 

  

}
