import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './Actividad/editar/editar.component';
import { ListarComponent } from './Actividad/listar/listar.component';
import { NuevoComponent } from './Actividad/nuevo/nuevo.component';

const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'nuevo',component:NuevoComponent},
  {path:'editar',component:EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
