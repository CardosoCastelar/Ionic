<?php
class LnUsuarios {
		
		private static $instancia;
		private $db;

		function __construct() {
			$this->db = Conexion::singleton_conexion();
		}

		public static function singletonUsuarios(){
			if(!isset(self::$instancia)){
				$miclase= __CLASS__;
				self::$instancia = new $miclase;
			}
			return self::$instancia;
		}

		public function getSelectUsuariosPorNombre($filtro){

			// Carga el singleton 
			$usuarios = Usuarios::singletonUsuarios();

			// Carga la tabla 
			$r = $usuarios->getSelectPorNombre($filtro);

			// Retorna la tabla de tareas 
			return $r;
		}
	}
?>