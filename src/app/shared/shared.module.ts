import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ReactiveModule } from '../reactive/reactive.module';
import { TemplateModule } from '../template/template.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    
    RouterModule
  ],
  exports:[
    SidemenuComponent
  ]
})
export class SharedModule { }
