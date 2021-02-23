import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  // Variables para tabla
  dataTable: any[] = [];

  dumbData = [
    {
      NIT: 9,
      Contribuyente: "Test",
      Delegacion: 1,
      fecha_Registro: "11/11/11",
      fecha_Liquidacion: 144,
      IVA: 15,
    },
    {
      NIT: 2,
      Contribuyente: "Test",
      Delegacion: 1,
      fecha_Registro: "11/11/11",
      fecha_Liquidacion: 144,
      IVA: 15,
    },
    {
      NIT: 7,
      Contribuyente: "Test",
      Delegacion: 1,
      fecha_Registro: "11/11/11",
      fecha_Liquidacion: 144,
      IVA: 15,
    },
    {
      NIT: 9,
      Contribuyente: "Test",
      Delegacion: 1,
      fecha_Registro: "11/11/11",
      fecha_Liquidacion: 144,
      IVA: 15,
    },
    {
      NIT: 2,
      Contribuyente: "Test",
      Delegacion: 1,
      fecha_Registro: "11/11/11",
      fecha_Liquidacion: 144,
      IVA: 15,
    },
    {
      NIT: 7,
      Contribuyente: "Test",
      Delegacion: 1,
      fecha_Registro: "11/11/11",
      fecha_Liquidacion: 144,
      IVA: 15,
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.dataTable.push( ...this.dumbData );
  }

  clear(table: Table) {
    table.clear();
  }

}
