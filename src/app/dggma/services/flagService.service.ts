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
}
