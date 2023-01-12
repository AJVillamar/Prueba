import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { UserServicioService } from 'src/app/Services/user-servicio.service';

@Component({
  selector: 'app-villamar-login',
  templateUrl: './villamar-login.component.html',
  styleUrls: ['./villamar-login.component.css']
})
export class VillamarLoginComponent {
  form: FormGroup;

  
  constructor (
    private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    private _userServicio: UserServicioService
  ){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ingresar(){
    if(this.form.invalid){
      this._snackBar.open('Error', 'Todos los campos son obligatorio.',{
        horizontalPosition: 'right'
      });
      return
    }

    if(this._userServicio.verificar(this.form.get('usuario')?.value, this.form.get('password')?.value)){
      this.router.navigate(['/principal']);
    }else{
      this.form.reset();
      this._snackBar.open('Error', 'Credenciales incorrectas.',{
        horizontalPosition: 'right'
      });
    }
  }
}
