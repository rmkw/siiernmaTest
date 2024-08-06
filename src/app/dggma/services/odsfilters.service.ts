import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OdsFilterService {
  constructor() {}

  bool_meta1_1: boolean = false;
  bool_meta1_3: boolean = false;
  bool_meta1_4: boolean = false;
  bool_meta1_5: boolean = false;

  bool_meta2_1: boolean = false;
  bool_meta2_3: boolean = false;
  bool_meta2_4: boolean = false;
  bool_meta2_a: boolean = false;
  bool_meta2_c: boolean = false;

  bool_meta3_4: boolean = false;
  bool_meta3_7: boolean = false;
  bool_meta3_8: boolean = false;
  bool_meta3_9: boolean = false;

  bool_meta4_1: boolean = false;
  bool_meta4_2: boolean = false;
  bool_meta4_3: boolean = false;
  bool_meta4_5: boolean = false;
  bool_meta4_7: boolean = false;

  bool_meta5_1: boolean = false;
  bool_meta5_2: boolean = false;
  bool_meta5_4: boolean = false;
  bool_meta5_5: boolean = false;
  bool_meta5_a: boolean = false;

  bool_meta6_1: boolean = false;
  bool_meta6_2: boolean = false;
  bool_meta6_3: boolean = false;
  bool_meta6_4: boolean = false;
  bool_meta6_5: boolean = false;
  bool_meta6_6: boolean = false;
  bool_meta6_b: boolean = false;

  setMeta1_1(value: boolean): void {
    this.bool_meta1_1 = value;
  }
  getMeta1_1(): boolean {
    return this.bool_meta1_1;
  }

  setMeta1_3(value: boolean): void {
    this.bool_meta1_3 = value;
  }
  getMeta1_3(): boolean {
    return this.bool_meta1_3;
  }

  setMeta1_4(value: boolean): void {
    this.bool_meta1_4 = value;
  }
  getMeta1_4(): boolean {
    return this.bool_meta1_4;
  }

  setMeta1_5(value: boolean): void {
    this.bool_meta1_5 = value;
  }
  getMeta1_5(): boolean {
    return this.bool_meta1_5;
  }
  //! meta 2
  setMeta2_1(value: boolean): void {
    this.bool_meta2_1 = value;
  }
  getMeta2_1(): boolean {
    return this.bool_meta2_1;
  }
  setMeta2_3(value: boolean): void {
    this.bool_meta2_3 = value;
  }
  getMeta2_3(): boolean {
    return this.bool_meta2_3;
  }
  setMeta2_4(value: boolean): void {
    this.bool_meta2_4 = value;
  }
  getMeta2_4(): boolean {
    return this.bool_meta2_4;
  }
  setMeta2_a(value: boolean): void {
    this.bool_meta2_a = value;
  }
  getMeta2_a(): boolean {
    return this.bool_meta2_a;
  }
  setMeta2_c(value: boolean): void {
    this.bool_meta2_c = value;
  }
  getMeta2_c(): boolean {
    return this.bool_meta2_c;
  }
  //! metas 3
  setMeta3_4(value: boolean): void {
    this.bool_meta3_4 = value;
  }
  getMeta3_4(): boolean {
    return this.bool_meta3_4;
  }
  setMeta3_7(value: boolean): void {
    this.bool_meta3_7 = value;
  }
  getMeta3_7(): boolean {
    return this.bool_meta3_7;
  }
  setMeta3_8(value: boolean): void {
    this.bool_meta3_8 = value;
  }
  getMeta3_8(): boolean {
    return this.bool_meta3_8;
  }
  setMeta3_9(value: boolean): void {
    this.bool_meta3_9 = value;
  }
  getMeta3_9(): boolean {
    return this.bool_meta3_9;
  }
  //! metas4
  setMeta4_1(value: boolean): void {
    this.bool_meta4_1 = value;
  }
  getMeta4_1(): boolean {
    return this.bool_meta4_1;
  }
  setMeta4_2(value: boolean): void {
    this.bool_meta4_2 = value;
  }
  getMeta4_2(): boolean {
    return this.bool_meta4_2;
  }
  setMeta4_3(value: boolean): void {
    this.bool_meta4_3 = value;
  }
  getMeta4_3(): boolean {
    return this.bool_meta4_3;
  }
  setMeta4_5(value: boolean): void {
    this.bool_meta4_5 = value;
  }
  getMeta4_5(): boolean {
    return this.bool_meta4_5;
  }
  setMeta4_7(value: boolean): void {
    this.bool_meta4_7 = value;
  }
  getMeta4_7(): boolean {
    return this.bool_meta4_7;
  }
  //! metas5
  setMeta5_1(value: boolean): void {
    this.bool_meta5_1 = value;
  }
  getMeta5_1(): boolean {
    return this.bool_meta5_1;
  }
  setMeta5_2(value: boolean): void {
    this.bool_meta5_2 = value;
  }
  getMeta5_2(): boolean {
    return this.bool_meta5_2;
  }
  setMeta5_4(value: boolean): void {
    this.bool_meta5_4 = value;
  }
  getMeta5_4(): boolean {
    return this.bool_meta5_4;
  }
  setMeta5_5(value: boolean): void {
    this.bool_meta5_5 = value;
  }
  getMeta5_5(): boolean {
    return this.bool_meta5_5;
  }
  setMeta5_a(value: boolean): void {
    this.bool_meta5_a = value;
  }
  getMeta5_a(): boolean {
    return this.bool_meta5_a;
  }
  //! metas6
  setMeta6_1(value: boolean): void {
    this.bool_meta6_1 = value;
  }
  getMeta6_1(): boolean {
    return this.bool_meta6_1;
  }
  setMeta6_2(value: boolean): void {
    this.bool_meta6_2 = value;
  }
  getMeta6_2(): boolean {
    return this.bool_meta6_2;
  }
  setMeta6_3(value: boolean): void {
    this.bool_meta6_3 = value;
  }
  getMeta6_3(): boolean {
    return this.bool_meta6_3;
  }
  setMeta6_4(value: boolean): void {
    this.bool_meta6_4 = value;
  }
  getMeta6_4(): boolean {
    return this.bool_meta6_4;
  }
  setMeta6_5(value: boolean): void {
    this.bool_meta6_5 = value;
  }
  getMeta6_5(): boolean {
    return this.bool_meta6_5;
  }
  setMeta6_6(value: boolean): void {
    this.bool_meta6_6 = value;
  }
  getMeta6_6(): boolean {
    return this.bool_meta6_6;
  }
  setMeta6_b(value: boolean): void {
    this.bool_meta6_b = value;
  }
  getMeta6_b(): boolean {
    return this.bool_meta6_b;
  }
}
