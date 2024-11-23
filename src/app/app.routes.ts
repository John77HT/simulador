import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { DocentesComponent } from './pages/docentes/docentes.component';
import { MateriasComponent } from './pages/materias/materias.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'docentes', component: DocentesComponent },
    { path: 'materias', component: MateriasComponent },
];
