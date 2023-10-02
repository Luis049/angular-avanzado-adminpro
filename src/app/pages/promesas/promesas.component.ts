import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
})
export class PromesasComponent implements OnInit {
  ngOnInit(): void {
    this.getUsuarios().then((usuarios) => {
      console.log(usuarios);
    });

    // const promesa = new Promise( ( resolve, reject ) => {

    //   if ( false ) {
    //     setTimeout( () => {
    //       resolve('Promesa Terminada');
    //     }, 3000);
    //   } else {
    //     reject ( 'algo salio mal');
    //   }

    // });

    // promesa.then( (mensaje) => {
    //   console.log( mensaje );
    // })
    // .catch( error => console.log('Error de mi promesa', error))

    // console.log('Fin de init')
  }

  getUsuarios() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data));
    });
  }
}
