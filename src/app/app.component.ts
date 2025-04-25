import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import Swal from 'sweetalert2';
import 'datatables.net';
declare var $: any;
declare let toastr: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'angular-datatables-example';
  dtOptions: DataTables.Settings = {};
  dataTable: any;

  fakeUsers = [
    { nombre: 'Ana García', edad: 28, pais: 'España', correo: 'ana@example.com' },
    { nombre: 'Juan Pérez', edad: 35, pais: 'México', correo: 'juan@example.com' },
    { nombre: 'Sara López', edad: 22, pais: 'Argentina', correo: 'sara@example.com' },
    { nombre: 'Lucas Silva', edad: 31, pais: 'Brasil', correo: 'lucas@example.com' },
    { nombre: 'Carmen Ruiz', edad: 26, pais: 'Chile', correo: 'carmen@example.com' },
    { nombre: 'Diego Torres', edad: 30, pais: 'Perú', correo: 'diego@example.com' },
    { nombre: 'Laura Ramírez', edad: 24, pais: 'Colombia', correo: 'laura@example.com' },
    { nombre: 'Pedro Gómez', edad: 29, pais: 'Uruguay', correo: 'pedro@example.com' },
    { nombre: 'María Fernández', edad: 33, pais: 'España', correo: 'maria@example.com' },
    { nombre: 'Luis Herrera', edad: 27, pais: 'Ecuador', correo: 'luis@example.com' }
  ];

  constructor() {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      responsive: true
    };
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.dataTable = $('#example').DataTable(this.dtOptions);
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.dataTable) {
      this.dataTable.destroy();
    }
  }

  showSweetAlert(): void {
    Swal.fire({
      title: '¡Éxito!',
      text: 'SweetAlert2 funciona correctamente.',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  }

  showToastr(): void {
    toastr.options = {
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-bottom-right',
      timeOut: 3000
    };
    toastr.success('¡Toastr cargado correctamente!', 'Éxito');
  }
}
