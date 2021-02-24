import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuditoriaService {

  constructor(
    private httpService: HttpService
  ) { }

  // Metodo para obtener consulta de auditoria
  getConsultaAuditoria() {

  }

}
