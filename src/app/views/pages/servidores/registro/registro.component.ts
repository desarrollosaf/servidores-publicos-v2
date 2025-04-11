import { Component, ViewChild, inject, TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ColumnMode, DatatableComponent, NgxDatatableModule } from '@siemens/ngx-datatable';
import { Servidores } from '../../../../interfaces/servidores';
import { ServidoresService } from '../../../../service/servidores.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    RouterLink,
    NgxDatatableModule
  ],
  templateUrl: './registro.component.html'
})
export class RegistroComponent {
  rows = [];
  declaraciones: any[] = [];
  temp: Servidores[] = []
  loadingIndicator = true;
  reorderable = true;
  ColumnMode = ColumnMode;

  listProduct: Servidores[] = []
  servidorDetalle: Servidores[] = []
  public _servidorService  =  inject( ServidoresService )

  @ViewChild('table') table: DatatableComponent

  constructor(private router: Router,private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getServidores()
    console.log('holi')
    
  }

  getServidores() {
    this._servidorService.getServidores().subscribe(data => {
      this.listProduct = data
      this.temp = [...data];
    })

  }


  updateFilter(event: KeyboardEvent) {
    const val = (event.target as HTMLInputElement).value.toLocaleLowerCase();
    const temp = this.temp.filter(function(d: any) {
      return d.curp.toLocaleLowerCase().indexOf(val) !== -1 || !val;
    })

    this.listProduct = temp;
    this.table.offset = 0;
  }

  onEdit(): void {
    console.log('Editando: ', );
  }

  onDelete(): void {
    console.log('Eliminando: ', );
  }

  openXlModal(content: TemplateRef<any>, id: number) {
    console.log(id)
    this._servidorService.getMovimientos(id).subscribe({
      next: (data) => {
        this.declaraciones = data.declaraciones
        console.log( this.declaraciones)
        console.log('Movimientos recibidos:', this.servidorDetalle);
        // Aquí puedes abrir el modal y pasarle los datos
      },
      error: (err) => {
        console.error('Error al obtener movimientos:', err);
      }
    });
     
    this.modalService.open(content, {size: 'xl'}).result.then((result) => {
      console.log("Modal closed" + result);
    }).catch((res) => {});
  }

 
}
