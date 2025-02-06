import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelosComponent } from './pages/modelos/modelos.component';
import { VerModeloComponent } from './componentes/componentes/ver-modelo/ver-modelo.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RegistroUsuarioComponent } from './componentes/componentes/registro-usuario/registro-usuario.component';

export const routes: Routes = [
    { path: '', redirectTo: '/welcome/registro', pathMatch: 'full' }, // Redirige al registro dentro de Welcome
    {
      path: 'welcome',
      component: WelcomeComponent,
      children: [
        { path: 'registro', component: RegistroUsuarioComponent },
        { path: 'modelos', component: ModelosComponent },
        { path: 'visor-3d/:id', component: VerModeloComponent },
    
    ]
    },
    
    { path: '**', redirectTo: '/welcome/registro' } // Redirige a la página de registro dentro de Welcome
  ];
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
