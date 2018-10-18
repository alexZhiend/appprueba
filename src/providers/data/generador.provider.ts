import { Injectable } from '@angular/core';

export const pathInstancia = 'Instancia';

@Injectable()
export class GeneradorProvider {

    constructor() {
    }

    getNumberGenertor(code: string, value: string): string {
        return code.substring(0, 1) + value;
    }

}
