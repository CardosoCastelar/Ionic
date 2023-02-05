import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AutenticacionService } from './services/autenticacion.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  // Hace que se muestre u oculte el menú. Permie ocultarlo en el login
  showMenu: boolean = false;

  public appPages = [
    { title: 'Login', url: '/login', icon: 'mail' },
    { title: 'Dashboard', url: '/dashboard', icon: 'mail' },
    { title: 'Videojuegos', url: '/listado-videojuegos', icon: 'paper-plane' },
    { title: 'Usuarios', url: '/listado-usuarios', icon: 'paper-plane' },


  ];


  constructor(

    // Obtengo la instancia al router
    private router: Router,

    // Servicio de autenticación
    public autenticacionService: AutenticacionService
  ) {}

  ngOnInit(): void {

    this.router.events.pipe(

      // Filtra los elementos de entrada. Solo devuelve aquellos que cumplen el criterio
      filter(event => event instanceof NavigationEnd)

    ).subscribe((event: any) => {

      // IONIC -> He detectado que no entra aquí

      // La propiedad showMenu se iguala a startsWith auth ya que esto indica que estamos en login
      this.showMenu = !event.url.startsWith("/login");

    });

//    this.autenticacionService.escucharInicioSesion((si: boolean) => {
//      debugger;
//      this.showMenu = si;
//    });
  }

  cerrarSesion() {

    // Cierra la sesión
    this.autenticacionService.cerrarSesion();

    // Navega a la página de login
    this.router.navigate([ '/login' ]);
  }

}
