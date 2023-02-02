<?php
class LnVideojuegos {
		
		private static $instancia;
		private $db;

		function __construct() {
			$this->db = Conexion::singleton_conexion();
		}

		public static function singletonVideojuegos(){
			if(!isset(self::$instancia)){
				$miclase= __CLASS__;
				self::$instancia = new $miclase;
			}
			return self::$instancia;
		}

		/**
		 * En caso de error este método podría lanzar una excepción
		 */
		public function addVideojuego(Videojuego $v){
			// Carga el singleton de tareas
			$videojuegos = Videojuegos::singletonVideojuegos();

			// Añade la tarea
			$videojuegos->addVideojuego($v);
			
			return $v;
		}

		/**
		 * Actualiza la tarea
		 */
		public function setVideojuego(Videojuego $v){
			
			// Carga el singleton de tareas
			$videojuegos = Videojuegos::singletonVideojuegos();

			// Añade la tarea
			$videojuegos->setVideojuego($v);
			
			return $v;
		}

		public function getVideojuegoPorId($id){
			
			// Carga el singleton de tareas
			$videojuegos = Videojuegos::singletonVideojuegos();

			// Carga la tabla de tareas
			$r = $videojuegos->getVideojuegoPorId($id);

			// Retorna la tarea
			return $r;
		}

		public function getListadoVideojuegosFiltradasPorTitulo($filtro){

			// Carga el singleton de tareas
			$videojuegos = Videojuegos::singletonVideojuegos();

			// Carga la tabla de tareas
			$r = $videojuegos->getListadoVideojuegosFiltradasPorTitulo($filtro);

			// Retorna la tabla de tareas 
			return $r;
		}

		public function getResumenVideojuegosPorEstado() {
			// Carga el singleton de tareas
			$videojuegos = Videojuegos::singletonVideojuegos();

			// Carga la tabla de tareas
			$r = $videojuegos->getResumenVideojuegosPorEstado();

			// Retorna la tabla de tareas 
			return $r;
		}

		public function deleteVideojuego($id){
			
			// Carga el singleton de tareas
			$videojuegos = Videojuegos::singletonVideojuegos();

			// Carga la tabla de tareas
			$r = $videojuegos->deleteVideojuego($id);

			// Retorna la tarea
			return $r;
		}

	}
?>