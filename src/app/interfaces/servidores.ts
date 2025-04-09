export interface Servidores {
    id: number;
    nombre: string;
    primer_apellido: string;
    segundo_apellido: string | null;
    curp: string | null;
    rfc: string | null;
    homoclave: string | null;
    fecha_inicio: string; 
    cargo: string;
    nivel_cargo: string;
    cve_issemym: string | null;
    tipo_dependencia: number;
    tipo_direccion: number | null;
    tipo_departamento: number | null;
    honorarios: number | null;
    c_institucional: string | null;
    c_personal: string | null;
    telefono_casa: string | null;
    celular: string | null;
    nacionalidad: string | null;
    observaciones: string | null;
    registro: boolean; 
    verificacion: boolean; 
    presenta_version_larga: boolean; 
    deleted_at: string | null;
  }

