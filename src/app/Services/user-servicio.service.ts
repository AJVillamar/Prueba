import { IUser } from './../Interface/iuser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicioService {
  bandera: boolean = false;

  user: IUser[] = [
    { user: "angelo", password: "villamar" }
  ]

  verificar(usuario: string, contrasenia: string): boolean{
    this.user.forEach(elemento =>{
      if(elemento.user == usuario && elemento.password == contrasenia){
        this.bandera = true;
      }
    })
    return this.bandera;
  }
}
 