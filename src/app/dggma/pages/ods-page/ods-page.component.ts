import { MetaODS, SecuenciaOds, Ods } from './../../interfaces/ods.interface';
import { DGService } from './../../services/dg.service';
import { Component, OnInit } from '@angular/core';
import { Products } from '../../interfaces/product.interface';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-ods-page',
  templateUrl: './ods-page.component.html',
  styleUrls: ['./ods-page.component.css']
})
export class OdsPageComponent implements OnInit{

  treeDataOds: TreeNode[] = [];
  selectedNodesOds: any;
  public products: Products[] = [];
  public ODSes: SecuenciaOds[]=[];
  public objetivODS: Ods[]=[];
  public metasODS: MetaODS[]=[];
  objetivo: Ods[] = [];
  meta: MetaODS []= [];

  filteredProducts: Products[] = [];

  constructor(
    private _direServices: DGService
    )
    {}


    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }


  odsByProducts(){

      this.filteredProducts = this.products.filter(data => this.ODSes.some(ODSes => ODSes.interview__id === data.interview__id))
       console.log(this.filteredProducts)
   }


  //  Función para mandar a llamar el filtrado y seleccion de los checkboxes dentro del HTML

  onNodeSelectOds(event: { originalEvent: Event, node: TreeNode }, nodeType: string): void {
    const id = event.node.data.id; // Obtén el id del nodo seleccionado
  
    switch (nodeType) {
      case 'objetivo':
        this._direServices.odsByObjetivo(id).subscribe(data => {
          this.ODSes = data;
          this.odsByProducts()
          console.log(id); 
        });
        break;
      case 'meta':
        this._direServices.odsByMeta(id).subscribe(data => {
          this.ODSes = data;
          this.odsByProducts()
          console.log(id);
        });
        break;
    }
  }

  onNodeUnselectOds(event: { originalEvent: Event, node: TreeNode }, nodeType: string): void {
    const id = event.node.data.id; 
    this.filteredProducts = [];

  }


  ngOnInit(): void{


  this._direServices.objetivos().subscribe(objetivoOds => {
    this._direServices.metas().subscribe(metasODS =>  {
        this.treeDataOds = this.transformDataToTreeNodeOds(objetivoOds, metasODS);
      });
    });
    

  this._direServices.productos()
  .subscribe(data => this.products = data )

  }

  transformDataToTreeNodeOds(objetivoOds: Ods[], metaOds: MetaODS[]): TreeNode[] {
    return objetivoOds.map(objetivo => {
      const objetivosNodes: TreeNode[] = metaOds
        .filter(metas => metas.parentid === objetivo.id)
        .map(metas => {
          return {
            key: `metas_${metas.id}`,
            label: metas.text,
            data: metas,
            selected: false
          };
        });
      return {
        key: `objetivos_${objetivo.id}`,
        label: objetivo.text.slice(3, 50),
        data: objetivo,
        children: objetivosNodes,
        selected: false
      };
    });
 } 

}
