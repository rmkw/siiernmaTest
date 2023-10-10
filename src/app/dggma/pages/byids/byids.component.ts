import { Products } from './../../interfaces/product.interface';
import { Componente, Mdea, Subcomponente, Topico } from '../../interfaces/mdea.interface';
import { Component, OnInit } from '@angular/core';
import { DGService } from '../../services/dg.service';
import { TreeNode } from 'primeng/api';



@Component({
  selector: 'app-byids',
  templateUrl: './byids.component.html',
  styleUrls: ['./byids.component.css']
})

export class ByidsComponent implements OnInit{
  
    
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
  
    constructor(
      private _direServices: DGService,
      
    ){} 
  
  
    filterProductsByMdeas(): void {
      this.filteredProducts = this.products.filter(data => this.mdeas.some(mdeas => mdeas.interview__id === data.interview__id));
      console.log(this.filteredProducts);
    }
  
    onNodeSelectMdea(event: { originalEvent: Event, node: TreeNode }, nodeType: string): void {
          const id = event.node.data.id; // Obtén el id del nodo seleccionado
        
          switch (nodeType) {
            case 'componente':
              this._direServices.mdeaByComponenteId(id).subscribe(data => {
                this.mdeas = data;
                
                this.filterProductsByMdeas();
                console.log(id); 
              });
              break;
            case 'subcomponente':
              this._direServices.mdeaBySubcomponenteId(id).subscribe(data => {
                this.mdeas = data;
                this.filterProductsByMdeas();
                console.log(id);
              });
              break;
            case 'topico':
              this._direServices.mdeaByTopicoId(id).subscribe(data => {
                this.mdeas = data;
                this.filterProductsByMdeas();
                console.log(id);
              });
              break;
          }
        }
  
      onNodeUnselectMdea(event: { originalEvent: Event, node: TreeNode }, nodeType: string): void {
        const id = event.node.data.id; 
        this.filteredProducts = [];
  
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
                selected: false
              }));
            return {
              key: `subcomponente_${subcomponente.id}`,
              label: subcomponente.text,
              data: subcomponente,
              children: topicoNodes,
              selected: false
            };
          });
        return {
          key: `componente_${componente.id}`,
          label: componente.text,
          data: componente,
          children: subcomponenteNodes,
          selected: false
        };
      });
  }
  }
  
  