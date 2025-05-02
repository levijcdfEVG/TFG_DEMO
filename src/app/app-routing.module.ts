import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentrosComponent } from './components/centros/centros.component';
import { AnioacademicoComponent } from './components/anioacademico/anioacademico.component';
import { FormacionesComponent } from './components/formaciones/formaciones.component';
import { EducadoresComponent } from './components/educadores/educadores.component';

const routes: Routes = [
  { path: 'centros', component: CentrosComponent },
  { path: 'formaciones', component: FormacionesComponent },
  { path: 'anioacademico', component: AnioacademicoComponent },
  { path: 'educadores', component: EducadoresComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
