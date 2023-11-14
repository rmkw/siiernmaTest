import { Products } from './../../interfaces/product.interface';
import { Componente, Mdea, Subcomponente, Topico } from '../../interfaces/mdea.interface';
import { Component, OnInit } from '@angular/core';
import { DGService } from '../../services/dg.service';
import { TreeNode } from 'primeng/api';


@Component({
  selector: 'app-mdea-page',
  templateUrl: './mdea-page.component.html',
  styleUrls: ['./mdea-page.component.css']
})

export class MdeaPageComponent  implements OnInit{

    treeDataMdea: TreeNode[] = [];
    selectedNodesMdea: any;

    public products: Products[] = [];
    public componentesMDEA: Componente[]=[];
    public subComponentesMDEA: Subcomponente[]=[];
    public topicoMDEA: Topico[]=[];
    public mdeas: Mdea[]=[] ;

    subcomponentes: Subcomponente[] =[];
    topicos: Topico[] = [];

    filteredProducts: Products[] = [];
    combinedResultsMdea: Mdea[]=[] ;



    constructor(
      private _direServices: DGService,

    ){this.combinedResultsMdea = [];}


    filterProductsBy(): void {
      this.filteredProducts = this.products.filter(data => this.combinedResultsMdea.some(mdeas => mdeas.interview__id === data.interview__id));
      console.log(this.filteredProducts);
    }




  selectComponente(event: { originalEvent: Event, node: TreeNode }): void {
    const key = event.node.key;
    if (key) {
      const keyParts = key.split('_');
      const tipo = keyParts[0];
      const id = keyParts[1];
      let componentResults: Mdea[] = [];
      if (tipo === 'componente') {
        componentResults = this.mdeas.filter((mdeas) => mdeas.comp_mdea === +id);
      } else if (tipo === 'subcomponente') {
        componentResults = this.mdeas.filter((mdeas) => mdeas.subcomp_mdea === +id);
      } else if (tipo === 'topico') {
        componentResults = this.mdeas.filter((mdeas) => mdeas.topico_mdea === +id);
      }
      this.combinedResultsMdea = this.combinedResultsMdea.concat(componentResults);
      this.filterProductsBy()
    }
  }






  UnSelectComponente(event: { originalEvent: Event, node: TreeNode }): void {
    const key = event.node.key;
    if (key) {
      const keyParts = key.split('_');
      const tipo = keyParts[0];
      const id = keyParts[1];
      if (!this.combinedResultsMdea) {
        this.combinedResultsMdea = [];
      }
      this.combinedResultsMdea = this.combinedResultsMdea.filter((mdea: any) => {
        if (tipo === 'componente') {
          return mdea.comp_mdea !== +id;
        } else if (tipo === 'subcomponente') {
          return mdea.subcomp_mdea !== +id;
        } else if (tipo === 'topico') {
          return mdea.topico_mdea !== +id;
        }
        return true;
      });
      console.log(this.combinedResultsMdea)
      console.log(this.filteredProducts);
      this.filterProductsBy()
  }
}





    ngOnInit(): void {

      // Funcion que manda a llamar el servicio y los datos de este para que se pueda combinar con la transformaciión de datos a la estructura de treenode
      this._direServices.componentes().subscribe(componentes => {
        this._direServices.subcomponentes().subscribe(subcomponentes => {
          this._direServices.topicos().subscribe(topicos => {
            this.treeDataMdea = this.transformDataToTreeNodeMdea(componentes, subcomponentes, topicos);
          });
        });
      });


      this._direServices.productos()
      .subscribe(data => this.products = data )

      this._direServices.mdea()
      .subscribe(data => this.mdeas = data)

    }

    //Funcion que ayuda a transformar los arreglos de objetos de componentes, subcomponentes y topicos para que este pueda ser compatible con la estructura treenode
    transformDataToTreeNodeMdea(componentes: Componente[], subcomponentes: Subcomponente[], topicos: Topico[]): TreeNode[] {

      return componentes.map(componente => {
        const subcomponenteNodes: TreeNode[] = subcomponentes
          .filter(subcomponente => subcomponente.parentid === componente.id)
          .map(subcomponente => {
            const topicoNodes: TreeNode[] = topicos
              .filter(topico => topico.parentid === subcomponente.id)
              .map(topico => ({
                key: `topico_${topico.id}`,
                label: topico.text,
                data: topico,

              }));
            return {
              key: `subcomponente_${subcomponente.id}`,
              label: subcomponente.text,
              data: subcomponente,
              children: topicoNodes,

            };
          });
        return {
          key: `componente_${componente.id}`,
          label: componente.text,
          data: componente,
          children: subcomponenteNodes,

        };
      });
  }
}
