import { Waveform } from "./waveform";


export class Sensor {

      name!:string;
      unit!:string;
      max!:number;//emin değilim
      waveform!:Waveform;
}
