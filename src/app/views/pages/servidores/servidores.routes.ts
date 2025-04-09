import { Routes } from "@angular/router";

export default [
    { path: '', redirectTo: 'registro', pathMatch: 'full' },
    {
        path: 'registro',
        loadComponent: () => import('./registro/registro.component').then(c => c.RegistroComponent) 
    }
] as Routes;