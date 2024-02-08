import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlagService {
  constructor() {}

  flagServicesGeo: boolean = false;
  flagServicesEstadisticas: boolean = false;
  flagServiceEconomicas: boolean = false;
  flagServiceGobierno: boolean = false;
  flagServiceIntegracion: boolean = false;

  flagServiceComp1: boolean = false;
  flagServiceComp2: boolean = false;
  flagServiceComp3: boolean = false;
  flagServiceComp4: boolean = false;
  flagServiceComp5: boolean = false;
  flagServiceComp6: boolean = false;

  flagServiceSubComp1: boolean = false;
  flagServiceSubComp2: boolean = false;
  flagServiceSubComp3: boolean = false;
  flagServiceSubComp4: boolean = false;
  flagServiceSubComp5: boolean = false;
  flagServiceSubComp6: boolean = false;
  flagServiceSubComp7: boolean = false;
  flagServiceSubComp8: boolean = false;
  flagServiceSubComp9: boolean = false;
  flagServiceSubComp10: boolean = false;
  flagServiceSubComp11: boolean = false;
  flagServiceSubComp12: boolean = false;
  flagServiceSubComp13: boolean = false;
  flagServiceSubComp14: boolean = false;
  flagServiceSubComp15: boolean = false;
  flagServiceSubComp16: boolean = false;
  flagServiceSubComp17: boolean = false;
  flagServiceSubComp18: boolean = false;
  flagServiceSubComp19: boolean = false;
  flagServiceSubComp20: boolean = false;
  flagServiceSubComp21: boolean = false;


  arreglo: any[]=[]

  setFlagGeo(value: boolean): void {
    this.flagServicesGeo = value;
  }
  getFlagGeo(): boolean {
    return this.flagServicesGeo;
  }

  setFlagEstadisticas(value: boolean): void {
    this.flagServicesEstadisticas = value;
  }
  getFlagEstadisticas(): boolean {
    return this.flagServicesEstadisticas;
  }

  setFlagEconomicas(value: boolean): void {
    this.flagServiceEconomicas = value;
  }
  getFlagEconomicas(): boolean {
    return this.flagServiceEconomicas;
  }

  setFlagGobierno(value: boolean): void {
    this.flagServiceGobierno = value;
  }
  getFlagGobierno(): boolean {
    return this.flagServiceGobierno;
  }

  setFlagIntegracion(value: boolean): void {
    this.flagServiceIntegracion = value;
  }
  getFlagIntegracion(): boolean {
    return this.flagServiceIntegracion;
  }

  // TODO Servicios para obtener los productos por componente
  setFlagComp1(value: boolean): void {
    this.flagServiceComp1 = value;
  }
  getFlagComp1(): boolean {
    return this.flagServiceComp1;
  }

  setFlagComp2(value: boolean): void {
    this.flagServiceComp2 = value;
  }
  getFlagComp2(): boolean {
    return this.flagServiceComp2;
  }

  setFlagComp3(value: boolean): void {
    this.flagServiceComp3 = value;
  }
  getFlagComp3(): boolean {
    return this.flagServiceComp3;
  }

  setFlagComp4(value: boolean): void {
    this.flagServiceComp4 = value;
  }
  getFlagComp4(): boolean {
    return this.flagServiceComp4;
  }

  setFlagComp5(value: boolean): void {
    this.flagServiceComp5 = value;
  }
  getFlagComp5(): boolean {
    return this.flagServiceComp5;
  }

  setFlagComp6(value: boolean): void {
    this.flagServiceComp6 = value;
  }
  getFlagComp6(): boolean {
    return this.flagServiceComp6;
  }

//TODO Servicios para obtener los productos por subcomponente
 setFlagSubComp1(value: boolean): void {
    this.flagServiceSubComp1 = value;
  }
  getFlagSubComp1(): boolean {
    return this.flagServiceSubComp1;
  }
  setFlagSubComp2(value: boolean): void {
    this.flagServiceSubComp2 = value;
  }
  getFlagSubComp2(): boolean {
    return this.flagServiceSubComp2;
  }
  
  setFlagSubComp3(value: boolean): void {
    this.flagServiceSubComp3 = value;
  }
  getFlagSubComp3(): boolean {
    return this.flagServiceSubComp3;
  }
  
  setFlagSubComp4(value: boolean): void {
    this.flagServiceSubComp4 = value;
  }
  getFlagSubComp4(): boolean {
    return this.flagServiceSubComp4;
  }
  
  setFlagSubComp5(value: boolean): void {
    this.flagServiceSubComp5 = value;
  }
  getFlagSubComp5(): boolean {
    return this.flagServiceSubComp5;
  }
  
  setFlagSubComp6(value: boolean): void {
    this.flagServiceSubComp6 = value;
  }
  getFlagSubComp6(): boolean {
    return this.flagServiceSubComp6;
  }
  
  setFlagSubComp7(value: boolean): void {
    this.flagServiceSubComp7 = value;
  }
  getFlagSubComp7(): boolean {
    return this.flagServiceSubComp7;
  }
  
  setFlagSubComp8(value: boolean): void {
    this.flagServiceSubComp8 = value;
  }
  getFlagSubComp8(): boolean {
    return this.flagServiceSubComp8;
  }
  
  setFlagSubComp9(value: boolean): void {
    this.flagServiceSubComp9 = value;
  }
  getFlagSubComp9(): boolean {
    return this.flagServiceSubComp9;
  }
  
  setFlagSubComp10(value: boolean): void {
    this.flagServiceSubComp10 = value;
  }
  getFlagSubComp10(): boolean {
    return this.flagServiceSubComp10;
  }
  
  setFlagSubComp11(value: boolean): void {
    this.flagServiceSubComp11 = value;
  }
  getFlagSubComp11(): boolean {
    return this.flagServiceSubComp11;
  }
  
  setFlagSubComp12(value: boolean): void {
    this.flagServiceSubComp12 = value;
  }
  getFlagSubComp12(): boolean {
    return this.flagServiceSubComp12;
  }
  
  setFlagSubComp13(value: boolean): void {
    this.flagServiceSubComp13 = value;
  }
  getFlagSubComp13(): boolean {
    return this.flagServiceSubComp13;
  }
  
  setFlagSubComp14(value: boolean): void {
    this.flagServiceSubComp14 = value;
  }
  getFlagSubComp14(): boolean {
    return this.flagServiceSubComp14;
  }
  
  setFlagSubComp15(value: boolean): void {
    this.flagServiceSubComp15 = value;
  }
  getFlagSubComp15(): boolean {
    return this.flagServiceSubComp15;
  }
  
  setFlagSubComp16(value: boolean): void {
    this.flagServiceSubComp16 = value;
  }
  getFlagSubComp16(): boolean {
    return this.flagServiceSubComp16;
  }
  
  setFlagSubComp17(value: boolean): void {
    this.flagServiceSubComp17 = value;
  }
  getFlagSubComp17(): boolean {
    return this.flagServiceSubComp17;
  }
  
  setFlagSubComp18(value: boolean): void {
    this.flagServiceSubComp18 = value;
  }
  getFlagSubComp18(): boolean {
    return this.flagServiceSubComp18;
  }
  
  setFlagSubComp19(value: boolean): void {
    this.flagServiceSubComp19 = value;
  }
  getFlagSubComp19(): boolean {
    return this.flagServiceSubComp19;
  }
  
  setFlagSubComp20(value: boolean): void {
    this.flagServiceSubComp20 = value;
  }
  getFlagSubComp20(): boolean {
    return this.flagServiceSubComp20;
  }
  
  setFlagSubComp21(value: boolean): void {
    this.flagServiceSubComp21 = value;
  }
  getFlagSubComp21(): boolean {
    return this.flagServiceSubComp21;
  } 
  
}
