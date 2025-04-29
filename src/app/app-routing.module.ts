import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InfoCentroComponent} from "./components/dashboard/info-centro/info-centro.component";

const routes: Routes = [
  {
    path: "info-centros",
    component: InfoCentroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
