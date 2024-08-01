import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OdsFilterService {
  constructor() {}

  bool_meta1o1: boolean = false;


  arreglo: any[] = [];

  setMeta1o1(value: boolean): void {
    this.bool_meta1o1 = value;
  }
  getMeta1o1(): boolean {
    return this.bool_meta1o1;
  }

}
