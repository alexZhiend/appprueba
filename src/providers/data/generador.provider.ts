import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
 
export const pathInstancia = 'Instancia';


@Injectable()
export class GeneradorProvider {

selectIns : any;

    constructor() {
    }

    getNumberGenertor(code: string, value: string): string {
        return code.substring(0, 1) + value;
    }

}
