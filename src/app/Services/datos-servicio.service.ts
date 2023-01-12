import { IDatos } from './../Interface/idatos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosServicioService {

  datos: IDatos[] = [
    { cedula: "1234567890", nombre: "Juan", apellido: "Zambrano", ciudad: "Guayaquil" },
    { cedula: "0987654321", nombre: "Peter", apellido: "Angulo", ciudad: "Quito" },
    { cedula: "1245467474", nombre: "Lola", apellido: "Joaquin", ciudad: "Cuenca" },
    { cedula: "7535636333", nombre: "Ryan", apellido: "Paez", ciudad: "Loja" },
    { cedula: "0947546362", nombre: "Elkin", apellido: "Velez", ciudad: "Machala" }
  ]


}
