import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, tap } from 'rxjs';
import { environments } from 'src/app/environments/environments';
import { Escalas, Products, SecuenciaVar } from "../interfaces/product.interface";
import { Componente, Mdea, Subcomponente, Topico } from '../interfaces/mdea.interface';
import { UAdmin } from '../interfaces/u_admin.interface';
import { DgaPprod, Pi, ProcProduccion, ProgInformacion } from '../interfaces/pi.interface';
import { Aeg2, DgaProd, SecuenciaAeg } from '../interfaces/aeg.interface';
import { MetaODS, Ods, SecuenciaOds } from '../interfaces/ods.interface';
import { IndicadoresPS2023, PS2023, SecuenciaPS } from '../interfaces/ps.interface';

@Injectable({providedIn: 'root'})
export class DGService {

 
  private baseUrl: string = environments.baseUrl;

  constructor(private _http: HttpClient) { }

   

  getDG(){
    return this._http.get<UAdmin[]>(`${ this.baseUrl}/u_admin`)
  }

  getProducts(){
    return this._http.get<Products[]>(`${ this.baseUrl}/products`)
  }

  
  getMdea(){
    return this._http.get<Mdea[]>(`${ this.baseUrl}/mdea`)
  }

  getComponentes(){
    return this._http.get<Componente[]>(`${ this.baseUrl}/componentes`)
  }

  getSubcomponentes(){
    return this._http.get<Subcomponente[]>(`${ this.baseUrl}/subcomponentes`)
  }
  getTopicos(){
    return this._http.get<Topico[]>(`${ this.baseUrl}/topicos`)
  }



//Servicios para mandar a llamar los ID necesarios para el MDEA
  getMDEASById( id: string ): Observable<Mdea[]> {
   const url = `${ this.baseUrl}/mdea?interview__id=${ id }`; 
    console.log(url);
    console.log(id)
    return this._http.get<Mdea[]>(url)
    .pipe(
      tap(data => console.log(data))
    );
  } 

// Con este servicio traeremos el id de los componentes que se relacionara con el producto servicios MDEA
  getMDEASCompByProduct( id: number ): Observable<Mdea[]> {
    const url = `${ this.baseUrl}/mdea?comp_mdea=${ id }`; 
     console.log(url);
     return this._http.get<Mdea[]>(url)
     
   } 


   getMDEASSubCompByProduct( id: number ): Observable<Mdea[]> {
    const url = `${ this.baseUrl}/mdea?subcomp_mdea=${ id }`; 
     console.log(url);
     return this._http.get<Mdea[]>(url)
     .pipe(
      tap(data => data)
     );
   } 


   getMDEASTopico( id: number ): Observable<Mdea[]> {
    const url = `${ this.baseUrl}/mdea?topico_mdea=${ id }`; 
     console.log(url);
     return this._http.get<Mdea[]>(url)
     .pipe(
      tap(data => data)
     );
   } 

// 
   getMDEASSubCompByComp( idsubcomponente: number ): Observable<Subcomponente[]> {
    const url = `${ this.baseUrl}/subcomponentes?parentid=${ idsubcomponente }`; 
     console.log(url);
     return this._http.get<Subcomponente[]>(url)
     .pipe(
       tap(data => data)
     );
   } 

   getMDEASTopicoBySubcomp( idtopico: number ): Observable<Topico[]> {
    const url = `${ this.baseUrl}/topicos?parentid=${ idtopico }`; 
     console.log(url);
     console.log(idtopico)
     return this._http.get<Topico[]>(url)
     .pipe(
       tap(data => data)
     );
   } 
// <-- Fin MDEA -->


//Servicio para mandar a llamar los id que se van a ocupar en otros servicios. 
  getPIById( id: string ): Observable<Pi[]> {
    const url = `${ this.baseUrl}/pi?interview__id=${ id }`;
    console.log(url);
    console.log(id)
   return this._http.get<Pi[]>(url)
    .pipe(
      tap(data => console.log(data))
    );
  }
  getAEGById( id: string ): Observable<SecuenciaAeg[]> {
    const url = `${ this.baseUrl}/secuencia_aeg?interview__id=${ id }`;
    console.log(url);
    console.log(id)
   return this._http.get<SecuenciaAeg[]>(url)
    .pipe(
      tap(data => console.log(data))
    );
  }

// Servicios para filtrar por ODS <--inicio-->

  getODSById( id: string ): Observable<SecuenciaOds[]> {
    const url = `${ this.baseUrl}/secuencia_ods?interview__id=${ id }`;
    console.log(url);
    console.log(id)
    return this._http.get<SecuenciaOds[]>(url)
    .pipe(
      tap(data => console.log(data))
    );
  }

  getODSObjetivo( id: string ): Observable<SecuenciaOds[]> {
    const url = `${ this.baseUrl}/secuencia_ods?obj_ods=${ id }`;
    console.log(url);
    console.log(id)
    return this._http.get<SecuenciaOds[]>(url)
    .pipe(
      tap(data => console.log(data))
    );
  }
 

  getODSMeta( id: string ): Observable<SecuenciaOds[]> {
    const url = `${ this.baseUrl}/secuencia_ods?meta_ods=${ id }`;
    console.log(url);
    console.log(id)
    return this._http.get<SecuenciaOds[]>(url)
    .pipe(
      tap(data => console.log(data))
    );
  }


  getODSbyObjetivo( idobjetivo: number ): Observable<Ods[]> {
    const url = `${ this.baseUrl}/ods?id=${ idobjetivo }`; 
     console.log(url);
     return this._http.get<Ods[]>(url)
     .pipe(
      tap(data => data)
     );
   } 

   getMetabyObjetivo( id: number ): Observable<MetaODS[]> {
    const url = `${ this.baseUrl}/metaods?parentid=${ id }`; 
     console.log(url);
     return this._http.get<MetaODS[]>(url)
     .pipe(
      tap(data => data)
     );
   } 

   getODSObj(  ): Observable<SecuenciaOds[]> {
    const url = `${ this.baseUrl}/secuencia_ods`;
    console.log(url);
    
    return this._http.get<SecuenciaOds[]>(url)
    .pipe(
      tap(data => console.log(data))
    );
  }

  // <--FIN ODS-->


  getSecuenciaPSBy( id: string ): Observable<SecuenciaPS[]> {
    const url = `${ this.baseUrl}/secuencia_ps?interview__id=${ id }`;
    console.log(url);
    console.log(id)
    return this._http.get<SecuenciaPS[]>(url)
    .pipe(
      tap(data => console.log('DATA by Service',data))
    );
  }

  getSecuenciaVARBy( id: string ): Observable<SecuenciaVar[]> {
    const url = `${ this.baseUrl}/secuencia_var?interview__id=${ id }`;
    console.log(url);
    console.log(id)
    return this._http.get<SecuenciaVar[]>(url)
    .pipe(
      tap(data => console.log('DATA by Service',data))
    );
  }

  getSecuenciaProductBy( id: string ): Observable<Products[]> {
    const url = `${ this.baseUrl}/products?dg_prod=${ id }`;
    console.log(url);
    console.log(id)
    return this._http.get<Products[]>(url)
    .pipe(
      tap(data => console.log('DATA by Service',data))
    );
  }

  getProductCountByDirection(id: string): Observable<number> {

    const url = `${this.baseUrl}/products?dg_prod=${id}`;
    return this._http.get<Products[]>(url)
      .pipe(
        map(products => products.length),

      );
  }
//Desde Aqui se añaden las funciones para mandar a llamar el servicio y obtener las fechas. 
  getProductArrayDateREFERENCIA(id: string): Observable<string[]> {
  const url = `${this.baseUrl}/products?dg_prod=${id}`;
  return this._http.get<Products[]>(url)
    .pipe(
      map(products => products.map(product => product.a_referencia.toString())),
    );
  }
  getProductArrayDateREFERENCIAhasta(id: string): Observable<string[]> {
  const url = `${this.baseUrl}/products?dg_prod=${id}`;
  return this._http.get<Products[]>(url)
    .pipe(
      map(products => products.map(product => (product.a_referencia2 !== undefined) ? product.a_referencia2.toString() : '')),
    );
  }

  getProductArrayDatePUBLICACION(id: string): Observable<string[]> {
  const url = `${this.baseUrl}/products?dg_prod=${id}`;
  return this._http.get<Products[]>(url)
    .pipe(
      map(products => products.map(product => product.a_publicacion.toString())),
    );
  }
  getProductArrayDatePUBLICACIONhasta(id: string): Observable<string[]> {
  const url = `${this.baseUrl}/products?dg_prod=${id}`;
  return this._http.get<Products[]>(url)
    .pipe(
      map(products => products.map(product => (product.a_publicacion2 !== undefined) ? product.a_publicacion2.toString() : '')),
    );
  }

  //Aqui creaeremos los arreglos para que estos puedan traer el id del mdea que se obtiene desde el producto y obtener la secuencia

  getProductArrayMDEA(id: string): Observable<string[]> {
    const url = `${this.baseUrl}/products?relacion_mdea=${id}`;
    return this._http.get<Products[]>(url)
      .pipe(
        map(products => products.map(product => product.relacion_mdea.toString())),
      );
    }

    getProductArray(id: string): Observable<string[]> {
      const url = `${this.baseUrl}/products?dg_prod=${id}`;
      return this._http.get<Products[]>(url)
        .pipe(
          map(products => products.map(product => (product.num_mdea !== undefined) ? product.num_mdea.toString() : '')),
        );
      }
    

    // Aqui filtramos por productos

  getProductById( id: string ): Observable<Products[]> {
    const url = `${ this.baseUrl}/products?interview__id=${ id }`;
    console.log(url);
    console.log(id)
    return this._http.get<Products[]>(url)
    .pipe(
      tap(data => console.log('DATA by Service',data))
    );
  }



  getProdInfo(){
    return this._http.get<ProgInformacion[]>(`${ this.baseUrl}/prog_informacion`)
  }
  getProcProduccion(){
    return this._http.get<ProcProduccion[]>(`${ this.baseUrl}/proc_produccion`)
  }
  getDgaPprod(){
    return this._http.get<DgaPprod[]>(`${ this.baseUrl}/dga_pprod`)
  }

  getAEG_2(){
    return this._http.get<Aeg2[]>(`${ this.baseUrl}/aeg_2`)
  }
  getAEG_prod(){
    return this._http.get<DgaProd[]>(`${ this.baseUrl}/dga_prod`)
  }


  getObjetivos(){
    return this._http.get<Ods[]>(`${ this.baseUrl}/ods`)
  }
  getMetas(){
    return this._http.get<MetaODS[]>(`${ this.baseUrl}/metaODS`)
  }

  getPS2023(){
    return this._http.get<PS2023[]>(`${ this.baseUrl}/PS_2023`)
  }
  getIndicadoresPS2023(){
    return this._http.get<IndicadoresPS2023[]>(`${ this.baseUrl}/indicadores_PS_2023`)
  }

  getEscalas(){
    return this._http.get<Escalas[]>(`${ this.baseUrl}/escalas`)
  }

  getSuggestions( query: string ) : Observable<Products[]> {
    if (query.trim() === '') {
    return of([]); // Emitir un arreglo vacío si el término de búsqueda está vacío
  }
    return this._http.get<Products[]>(`${ this.baseUrl }/products?q=${ query }`)
  }


}
