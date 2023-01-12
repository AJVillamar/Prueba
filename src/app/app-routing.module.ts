import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillamarLoginComponent } from './Components/villamar-login/villamar-login.component';
import { VillamarPrincipalComponent } from './Components/villamar-principal/villamar-principal.component';

const routes: Routes = [
  { path: 'login', component: VillamarLoginComponent },
  { path: 'principal', component: VillamarPrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
