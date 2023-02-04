import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {tap} from 'rxjs';

import {VideojuegosService} from "../../services/videojuegos.service";
import {Videojuego} from "../../interfaces/videojuego.interface";
import {UsuariosService} from "../../services/usuarios.service";
import {Usuario} from "../../interfaces/usuario.interface";

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.page.html',
  styleUrls: ['./listado-usuarios.page.scss'],
})
export class ListadoUsuariosPage implements OnInit {

  // Lista de tareas
  usuarios: Usuario[] = [];


  constructor(

    // Servicio para mostrar diálogos
    private alertController: AlertController,
    // Acceso al backend
    private usuariosService: UsuariosService
  ) {
  }

  ngOnInit(): void {

    // Carga las tareas
    this.cargarUsuarios();
  }

  /**
   *  Método a invocar para lanzar la búsqueda
   */
  buscar(termino: string): void {

    // Aquí se hace la búsqueda por el término de búsqueda
    this.cargarUsuarios(termino);
  }


  /**
   *
   * @param filtro Método para cargar las tareas
   *
   */
  private cargarUsuarios(filtro: string | undefined = undefined) {

    // Cuando la pantalla se muestra se tienen que mostrar los videojuegos.
    this.usuariosService.getUsuariosPorNombreCompleto(filtro)

      .pipe(

        // Este tap lo hago solo para mostrar los datos que pasan por aquí
        tap(console.log)
      )

      .subscribe(response => {

        // Si la respuesta es OK, la lista de tareas se asigna a la respuesta
        if(response.ok) {

          this.usuarios = response.datos;

        } else {

          // Muestra el mensaje de error
          this.showAlert(response.mensaje, 'ERROR');
        }

      });
  }

  /**
   * Borrar tarea recibe el evento. El evento de la tabla de tareas emite el ID en la tabla
   *
   * @param indice
   */
  borrarUsuario(indice: number) {

    // Obtiene la tarea a eliminar
    const usuario = this.usuarios[indice];

    // Si el usuario me confirma que quiere eliminar la tarea, la elimina
    this.solicitarConfirmacion(`¿Está seguro de que quiere eliminar la tarea: ${usuario.nombre_completo}?`, 'Atención',
      () => {

        // Elimina la tarea
        this.usuariosService.borrarUsuario(usuario).subscribe((response) => {

          // Si la respuesta es OK, la lista de tareas se asigna a la respuesta
          if(response.ok) {

            // Elimina la tarea del array
            this.usuarios.splice(indice, 1);

          } else {

            // Muestra el mensaje de error
            this.showAlert(response.mensaje, 'ERROR');
          }
        });
      }
    );
  }


  async showAlert(mensaje: string, titulo: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async solicitarConfirmacion(mensaje: string, titulo: string, onOk: any) {

    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            onOk();
          },
        },
      ],
    });

    await alert.present();
  }

}
