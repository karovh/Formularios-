import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl( 'rtx4080ti'),
  //   precio     : new FormControl( 1500),
  //   existencias: new FormControl( 5),
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3) ]  ],
    precio: [, [Validators.minLength(0), Validators.required]  ],
    existencias: [, [Validators.minLength(0), Validators.required] ]
    
  })



  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.miFormulario.reset({
      nombre: 'RTX',
      precio: 1600
    })
    
  }


  campoEsValido(campo: string){

    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched;
  }

  guardar() {

    if( this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }
   
  }

}
 


// // Las validaciones asíncronas son aquellas en las cuales debemos hacer 
// una solicitud externa y de acuerdo a ello validar los datos, 
// por ejemplo para validar un nombre de usuario(usersname), 
// primero debemos hacer una solicitud a nuestra base de datos y 
// comprobar que el nombre de usuario está disponible,