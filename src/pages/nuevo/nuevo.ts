import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import * as firebase from 'firebase';
import { v4 as uuid } from 'uuid';
import { Generador } from '../../denominacion/generador';

@IonicPage()
@Component({
  selector: 'page-nuevo',
  templateUrl: 'nuevo.html',
})
export class NuevoPage {

  listaInstancias: any;
  listaEspecialidades: any;
  ref = firebase.database().ref('Instancia');
  ref1 = firebase.database().ref('Especialidades');
  selectIns: string='';
  selectEsp: string='';
  year: any; 
  numExp:number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
            private generador: Generador) {
    this.loadData();
  }


  loadData(){
    this.ref.on("value", resp => {
      this.listaInstancias=snapshotToArray(resp);
    });
    this.ref1.on("value", resp1 =>{
      this.listaEspecialidades=snapshotToArray(resp1);
    });
  }



  enviarSlctd(){
    //let e = this.generador.nombre(this.selectEsp,this.selectIns);

    let model = { key: uuid(),
                  Especialidad: this.selectEsp ,
                  Instancia: this.selectIns,
                  DistritoJudicial: "Ayacucho",
                  año: this.year,
                  numero: this.numExp};
    firebase.database().ref('Expedientes/' + model.key).set(model);
/*     var solicitudRef = firebase.database().ref().child("");
    solicitudRef.push({selectIns: });  */
  }

}

export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(element => {
    let item = element.val();
    item.key = element.key;
    returnArr.push(item);
  });
  return returnArr;
};