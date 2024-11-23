import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Materia } from '../models/materia';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private usuarios: Usuario[] = [];
  private materias: Materia[] = [];
  private nextUsuarioId = 1;
  private nextMateriaId = 1;

  constructor() {}

  getUsuarios(): Usuario[] {
    return this.usuarios;
  }

  addUsuario(usuario: Usuario): void {
    usuario.id = this.nextUsuarioId++;
    this.usuarios.push(usuario);
  }

  getMaterias(): Materia[] {
    return this.materias;
  }

  addMateria(materia: Materia): void {
    materia.id = this.nextMateriaId++;
    this.materias.push(materia);
  }
}
