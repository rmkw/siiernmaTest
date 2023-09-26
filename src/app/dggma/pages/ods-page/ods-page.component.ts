import { MetaODS, SecuenciaOds, Ods } from './../../interfaces/ods.interface';
import { DGService } from './../../services/dg.service';
import { DggmaRoutingModule } from './../../dggma-routing.module';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Products } from '../../interfaces/product.interface';

@Component({
  selector: 'app-ods-page',
  templateUrl: './ods-page.component.html',
  styleUrls: ['./ods-page.component.css']
})
export class OdsPageComponent implements OnInit, AfterViewInit{

  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Esto desplaza suavemente hacia arriba
  }
  
  expanded = false;
  filterForm!: FormGroup;
  public products: Products[] = [];
  public selectedOptionA: any;
  public selectedOptionB: any;
  public selectedOptionC: any;
  public ods?: SecuenciaOds[]=[];
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
    

    funcionselectora(event: any)  {
      const selectedValue = event.target.value;
      console.log(selectedValue);
  
      this._direServices.getODSbyObjetivo(selectedValue)
      .subscribe( data => {
        this.produtosIDS = data; console.log('ProductosODS', data);

        if (selectedValue === '0') { 
          this.metasfiltradas;
        }else if (selectedValue === '1') { 
          this.metasfiltradas = this.metaods.slice(0, 7);
        } else if(selectedValue === '2'){
          this.metasfiltradas = this.metaods.slice(7, 15);
        } else if(selectedValue === '3'){
          this.metasfiltradas = this.metaods.slice(15, 28);
        } else if(selectedValue === '4'){
          this.metasfiltradas = this.metaods.slice(28, 38);
        } else if(selectedValue === '5'){
          this.metasfiltradas = this.metaods.slice(38, 47);
        } else if(selectedValue === '6'){
          this.metasfiltradas = this.metaods.slice(47, 55);
        } else if(selectedValue === '7'){
          this.metasfiltradas = this.metaods.slice(55, 60);
        } else if(selectedValue === '8'){
          this.metasfiltradas = this.metaods.slice(60, 72);
        } else if(selectedValue === '9'){
          this.metasfiltradas = this.metaods.slice(72, 80);
        } else if(selectedValue === '10'){
          this.metasfiltradas = this.metaods.slice(80, 90);
        } else if(selectedValue === '11'){
          this.metasfiltradas = this.metaods.slice(90, 100);
        } else if(selectedValue === '12'){
          this.metasfiltradas = this.metaods.slice(100, 111);
        } else if(selectedValue === '13'){
          this.metasfiltradas = this.metaods.slice(111, 116);
        } else if(selectedValue === '14'){
          this.metasfiltradas = this.metaods.slice(116, 126);
        } else if(selectedValue === '15'){
          this.metasfiltradas = this.metaods.slice(126, 138);
        } else if(selectedValue === '16'){
          this.metasfiltradas = this.metaods.slice(138, 150);
        } else if(selectedValue === '17'){
          this.metasfiltradas = this.metaods.slice(150, 169);
        } else {
          // Restablecer las opciones de selector2 a todas las disponibles
          this.objetivosfiltrados;
        }
      })
      const idsUnicos = Array.from(new Set(this.produtosIDS.map(producto => producto.interview__id)));
      console.log('ProductosUnicos',idsUnicos);
      
      
    }

    funcionselectorb(event: any)  {
      const selectedValue = event.target.value;
      console.log(selectedValue);
  
      this._direServices.getMetabyObjetivo(selectedValue)
      .subscribe( data => {
        this.produtosIDS = data; console.log('ProductosMetaODS', data);
    
      })
      const idsUnicos = Array.from(new Set(this.produtosIDS.map(producto => producto.interview__id)));
      console.log('ProductosUnicos',idsUnicos);
      
    }


  isModalOpen = false;

    openModal() {
      this.isModalOpen = true;
    }
  
    closeModal() {
      this.isModalOpen = false;
    }


  ngAfterViewInit(): void {
    this._direServices.getObjetivos()
    .subscribe( objetivoOds => this.objetivods = objetivoOds)
  
    this._direServices.getMetas()
    .subscribe( metaOds => this.metaods = metaOds)
  }

    
  ngOnInit(): void{

    this._direServices.getObjetivos()
  .subscribe( objetivoOds => this.objetivods = objetivoOds)

  this._direServices.getMetas()
  .subscribe( metaOds => this.metaods = metaOds)

    this.filterForm = this.fb.group({
      category: [''] // Agrega los campos de filtro que necesites
    });

    this.loadProducts();
  }
  loadProducts() {
    this._direServices.getProducts().subscribe(producto => {
      this.products = producto;
      console.log(producto)
    });
  }

  

}
