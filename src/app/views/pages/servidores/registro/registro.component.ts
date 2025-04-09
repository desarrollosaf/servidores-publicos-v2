import { Component, ViewChild, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ColumnMode, DatatableComponent, NgxDatatableModule } from '@siemens/ngx-datatable';
import { Servidores } from '../../../../interfaces/servidores';
import { ServidoresService } from '../../../../service/servidores.service';
import { Router } from '@angular/router';

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
  temp: Servidores[] = []
  loadingIndicator = true;
  reorderable = true;
  ColumnMode = ColumnMode;

  listProduct: Servidores[] = []
  public _servidorService  =  inject( ServidoresService )

  @ViewChild('table') table: DatatableComponent

  constructor(private router: Router,) {
  }

  ngOnInit(): void {
    this.getServidores()
    console.log('holi')
    
  }

  getServidores() {
    this._servidorService.getServidores().subscribe(data => {
      this.listProduct = data
      console.log(this.listProduct)
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

}
