import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {tap} from 'rxjs';

import {VideojuegosSpringService} from "../../services/videojuegos-spring.service";
import {Videojuego} from "../../interfaces/videojuego.interface";
import {DialogService} from "../../shared/services/dialog.service";

@Component({
  selector: 'app-listado-videojuegos',
  templateUrl: './listado-videojuegos.page.html',
  styleUrls: ['./listado-videojuegos.page.scss'],
})
export class ListadoVideojuegosPage implements OnInit {

  // Lista de tareas
  videojuegos: Videojuego[] = [];


  constructor(
    // Servicio para mostrar diálogos
    private dialogService: DialogService,
    // Servicio para mostrar diálogos
    private alertController: AlertController,
    // Acceso al backend
    private videojuegosService: VideojuegosSpringService
  ) {
  }

  ngOnInit(): void {

    // Carga las tareas
    this.cargarVideojuegos();
  }

  /**
   *  Método a invocar para lanzar la búsqueda
   */
  buscar(termino: string): void {

    // Aquí se hace la búsqueda por el término de búsqueda
    this.cargarVideojuegos(termino);
  }


  /**
   *
   * @param filtro Método para cargar las tareas
   *
   */
  private cargarVideojuegos(filtro: string | undefined = undefined) {

    // Cuando la pantalla se muestra se tienen que mostrar los videojuegos.
    this.videojuegosService.getVideojuegosPorTitulo(filtro)

      .pipe(

        // Este tap lo hago solo para mostrar los datos que pasan por aquí
        tap(console.log)
      )

      .subscribe({

        // Reciebe el siguiente valor
        next: (videojuegos: Videojuego[]) =>  {

          // Carga los datos
          this.videojuegos = videojuegos;

          // Muestra el videojuego en el log
          console.log('Cargados videojuegos: '+videojuegos.length);
        },

        // El observer ha recibido una notificación completa
        complete: () => {
        },

        // El observer ha recibido un error
        error: (error: any) => {

          // Muestra un mensaje de error
          this.dialogService.mostrarMensaje('No ha sido posible cargar los videojuegos: '+ error, 'ERROR');

          // Muestra el error por consola
          console.log(error);
        }
      });
  }

  /**
   * Borrar tarea recibe el evento. El evento de la tabla de tareas emite el ID en la tabla
   *
   * @param indice
   */
  borrarVideojuego(indice: number) {

    // Obtiene la tarea a eliminar
    const videojuego = this.videojuegos[indice];

    // Si el usuario me confirma que quiere eliminar la tarea, la elimina
    this.solicitarConfirmacion(`¿Está seguro de que quiere eliminar el videojuego: ${videojuego.titulo}?`, 'Atención',
      () => {

        // Elimina la tarea
        this.videojuegosService.borrarVideojuego(videojuego).subscribe((response: any) => {

          // Si la respuesta es OK, la lista de tareas se asigna a la respuesta
          if (response.ok) {

            // Elimina la tarea del array
            this.videojuegos.splice(indice, 1);

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
