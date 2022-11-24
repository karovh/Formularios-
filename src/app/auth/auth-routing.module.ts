import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoguinComponent } from './pages/loguin/loguin.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [

  {
    path:'',
    children: [
      {
        path: 'registro',
        component: RegistroComponent
      },
      {
        path:'loguin',
        component: LoguinComponent
      },
      {
        path: '**',
        redirectTo: 'registro'
      }

    ]
  }





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
