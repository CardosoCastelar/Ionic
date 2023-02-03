import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FiltroBusquedaComponent } from './shared/filtro-busqueda/filtro-busqueda.component';
import { IonicModule } from '@ionic/angular';

//import * as CanvasJSAngularChart from '../../lib/canvasjs.angular.component';
import { FormsModule } from '@angular/forms';
import { TablaVideojuegosComponent } from './videojuegos/tabla-videojuegos/tabla-videojuegos.component';
import { RouterModule } from '@angular/router';
import {VideojuegosPorEstadoComponent} from "./dashboard/videojuegos-por-estado/videojuegos-por-estado.component";
//import {CanvasJSChart} from "../../lib/canvasjs.angular.component";


@NgModule({
  declarations: [
    //CanvasJSChart,
    HeaderComponent,
    VideojuegosPorEstadoComponent ,
    FiltroBusquedaComponent,
    TablaVideojuegosComponent
  ],
  exports: [
    HeaderComponent,
    VideojuegosPorEstadoComponent,
    FiltroBusquedaComponent,
    TablaVideojuegosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
