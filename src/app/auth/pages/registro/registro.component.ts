import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {  

  miFormulario: FormGroup = this.fb.group ({

    nombre   : ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)] ],
    email    : ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator] ],
    username : ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password : ['', [Validators.required, Validators.minLength(6)] ],
    password2: ['', [Validators.required ]],
  }, {
    validators: [ this.validatorService.camposIguales('password','password2')]

  });

   get emailErrorMsg(): string {
    const errors= this.miFormulario.get('email')?.errors;
    if (errors?.required){
      return 'Email es Obligatorio'
    }else if (errors?.pattern){
      return 'El formato no es valido'
    }else if ( errors?.emailTomado){
      return 'Email no esta disponible'
    }
    return ''
   }

  



  constructor(private fb: FormBuilder,
              private validatorService: ValidatorService,
              private emailValidator: EmailValidatorService ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre:'Caro V',
      email:'carov@gmail.com',
      username: 'carovh',
      password: 123456,
      password2: 123456
    })
  }

  campoNoValido( campo: string) {

    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }

  // emailRequired(){
  //   return this.miFormulario.get('email')?.errors?.required
  //           && this.miFormulario.get('email')?.touched;
  // }

  // emailFormato() {
  //   return this.miFormulario.get('email')?.errors?.pattern
  //     && this.miFormulario.get('email')?.touched;
  // }

  // emailTomado() {
  //   return this.miFormulario.get('email')?.errors?.emailTomado
  //     && this.miFormulario.get('email')?.touched;
  //}
  
  submitFormulario(){

    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
