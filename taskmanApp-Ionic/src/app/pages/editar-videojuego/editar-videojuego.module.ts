import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {EditarVideojuegoPageRoutingModule} from './editar-videojuego-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';
import {EditarVideojuegosPage} from "./editar-videojuego.page";

@NgModule({
    declarations: [EditarVideojuegosPage],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IonicModule,
        EditarVideojuegoPageRoutingModule,
        ComponentsModule
    ]
})
export class EditarVideojuegoPageModule {}
