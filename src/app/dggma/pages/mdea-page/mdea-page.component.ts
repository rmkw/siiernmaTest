import { Componente, Mdea, Subcomponente, Topico } from '../../interfaces/mdea.interface';
import { DGService } from '../../services/dg.service';
import { Component, OnInit } from '@angular/core';
import {  Products } from '../../interfaces/product.interface';



@Component({
  selector: 'app-mdea-page',
  templateUrl: './mdea-page.component.html',
  styleUrls: ['./mdea-page.component.css']
})

export class MdeaPageComponent  implements OnInit{




  public products: Products[] = [];
  public componentesMDEA: Componente[]=[];
  public SubcomponentesPorComponente: Mdea[]=[];
  public subComponentesMDEA: Subcomponente[]=[];
  public topicoMDEA: Topico[]=[];
  public mdeas?: Mdea[]=[];
  subcomponentes: Subcomponente[] =[];
  topicos: Topico[] = [];

  filteredProducts: Products[] = [];
  showFilteredProducts = false;
  noProductsFound: boolean = false;
  CompMdeaimg: boolean = false;


  constructor(
    private _direServices: DGService,
  ){}



    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    mdeasByComponente(){
        this.filteredProducts=this.products.filter(data => this.mdeas?.some(mdea => mdea.interview__id === data.interview__id))
         console.log(this.filteredProducts)

         if (this.filteredProducts.length === 0) {
          this.noProductsFound = true;
        } else {
          this.noProductsFound = false;
        }
    }

    SelectorComponente(event: any)  {
      const id = event.target.value;
      this._direServices.subcomponenteByParentid(id)
      .subscribe( data => {
        this.subcomponentes = data;

        if (id >= 1) {
          this.CompMdeaimg = true;
        }

      })

      this._direServices.mdeaByComponenteId(id)
      .subscribe( data => {
        this.mdeas = data;
        this.mdeasByComponente()
      })

    }

    SelectorSubcomponente(event: any)  {
      const id = event.target.value;
      console.log(id);

      this._direServices.topicoByParentid(id)
      .subscribe( data => {
        this.topicos = data; console.log('Topico', data);



      })
      this._direServices.mdeaBySubcomponenteId(id)
      .subscribe( data => {
        this.mdeas = data;
        this.mdeasByComponente()
      })
    }



    SelectorTopico(event: any)  {
      const id = event.target.value;
      console.log(id);

      this._direServices.mdeaByTopicoId(id)
      .subscribe( data => {
        this.mdeas = data;
        this.mdeasByComponente()
      })


    }




  ngOnInit(): void {

    this._direServices.productos()
    .subscribe(data => this.products = data )

    this._direServices.componentes()
    .subscribe( componentes => this.componentesMDEA = componentes)

    this._direServices.subcomponentes()
    .subscribe( subcomponente => this.subComponentesMDEA = subcomponente)

    this._direServices.topicos()
    .subscribe( topicomdea => this.topicoMDEA = topicomdea)


  }

  allFalse(): void {

        this.showFilteredProducts = false;

  this.ngOnInit();
}

}
