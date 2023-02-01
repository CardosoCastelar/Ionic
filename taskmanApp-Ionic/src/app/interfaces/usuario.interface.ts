export interface TaskmanLoginResponse {
    ok:      number;
    mensaje: string;
    datos:   Usuario;
}

export interface Usuario {
  id?:             number;
  username:        string;
  nombreCompleto?: string;
  rol:             string;
  createdAt?:      Date;
  updatedAt?:      Date;
}
