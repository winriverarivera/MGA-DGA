import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

// Componentes NGPrime
import { Table } from 'primeng/table';

// Services
import { AuditoriaService } from '../../../services/auditoria.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  // Variables para datatable
  dataTable: any[] = [];
  loading: boolean = false;

  // formulario
  forma: FormGroup;

  constructor(
    private auditoriaService: AuditoriaService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) { 
    this.crearFormulario();// Creando formulario reactivo
  }

  // Funcion se ejecuta al entrar a la pagina
  ngOnInit(): void {
    this.getConsultaAditoria();
  }

  // Metodo para crear formularios
  crearFormulario() {    
    this.forma = this.fb.group({
      nit: ['', [Validators.required] ],
      fechaInicio: ['', [Validators.required] ],
      fechaFinal: [ '', [Validators.required] ]
    }
    );
  }

  //Getters para validar formularios
  get nitNoValido() {
    return this.forma.get('nit').invalid && this.forma.get('nit').touched;
  }

  get fechaInicioNoValido() {
    return this.forma.get('fechaInicio').invalid && this.forma.get('fechaInicio').touched;
  }

  get fechaFinalNoValido() {
    return this.forma.get('fechaFinal').invalid && this.forma.get('fechaFinal').touched;
  }

  // Funcion que limpia los filtros de la tabla
  clear(table: Table) {
    table.clear();
  }

  // Metodo que realiza la consulta
  getConsultaAditoria() {
    // Loading
    this.loading = true;

    //Validaciones del formulario
    if ( this.forma.invalid ) {
      this.loading = false;
      this.messageService.add({ severity:'error', summary: 'Campos invalidos', detail: 'Complete el formulario correctamente.'});
      return Object.values( this.forma.controls ).forEach( control =>{
        
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => {
            control.markAllAsTouched()
          } );
        } else {
          control.markAsPristine();
        }
      });
    }

    // Realizando peticion post para llenar datatable
    this.auditoriaService.getConsultaAuditoria( this.forma.value ).subscribe( resp => {
      this.loading = false;
      if (resp.length > 0) {
        this.dataTable = resp;
      } else {
        this.messageService.add({ severity:'warn', summary: 'Sin resultados', detail: 'No se encontraron resultados, intentelo de nuevo.'});
      }

      //resetear form
      this.forma.reset({
        nit: "",
        fechaInicio: "",
        fechaFinal: ""
      });

    }, error => {
      this.messageService.add({ severity:'error', summary: 'Error en el servidor', detail: 'La petición no se pudo completar correctamente. Consulte con soporte tecnico.'});
    });
  }


}
