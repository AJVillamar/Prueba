import { IDatos } from './../../Interface/idatos';
import { MatTableDataSource } from '@angular/material/table';
import { Component } from '@angular/core';
import { DatosServicioService } from 'src/app/Services/datos-servicio.service';

@Component({
  selector: 'app-villamar-principal',
  templateUrl: './villamar-principal.component.html',
  styleUrls: ['./villamar-principal.component.css']
})
export class VillamarPrincipalComponent {
  dataSource: any = [];

  constructor(
    private _datosServicio: DatosServicioService
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IDatos>(this._datosServicio.datos as IDatos[]);
  }
  
  displayedColumns: string[] = ['Cedula', 'Nombre', 'Apellido', 'Ciudad'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
