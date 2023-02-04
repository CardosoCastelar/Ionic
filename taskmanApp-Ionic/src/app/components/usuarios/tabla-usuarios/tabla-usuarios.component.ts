import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Usuario} from "../../../interfaces/usuario.interface";

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss'],
})
export class TablaUsuariosComponent {

 /**
   * Esto es el array de tareas que se va a renderizar
   */
  @Input() usuarios: Usuario[] = [];

  /**
   * Evento que se va a emitir desde este componente cuando se quiera
   * borrar une tarea
   */
  @Output() onBorrar: EventEmitter<number> = new EventEmitter();

  constructor() { }

  /**
   * Bara borrar tarea se pasa el índice dentro de la tabla de tareas.
   * Más que nada porque luego se evita tener que recorrer la tabla para hacer la eliminación
   *
   * @param indice
   */
  borrarUsuario(indice: number): void {
    this.onBorrar.emit(indice);
  }

}
