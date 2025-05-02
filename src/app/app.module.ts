import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { HeaderComponent } from './components/header/header.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { CentrosComponent } from './components/centros/centros.component';
import { FormacionesComponent } from './components/formaciones/formaciones.component';
import { AnioacademicoComponent } from './components/anioacademico/anioacademico.component';
import { EducadoresComponent } from './components/educadores/educadores.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HeaderComponent,
    MainmenuComponent,
    CentrosComponent,
    FormacionesComponent,
    AnioacademicoComponent,
    EducadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
