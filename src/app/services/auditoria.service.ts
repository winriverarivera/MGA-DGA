import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuditoriaService {

  constructor(
    private httpService: HttpService
  ) { }

  // Duncion que parsea fecha
  parseDate( date: string ) {
    // let dateParse = new Date( date );
    // return dateParse.getFullYear().toString() + (dateParse.getMonth() + 1).toString() + dateParse.getDate().toString();
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('');
  }

  // Metodo para obtener consulta de auditoria
  getConsultaAuditoria( data: any ) {

    // Body Request
    const body = {
      "nit": data.nit,
      "fechaInicio": this.parseDate( data.fechaInicio ),
      "fechaFin": this.parseDate( data.fechaFinal )
    }

    return this.httpService.post<any>(`/consultaDataMart/busqueda`, body);
  }

}
