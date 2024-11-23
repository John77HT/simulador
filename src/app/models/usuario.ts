export interface Usuario {
    id: number;           // Identificador único del usuario
    nombre: string;       // Nombre del usuario
    tipo: 'Alumno' | 'Docente'; // Tipo de usuario: Alumno o Docente
    email: string;        // Correo electrónico del usuario
}
