import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'contador',
    templateUrl: 'contador.component.html'
})

export class ContadorComponent{
    valor : number = 0;

    constructor(){}

    incrementa(){
        this.valor++;
    }

    decrementa(){
        this.valor--;
    }
}