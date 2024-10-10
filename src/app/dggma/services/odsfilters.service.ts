import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OdsFilterService {
  constructor() {}

  bool_obj1: boolean = false;
  bool_obj2: boolean = false;
  bool_obj3: boolean = false;
  bool_obj4: boolean = false;
  bool_obj5: boolean = false;
  bool_obj6: boolean = false;
  bool_obj7: boolean = false;
  bool_obj8: boolean = false;
  bool_obj9: boolean = false;
  bool_obj10: boolean = false;
  bool_obj11: boolean = false;
  bool_obj12: boolean = false;
  bool_obj13: boolean = false;
  bool_obj14: boolean = false;
  bool_obj15: boolean = false;
  bool_obj16: boolean = false;
  bool_obj17: boolean = false;

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

  bool_meta7_1: boolean = false;
  bool_meta7_2: boolean = false;
  bool_meta7_3: boolean = false;

  bool_meta8_1: boolean = false;
  bool_meta8_2: boolean = false;
  bool_meta8_3: boolean = false;
  bool_meta8_4: boolean = false;
  bool_meta8_5: boolean = false;
  bool_meta8_6: boolean = false;
  bool_meta8_7: boolean = false;
  bool_meta8_8: boolean = false;
  bool_meta8_10: boolean = false;
  bool_meta8_a: boolean = false;
  bool_meta8_b: boolean = false;

  bool_meta9_1: boolean = false;
  bool_meta9_3: boolean = false;
  bool_meta9_5: boolean = false;

  bool_meta10_2: boolean = false;
  bool_meta10_4: boolean = false;

  bool_meta11_1: boolean = false;
  bool_meta11_2: boolean = false;
  bool_meta11_3: boolean = false;
  bool_meta11_4: boolean = false;
  bool_meta11_5: boolean = false;
  bool_meta11_6: boolean = false;
  bool_meta11_7: boolean = false;
  bool_meta11_a: boolean = false;
  bool_meta11_b: boolean = false;

  bool_meta12_2: boolean = false;
  bool_meta12_3: boolean = false;
  bool_meta12_4: boolean = false;
  bool_meta12_5: boolean = false;
  bool_meta12_6: boolean = false;
  bool_meta12_8: boolean = false;

  bool_meta13_1: boolean = false;
  bool_meta13_2: boolean = false;
  bool_meta13_3: boolean = false;
  bool_meta13_b: boolean = false;

  bool_meta14_1: boolean = false;
  bool_meta14_2: boolean = false;
  bool_meta14_4: boolean = false;
  bool_meta14_5: boolean = false;

  bool_meta15_1: boolean = false;
  bool_meta15_2: boolean = false;
  bool_meta15_3: boolean = false;
  bool_meta15_4: boolean = false;
  bool_meta15_5: boolean = false;
  bool_meta15_7: boolean = false;
  bool_meta15_a: boolean = false;

  bool_meta16_1: boolean = false;
  bool_meta16_2: boolean = false;
  bool_meta16_5: boolean = false;
  bool_meta16_7: boolean = false;
  bool_meta16_10: boolean = false;
  bool_meta16_a: boolean = false;
  bool_meta16_b: boolean = false;

  bool_meta17_10: boolean = false;
  bool_meta17_11: boolean = false;

  masterFlag: boolean = false;

  setMasterFlag(value: boolean): void {
    this.masterFlag = value;
  }
  getMasterFlag(): boolean {
    return this.masterFlag;
  }

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
  //! metas7
  setMeta7_1(value: boolean): void {
    this.bool_meta7_1 = value;
  }
  getMeta7_1(): boolean {
    return this.bool_meta7_1;
  }
  setMeta7_2(value: boolean): void {
    this.bool_meta7_2 = value;
  }
  getMeta7_2(): boolean {
    return this.bool_meta7_2;
  }
  setMeta7_3(value: boolean): void {
    this.bool_meta7_3 = value;
  }
  getMeta7_3(): boolean {
    return this.bool_meta7_3;
  }
  //! metas8
  setMeta8_1(value: boolean): void {
    this.bool_meta8_1 = value;
  }
  getMeta8_1(): boolean {
    return this.bool_meta8_1;
  }
  setMeta8_2(value: boolean): void {
    this.bool_meta8_2 = value;
  }
  getMeta8_2(): boolean {
    return this.bool_meta8_2;
  }
  setMeta8_3(value: boolean): void {
    this.bool_meta8_3 = value;
  }
  getMeta8_3(): boolean {
    return this.bool_meta8_3;
  }
  setMeta8_4(value: boolean): void {
    this.bool_meta8_4 = value;
  }
  getMeta8_4(): boolean {
    return this.bool_meta8_4;
  }
  setMeta8_5(value: boolean): void {
    this.bool_meta8_5 = value;
  }
  getMeta8_5(): boolean {
    return this.bool_meta8_5;
  }
  setMeta8_6(value: boolean): void {
    this.bool_meta8_6 = value;
  }
  getMeta8_6(): boolean {
    return this.bool_meta8_6;
  }
  setMeta8_7(value: boolean): void {
    this.bool_meta8_7 = value;
  }
  getMeta8_7(): boolean {
    return this.bool_meta8_7;
  }
  setMeta8_8(value: boolean): void {
    this.bool_meta8_8 = value;
  }
  getMeta8_8(): boolean {
    return this.bool_meta8_8;
  }
  setMeta8_10(value: boolean): void {
    this.bool_meta8_10 = value;
  }
  getMeta8_10(): boolean {
    return this.bool_meta8_10;
  }
  setMeta8_a(value: boolean): void {
    this.bool_meta8_a = value;
  }
  getMeta8_a(): boolean {
    return this.bool_meta8_a;
  }
  setMeta8_b(value: boolean): void {
    this.bool_meta8_b = value;
  }
  getMeta8_b(): boolean {
    return this.bool_meta8_b;
  }
  //! metas9
  setMeta9_1(value: boolean): void {
    this.bool_meta9_1 = value;
  }
  getMeta9_1(): boolean {
    return this.bool_meta9_1;
  }
  setMeta9_3(value: boolean): void {
    this.bool_meta9_3 = value;
  }
  getMeta9_3(): boolean {
    return this.bool_meta9_3;
  }
  setMeta9_5(value: boolean): void {
    this.bool_meta9_5 = value;
  }
  getMeta9_5(): boolean {
    return this.bool_meta9_5;
  }
  //! metas10
  setMeta10_2(value: boolean): void {
    this.bool_meta10_2 = value;
  }
  getMeta10_2(): boolean {
    return this.bool_meta10_2;
  }
  setMeta10_4(value: boolean): void {
    this.bool_meta10_4 = value;
  }
  getMeta10_4(): boolean {
    return this.bool_meta10_4;
  }
  //! meta11
  setMeta11_1(value: boolean): void {
    this.bool_meta11_1 = value;
  }
  getMeta11_1(): boolean {
    return this.bool_meta11_1;
  }
  setMeta11_2(value: boolean): void {
    this.bool_meta11_2 = value;
  }
  getMeta11_2(): boolean {
    return this.bool_meta11_2;
  }
  setMeta11_3(value: boolean): void {
    this.bool_meta11_3 = value;
  }
  getMeta11_3(): boolean {
    return this.bool_meta11_3;
  }
  setMeta11_4(value: boolean): void {
    this.bool_meta11_4 = value;
  }
  getMeta11_4(): boolean {
    return this.bool_meta11_4;
  }
  setMeta11_5(value: boolean): void {
    this.bool_meta11_5 = value;
  }
  getMeta11_5(): boolean {
    return this.bool_meta11_5;
  }
  setMeta11_6(value: boolean): void {
    this.bool_meta11_6 = value;
  }
  getMeta11_6(): boolean {
    return this.bool_meta11_6;
  }
  setMeta11_7(value: boolean): void {
    this.bool_meta11_7 = value;
  }
  getMeta11_7(): boolean {
    return this.bool_meta11_7;
  }
  setMeta11_a(value: boolean): void {
    this.bool_meta11_a = value;
  }
  getMeta11_a(): boolean {
    return this.bool_meta11_a;
  }
  setMeta11_b(value: boolean): void {
    this.bool_meta11_b = value;
  }
  getMeta11_b(): boolean {
    return this.bool_meta11_b;
  }
  //! metas12
  setMeta12_2(value: boolean): void {
    this.bool_meta12_2 = value;
  }
  getMeta12_2(): boolean {
    return this.bool_meta12_2;
  }
  setMeta12_3(value: boolean): void {
    this.bool_meta12_3 = value;
  }
  getMeta12_3(): boolean {
    return this.bool_meta12_3;
  }
  setMeta12_4(value: boolean): void {
    this.bool_meta12_4 = value;
  }
  getMeta12_4(): boolean {
    return this.bool_meta12_4;
  }
  setMeta12_5(value: boolean): void {
    this.bool_meta12_5 = value;
  }
  getMeta12_5(): boolean {
    return this.bool_meta12_5;
  }
  setMeta12_6(value: boolean): void {
    this.bool_meta12_6 = value;
  }
  getMeta12_6(): boolean {
    return this.bool_meta12_6;
  }
  setMeta12_8(value: boolean): void {
    this.bool_meta12_8 = value;
  }
  getMeta12_8(): boolean {
    return this.bool_meta12_8;
  }
  //! metas13
  setMeta13_1(value: boolean): void {
    this.bool_meta13_1 = value;
  }
  getMeta13_1(): boolean {
    return this.bool_meta13_1;
  }
  setMeta13_2(value: boolean): void {
    this.bool_meta13_2 = value;
  }
  getMeta13_2(): boolean {
    return this.bool_meta13_2;
  }
  setMeta13_3(value: boolean): void {
    this.bool_meta13_3 = value;
  }
  getMeta13_3(): boolean {
    return this.bool_meta13_3;
  }
  setMeta13_b(value: boolean): void {
    this.bool_meta13_b = value;
  }
  getMeta13_b(): boolean {
    return this.bool_meta13_b;
  }
  //! metas14
  setMeta14_1(value: boolean): void {
    this.bool_meta14_1 = value;
  }
  getMeta14_1(): boolean {
    return this.bool_meta14_1;
  }
  setMeta14_2(value: boolean): void {
    this.bool_meta14_2 = value;
  }
  getMeta14_2(): boolean {
    return this.bool_meta14_2;
  }
  setMeta14_4(value: boolean): void {
    this.bool_meta14_4 = value;
  }
  getMeta14_4(): boolean {
    return this.bool_meta14_4;
  }
  setMeta14_5(value: boolean): void {
    this.bool_meta14_5 = value;
  }
  getMeta14_5(): boolean {
    return this.bool_meta14_5;
  }
  //! metas15
  setMeta15_1(value: boolean): void {
    this.bool_meta15_1 = value;
  }
  getMeta15_1(): boolean {
    return this.bool_meta15_1;
  }
  setMeta15_2(value: boolean): void {
    this.bool_meta15_2 = value;
  }
  getMeta15_2(): boolean {
    return this.bool_meta15_2;
  }
  setMeta15_3(value: boolean): void {
    this.bool_meta15_3 = value;
  }
  getMeta15_3(): boolean {
    return this.bool_meta15_3;
  }
  setMeta15_4(value: boolean): void {
    this.bool_meta15_4 = value;
  }
  getMeta15_4(): boolean {
    return this.bool_meta15_4;
  }
  setMeta15_5(value: boolean): void {
    this.bool_meta15_5 = value;
  }
  getMeta15_5(): boolean {
    return this.bool_meta15_5;
  }
  setMeta15_7(value: boolean): void {
    this.bool_meta15_7 = value;
  }
  getMeta15_7(): boolean {
    return this.bool_meta15_7;
  }
  setMeta15_a(value: boolean): void {
    this.bool_meta15_a = value;
  }
  getMeta15_a(): boolean {
    return this.bool_meta15_a;
  }
  //! metas16
  setMeta16_1(value: boolean): void {
    this.bool_meta16_1 = value;
  }
  getMeta16_1(): boolean {
    return this.bool_meta16_1;
  }
  setMeta16_2(value: boolean): void {
    this.bool_meta16_2 = value;
  }
  getMeta16_2(): boolean {
    return this.bool_meta16_2;
  }
  setMeta16_5(value: boolean): void {
    this.bool_meta16_5 = value;
  }
  getMeta16_5(): boolean {
    return this.bool_meta16_5;
  }
  setMeta16_7(value: boolean): void {
    this.bool_meta16_7 = value;
  }
  getMeta16_7(): boolean {
    return this.bool_meta16_7;
  }
  setMeta16_10(value: boolean): void {
    this.bool_meta16_10 = value;
  }
  getMeta16_10(): boolean {
    return this.bool_meta16_10;
  }
  setMeta16_a(value: boolean): void {
    this.bool_meta16_a = value;
  }
  getMeta16_a(): boolean {
    return this.bool_meta16_a;
  }
  setMeta16_b(value: boolean): void {
    this.bool_meta16_b = value;
  }
  getMeta16_b(): boolean {
    return this.bool_meta16_b;
  }
  //! metas17
  setMeta17_10(value: boolean): void {
    this.bool_meta17_10 = value;
  }
  getMeta17_10(): boolean {
    return this.bool_meta17_10;
  }
  setMeta17_11(value: boolean): void {
    this.bool_meta17_11 = value;
  }
  getMeta17_11(): boolean {
    return this.bool_meta17_11;
  }
  //! objetivo1
  setObj1(value: boolean): void {
    this.bool_obj1 = value;
  }
  getObj1(): boolean {
    return this.bool_obj1;
  }
  //! objetivo3
  setObj3(value: boolean): void {
    this.bool_obj3 = value;
  }
  getObj3(): boolean {
    return this.bool_obj3;
  }
  //! objetivo4
  setObj4(value: boolean): void {
    this.bool_obj4 = value;
  }
  getObj4(): boolean {
    return this.bool_obj4;
  }
  //! objetivo5
  setObj5(value: boolean): void {
    this.bool_obj5 = value;
  }
  getObj5(): boolean {
    return this.bool_obj5;
  }
  //! objetivo6
  setObj6(value: boolean): void {
    this.bool_obj6 = value;
  }
  getObj6(): boolean {
    return this.bool_obj6;
  }
  //! objetivo7
  setObj7(value: boolean): void {
    this.bool_obj7 = value;
  }
  getObj7(): boolean {
    return this.bool_obj7;
  }
  //! objetivo8
  setObj8(value: boolean): void {
    this.bool_obj8 = value;
  }
  getObj8(): boolean {
    return this.bool_obj8;
  }
  //! objetivo9
  setObj9(value: boolean): void {
    this.bool_obj9 = value;
  }
  getObj9(): boolean {
    return this.bool_obj9;
  }
  //! objetivo10
  setObj10(value: boolean): void {
    this.bool_obj10 = value;
  }
  getObj10(): boolean {
    return this.bool_obj10;
  }
  //! objetivo11
  setObj11(value: boolean): void {
    this.bool_obj11 = value;
  }
  getObj11(): boolean {
    return this.bool_obj11;
  }

  //! objetivo12
  setObj12(value: boolean): void {
    this.bool_obj12 = value;
  }
  getObj12(): boolean {
    return this.bool_obj12;
  }
  //! objetivo13
  setObj13(value: boolean): void {
    this.bool_obj13 = value;
  }
  getObj13(): boolean {
    return this.bool_obj13;
  }
  //! objetivo14
  setObj14(value: boolean): void {
    this.bool_obj14 = value;
  }
  getObj14(): boolean {
    return this.bool_obj14;
  }
  //! objetivo15
  setObj15(value: boolean): void {
    this.bool_obj15 = value;
  }
  getObj15(): boolean {
    return this.bool_obj15;
  }
  //! objetivo16
  setObj16(value: boolean): void {
    this.bool_obj16 = value;
  }
  getObj16(): boolean {
    return this.bool_obj16;
  }

  //! objetivo17
  setObj17(value: boolean): void {
    this.bool_obj17 = value;
  }
  getObj17(): boolean {
    return this.bool_obj17;
  }
  //! objetivo2
  setObj2(value: boolean): void {
    this.bool_obj2 = value;
  }
  getObj2(): boolean {
    return this.bool_obj2;
  }
}
