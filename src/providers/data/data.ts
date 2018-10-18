import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


export const pathInstancia = 'Instancia';

@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

getInstancia(){
  let ref = firebase.database().ref(pathInstancia);
  ref.on("value", resp => {
    console.log(resp);
  });
}

}
