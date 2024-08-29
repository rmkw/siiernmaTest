import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlagService {
  constructor() {}

  componente1Filtro_MDEA: boolean = false;
  componente2Filtro_MDEA: boolean = false;
  componente3Filtro_MDEA: boolean = false;
  componente4Filtro_MDEA: boolean = false;
  componente5Filtro_MDEA: boolean = false;
  componente6Filtro_MDEA: boolean = false;

  subCompo1Filtro_MDEA: boolean = false;
  subCompo2Filtro_MDEA: boolean = false;
  subCompo3Filtro_MDEA: boolean = false;
  subCompo4Filtro_MDEA: boolean = false;
  subCompo5Filtro_MDEA: boolean = false;
  subCompo6Filtro_MDEA: boolean = false;
  subCompo7Filtro_MDEA: boolean = false;
  subCompo8Filtro_MDEA: boolean = false;
  subCompo9Filtro_MDEA: boolean = false;
  subCompo10Filtro_MDEA: boolean = false;
  subCompo11Filtro_MDEA: boolean = false;
  subCompo12Filtro_MDEA: boolean = false;
  subCompo13Filtro_MDEA: boolean = false;
  subCompo14Filtro_MDEA: boolean = false;
  subCompo15Filtro_MDEA: boolean = false;
  subCompo16Filtro_MDEA: boolean = false;
  subCompo17Filtro_MDEA: boolean = false;
  subCompo18Filtro_MDEA: boolean = false;
  subCompo19Filtro_MDEA: boolean = false;
  subCompo20Filtro_MDEA: boolean = false;
  subCompo21Filtro_MDEA: boolean = false;

  topico1Filtro_MDEA: boolean = false;
  topico2Filtro_MDEA: boolean = false;
  topico3Filtro_MDEA: boolean = false;
  topico4Filtro_MDEA: boolean = false;
  topico5Filtro_MDEA: boolean = false;
  topico6Filtro_MDEA: boolean = false;
  topico7Filtro_MDEA: boolean = false;
  topico8Filtro_MDEA: boolean = false;
  topico9Filtro_MDEA: boolean = false;
  topico10Filtro_MDEA: boolean = false;
  topico11Filtro_MDEA: boolean = false;
  topico12Filtro_MDEA: boolean = false;
  topico13Filtro_MDEA: boolean = false;
  topico14Filtro_MDEA: boolean = false;
  topico15Filtro_MDEA: boolean = false;
  topico16Filtro_MDEA: boolean = false;
  topico17Filtro_MDEA: boolean = false;
  topico18Filtro_MDEA: boolean = false;
  topico19Filtro_MDEA: boolean = false;
  topico20Filtro_MDEA: boolean = false;
  topico21Filtro_MDEA: boolean = false;
  topico22Filtro_MDEA: boolean = false;
  topico23Filtro_MDEA: boolean = false;
  topico24Filtro_MDEA: boolean = false;
  topico25Filtro_MDEA: boolean = false;
  topico26Filtro_MDEA: boolean = false;
  topico27Filtro_MDEA: boolean = false;
  topico28Filtro_MDEA: boolean = false;
  topico29Filtro_MDEA: boolean = false;
  topico30Filtro_MDEA: boolean = false;
  topico31Filtro_MDEA: boolean = false;
  topico32Filtro_MDEA: boolean = false;
  topico33Filtro_MDEA: boolean = false;
  topico34Filtro_MDEA: boolean = false;
  topico35Filtro_MDEA: boolean = false;
  topico36Filtro_MDEA: boolean = false;
  topico37Filtro_MDEA: boolean = false;
  topico38Filtro_MDEA: boolean = false;
  topico39Filtro_MDEA: boolean = false;
  topico40Filtro_MDEA: boolean = false;
  topico41Filtro_MDEA: boolean = false;
  topico42Filtro_MDEA: boolean = false;
  topico43Filtro_MDEA: boolean = false;
  topico44Filtro_MDEA: boolean = false;
  topico45Filtro_MDEA: boolean = false;
  topico46Filtro_MDEA: boolean = false;
  topico47Filtro_MDEA: boolean = false;
  topico48Filtro_MDEA: boolean = false;
  topico49Filtro_MDEA: boolean = false;
  topico50Filtro_MDEA: boolean = false;
  topico51Filtro_MDEA: boolean = false;
  topico52Filtro_MDEA: boolean = false;
  topico53Filtro_MDEA: boolean = false;
  topico54Filtro_MDEA: boolean = false;
  topico55Filtro_MDEA: boolean = false;
  topico56Filtro_MDEA: boolean = false;
  topico57Filtro_MDEA: boolean = false;
  topico58Filtro_MDEA: boolean = false;
  topico59Filtro_MDEA: boolean = false;
  topico60Filtro_MDEA: boolean = false;

  masterFlagMDEA: boolean = false;

  // TODO Servicios para obtener los productos por componente.

  setFlagMasterMdea(value: boolean): void {
    this.masterFlagMDEA = value;
  }
  getFlagMasterMdea(): boolean {
    return this.masterFlagMDEA;
  }

  setFlagComp1(value: boolean): void {
    this.componente1Filtro_MDEA = value;
  }
  getFlagComp1(): boolean {
    return this.componente1Filtro_MDEA;
  }

  setFlagComp2(value: boolean): void {
    this.componente2Filtro_MDEA = value;
  }
  getFlagComp2(): boolean {
    return this.componente2Filtro_MDEA;
  }

  setFlagComp3(value: boolean): void {
    this.componente3Filtro_MDEA = value;
  }
  getFlagComp3(): boolean {
    return this.componente3Filtro_MDEA;
  }

  setFlagComp4(value: boolean): void {
    this.componente4Filtro_MDEA = value;
  }
  getFlagComp4(): boolean {
    return this.componente4Filtro_MDEA;
  }

  setFlagComp5(value: boolean): void {
    this.componente5Filtro_MDEA = value;
  }
  getFlagComp5(): boolean {
    return this.componente5Filtro_MDEA;
  }

  setFlagComp6(value: boolean): void {
    this.componente6Filtro_MDEA = value;
  }
  getFlagComp6(): boolean {
    return this.componente6Filtro_MDEA;
  }

  //TODO Servicios para obtener los productos por subcomponente
  setFlagSubComp1(value: boolean): void {
    this.subCompo1Filtro_MDEA = value;
  }
  getFlagSubComp1(): boolean {
    return this.subCompo1Filtro_MDEA;
  }
  setFlagSubComp2(value: boolean): void {
    this.subCompo2Filtro_MDEA = value;
  }
  getFlagSubComp2(): boolean {
    return this.subCompo2Filtro_MDEA;
  }

  setFlagSubComp3(value: boolean): void {
    this.subCompo3Filtro_MDEA = value;
  }
  getFlagSubComp3(): boolean {
    return this.subCompo3Filtro_MDEA;
  }

  setFlagSubComp4(value: boolean): void {
    this.subCompo4Filtro_MDEA = value;
  }
  getFlagSubComp4(): boolean {
    return this.subCompo4Filtro_MDEA;
  }

  setFlagSubComp5(value: boolean): void {
    this.subCompo5Filtro_MDEA = value;
  }
  getFlagSubComp5(): boolean {
    return this.subCompo5Filtro_MDEA;
  }

  setFlagSubComp6(value: boolean): void {
    this.subCompo6Filtro_MDEA = value;
  }
  getFlagSubComp6(): boolean {
    return this.subCompo6Filtro_MDEA;
  }

  setFlagSubComp7(value: boolean): void {
    this.subCompo7Filtro_MDEA = value;
  }
  getFlagSubComp7(): boolean {
    return this.subCompo7Filtro_MDEA;
  }

  setFlagSubComp8(value: boolean): void {
    this.subCompo8Filtro_MDEA = value;
  }
  getFlagSubComp8(): boolean {
    return this.subCompo8Filtro_MDEA;
  }

  setFlagSubComp9(value: boolean): void {
    this.subCompo9Filtro_MDEA = value;
  }
  getFlagSubComp9(): boolean {
    return this.subCompo9Filtro_MDEA;
  }

  setFlagSubComp10(value: boolean): void {
    this.subCompo10Filtro_MDEA = value;
  }
  getFlagSubComp10(): boolean {
    return this.subCompo10Filtro_MDEA;
  }

  setFlagSubComp11(value: boolean): void {
    this.subCompo11Filtro_MDEA = value;
  }
  getFlagSubComp11(): boolean {
    return this.subCompo11Filtro_MDEA;
  }

  setFlagSubComp12(value: boolean): void {
    this.subCompo12Filtro_MDEA = value;
  }
  getFlagSubComp12(): boolean {
    return this.subCompo12Filtro_MDEA;
  }

  setFlagSubComp13(value: boolean): void {
    this.subCompo13Filtro_MDEA = value;
  }
  getFlagSubComp13(): boolean {
    return this.subCompo13Filtro_MDEA;
  }

  setFlagSubComp14(value: boolean): void {
    this.subCompo14Filtro_MDEA = value;
  }
  getFlagSubComp14(): boolean {
    return this.subCompo14Filtro_MDEA;
  }

  setFlagSubComp15(value: boolean): void {
    this.subCompo15Filtro_MDEA = value;
  }
  getFlagSubComp15(): boolean {
    return this.subCompo15Filtro_MDEA;
  }

  setFlagSubComp16(value: boolean): void {
    this.subCompo16Filtro_MDEA = value;
  }
  getFlagSubComp16(): boolean {
    return this.subCompo16Filtro_MDEA;
  }

  setFlagSubComp17(value: boolean): void {
    this.subCompo17Filtro_MDEA = value;
  }
  getFlagSubComp17(): boolean {
    return this.subCompo17Filtro_MDEA;
  }

  setFlagSubComp18(value: boolean): void {
    this.subCompo18Filtro_MDEA = value;
  }
  getFlagSubComp18(): boolean {
    return this.subCompo18Filtro_MDEA;
  }

  setFlagSubComp19(value: boolean): void {
    this.subCompo19Filtro_MDEA = value;
  }
  getFlagSubComp19(): boolean {
    return this.subCompo19Filtro_MDEA;
  }

  setFlagSubComp20(value: boolean): void {
    this.subCompo20Filtro_MDEA = value;
  }
  getFlagSubComp20(): boolean {
    return this.subCompo20Filtro_MDEA;
  }

  setFlagSubComp21(value: boolean): void {
    this.subCompo21Filtro_MDEA = value;
  }
  getFlagSubComp21(): boolean {
    return this.subCompo21Filtro_MDEA;
  }

  //TODO Servicios para obtener los productos por tópico
  // Funciones para tópicos del 1 al 10

  setFlagTopico1(value: boolean): void {
    this.topico1Filtro_MDEA = value;
  }
  getFlagTopico1(): boolean {
    return this.topico1Filtro_MDEA;
  }

  setFlagTopico2(value: boolean): void {
    this.topico2Filtro_MDEA = value;
  }
  getFlagTopico2(): boolean {
    return this.topico2Filtro_MDEA;
  }

  setFlagTopico3(value: boolean): void {
    this.topico3Filtro_MDEA = value;
  }
  getFlagTopico3(): boolean {
    return this.topico3Filtro_MDEA;
  }

  setFlagTopico4(value: boolean): void {
    this.topico4Filtro_MDEA = value;
  }
  getFlagTopico4(): boolean {
    return this.topico4Filtro_MDEA;
  }

  setFlagTopico5(value: boolean): void {
    this.topico5Filtro_MDEA = value;
  }
  getFlagTopico5(): boolean {
    return this.topico5Filtro_MDEA;
  }

  setFlagTopico6(value: boolean): void {
    this.topico6Filtro_MDEA = value;
  }
  getFlagTopico6(): boolean {
    return this.topico6Filtro_MDEA;
  }

  setFlagTopico7(value: boolean): void {
    this.topico7Filtro_MDEA = value;
  }
  getFlagTopico7(): boolean {
    return this.topico7Filtro_MDEA;
  }

  setFlagTopico8(value: boolean): void {
    this.topico8Filtro_MDEA = value;
  }
  getFlagTopico8(): boolean {
    return this.topico8Filtro_MDEA;
  }

  setFlagTopico9(value: boolean): void {
    this.topico9Filtro_MDEA = value;
  }
  getFlagTopico9(): boolean {
    return this.topico9Filtro_MDEA;
  }

  setFlagTopico10(value: boolean): void {
    this.topico10Filtro_MDEA = value;
  }
  getFlagTopico10(): boolean {
    return this.topico10Filtro_MDEA;
  }

  // Continúa con el mismo patrón para los tópicos del 11 al 60

  setFlagTopico11(value: boolean): void {
    this.topico11Filtro_MDEA = value;
  }
  getFlagTopico11(): boolean {
    return this.topico11Filtro_MDEA;
  }

  setFlagTopico12(value: boolean): void {
    this.topico12Filtro_MDEA = value;
  }
  getFlagTopico12(): boolean {
    return this.topico12Filtro_MDEA;
  }

  setFlagTopico13(value: boolean): void {
    this.topico13Filtro_MDEA = value;
  }
  getFlagTopico13(): boolean {
    return this.topico13Filtro_MDEA;
  }

  setFlagTopico14(value: boolean): void {
    this.topico14Filtro_MDEA = value;
  }
  getFlagTopico14(): boolean {
    return this.topico14Filtro_MDEA;
  }

  setFlagTopico15(value: boolean): void {
    this.topico15Filtro_MDEA = value;
  }
  getFlagTopico15(): boolean {
    return this.topico15Filtro_MDEA;
  }

  setFlagTopico16(value: boolean): void {
    this.topico16Filtro_MDEA = value;
  }
  getFlagTopico16(): boolean {
    return this.topico16Filtro_MDEA;
  }

  setFlagTopico17(value: boolean): void {
    this.topico17Filtro_MDEA = value;
  }
  getFlagTopico17(): boolean {
    return this.topico17Filtro_MDEA;
  }

  setFlagTopico18(value: boolean): void {
    this.topico18Filtro_MDEA = value;
  }
  getFlagTopico18(): boolean {
    return this.topico18Filtro_MDEA;
  }

  setFlagTopico19(value: boolean): void {
    this.topico19Filtro_MDEA = value;
  }
  getFlagTopico19(): boolean {
    return this.topico19Filtro_MDEA;
  }

  setFlagTopico20(value: boolean): void {
    this.topico20Filtro_MDEA = value;
  }
  getFlagTopico20(): boolean {
    return this.topico20Filtro_MDEA;
  }

  // Continúa con el mismo patrón para los tópicos del 21 al 60

  setFlagTopico21(value: boolean): void {
    this.topico21Filtro_MDEA = value;
  }
  getFlagTopico21(): boolean {
    return this.topico21Filtro_MDEA;
  }

  setFlagTopico22(value: boolean): void {
    this.topico22Filtro_MDEA = value;
  }
  getFlagTopico22(): boolean {
    return this.topico22Filtro_MDEA;
  }

  setFlagTopico23(value: boolean): void {
    this.topico23Filtro_MDEA = value;
  }
  getFlagTopico23(): boolean {
    return this.topico23Filtro_MDEA;
  }

  setFlagTopico24(value: boolean): void {
    this.topico24Filtro_MDEA = value;
  }
  getFlagTopico24(): boolean {
    return this.topico24Filtro_MDEA;
  }

  setFlagTopico25(value: boolean): void {
    this.topico25Filtro_MDEA = value;
  }
  getFlagTopico25(): boolean {
    return this.topico25Filtro_MDEA;
  }

  setFlagTopico26(value: boolean): void {
    this.topico26Filtro_MDEA = value;
  }
  getFlagTopico26(): boolean {
    return this.topico26Filtro_MDEA;
  }

  setFlagTopico27(value: boolean): void {
    this.topico27Filtro_MDEA = value;
  }
  getFlagTopico27(): boolean {
    return this.topico27Filtro_MDEA;
  }

  setFlagTopico28(value: boolean): void {
    this.topico28Filtro_MDEA = value;
  }
  getFlagTopico28(): boolean {
    return this.topico28Filtro_MDEA;
  }

  setFlagTopico29(value: boolean): void {
    this.topico29Filtro_MDEA = value;
  }
  getFlagTopico29(): boolean {
    return this.topico29Filtro_MDEA;
  }

  setFlagTopico30(value: boolean): void {
    this.topico30Filtro_MDEA = value;
  }
  getFlagTopico30(): boolean {
    return this.topico30Filtro_MDEA;
  }

  setFlagTopico31(value: boolean): void {
    this.topico31Filtro_MDEA = value;
  }
  getFlagTopico31(): boolean {
    return this.topico31Filtro_MDEA;
  }

  setFlagTopico32(value: boolean): void {
    this.topico32Filtro_MDEA = value;
  }
  getFlagTopico32(): boolean {
    return this.topico32Filtro_MDEA;
  }

  setFlagTopico33(value: boolean): void {
    this.topico33Filtro_MDEA = value;
  }
  getFlagTopico33(): boolean {
    return this.topico33Filtro_MDEA;
  }

  setFlagTopico34(value: boolean): void {
    this.topico34Filtro_MDEA = value;
  }
  getFlagTopico34(): boolean {
    return this.topico34Filtro_MDEA;
  }

  setFlagTopico35(value: boolean): void {
    this.topico35Filtro_MDEA = value;
  }
  getFlagTopico35(): boolean {
    return this.topico35Filtro_MDEA;
  }

  setFlagTopico36(value: boolean): void {
    this.topico36Filtro_MDEA = value;
  }
  getFlagTopico36(): boolean {
    return this.topico36Filtro_MDEA;
  }

  setFlagTopico37(value: boolean): void {
    this.topico37Filtro_MDEA = value;
  }
  getFlagTopico37(): boolean {
    return this.topico37Filtro_MDEA;
  }

  setFlagTopico38(value: boolean): void {
    this.topico38Filtro_MDEA = value;
  }
  getFlagTopico38(): boolean {
    return this.topico38Filtro_MDEA;
  }

  setFlagTopico39(value: boolean): void {
    this.topico39Filtro_MDEA = value;
  }
  getFlagTopico39(): boolean {
    return this.topico39Filtro_MDEA;
  }

  setFlagTopico40(value: boolean): void {
    this.topico40Filtro_MDEA = value;
  }
  getFlagTopico40(): boolean {
    return this.topico40Filtro_MDEA;
  }

  setFlagTopico41(value: boolean): void {
    this.topico41Filtro_MDEA = value;
  }
  getFlagTopico41(): boolean {
    return this.topico41Filtro_MDEA;
  }

  setFlagTopico42(value: boolean): void {
    this.topico42Filtro_MDEA = value;
  }
  getFlagTopico42(): boolean {
    return this.topico42Filtro_MDEA;
  }

  setFlagTopico43(value: boolean): void {
    this.topico43Filtro_MDEA = value;
  }
  getFlagTopico43(): boolean {
    return this.topico43Filtro_MDEA;
  }

  setFlagTopico44(value: boolean): void {
    this.topico44Filtro_MDEA = value;
  }
  getFlagTopico44(): boolean {
    return this.topico44Filtro_MDEA;
  }

  setFlagTopico45(value: boolean): void {
    this.topico45Filtro_MDEA = value;
  }
  getFlagTopico45(): boolean {
    return this.topico45Filtro_MDEA;
  }

  setFlagTopico46(value: boolean): void {
    this.topico46Filtro_MDEA = value;
  }
  getFlagTopico46(): boolean {
    return this.topico46Filtro_MDEA;
  }

  setFlagTopico47(value: boolean): void {
    this.topico47Filtro_MDEA = value;
  }
  getFlagTopico47(): boolean {
    return this.topico47Filtro_MDEA;
  }

  setFlagTopico48(value: boolean): void {
    this.topico48Filtro_MDEA = value;
  }
  getFlagTopico48(): boolean {
    return this.topico48Filtro_MDEA;
  }

  setFlagTopico49(value: boolean): void {
    this.topico49Filtro_MDEA = value;
  }
  getFlagTopico49(): boolean {
    return this.topico49Filtro_MDEA;
  }

  setFlagTopico50(value: boolean): void {
    this.topico50Filtro_MDEA = value;
  }
  getFlagTopico50(): boolean {
    return this.topico50Filtro_MDEA;
  }

  setFlagTopico51(value: boolean): void {
    this.topico51Filtro_MDEA = value;
  }
  getFlagTopico51(): boolean {
    return this.topico51Filtro_MDEA;
  }

  setFlagTopico52(value: boolean): void {
    this.topico52Filtro_MDEA = value;
  }
  getFlagTopico52(): boolean {
    return this.topico52Filtro_MDEA;
  }

  setFlagTopico53(value: boolean): void {
    this.topico53Filtro_MDEA = value;
  }
  getFlagTopico53(): boolean {
    return this.topico53Filtro_MDEA;
  }

  setFlagTopico54(value: boolean): void {
    this.topico54Filtro_MDEA = value;
  }
  getFlagTopico54(): boolean {
    return this.topico54Filtro_MDEA;
  }

  setFlagTopico55(value: boolean): void {
    this.topico55Filtro_MDEA = value;
  }
  getFlagTopico55(): boolean {
    return this.topico55Filtro_MDEA;
  }

  setFlagTopico56(value: boolean): void {
    this.topico56Filtro_MDEA = value;
  }
  getFlagTopico56(): boolean {
    return this.topico56Filtro_MDEA;
  }

  setFlagTopico57(value: boolean): void {
    this.topico57Filtro_MDEA = value;
  }
  getFlagTopico57(): boolean {
    return this.topico57Filtro_MDEA;
  }

  setFlagTopico58(value: boolean): void {
    this.topico58Filtro_MDEA = value;
  }
  getFlagTopico58(): boolean {
    return this.topico58Filtro_MDEA;
  }

  setFlagTopico59(value: boolean): void {
    this.topico59Filtro_MDEA = value;
  }
  getFlagTopico59(): boolean {
    return this.topico59Filtro_MDEA;
  }

  setFlagTopico60(value: boolean): void {
    this.topico60Filtro_MDEA = value;
  }
  getFlagTopico60(): boolean {
    return this.topico60Filtro_MDEA;
  }
}
