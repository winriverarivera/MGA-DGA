import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroFecha'
})
export class FiltroFechaPipe implements PipeTransform {

  transform(datefull: number): string {
    let date = datefull.toString(); 
    return date.substring(0,4) + "/" + date.substring(4,6) + "/" + date.substring(6,8);
  }

}
