import { createViewChild } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {


  @ViewChild('miFormulario') miFormulario!: NgForm; 

  initForm={
    producto: 'moto',
    precio: 10,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls.producto?.invalid 
           && this.miFormulario?.controls.producto?.touched

  }

  precioValido(): boolean {
    return this.miFormulario?.controls.precio?.value < 1
      && this.miFormulario?.controls.precio?.touched
  }

  guardar(){

    console.log('posteo correcto');



    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });

  }

}
