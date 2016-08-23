import { Component } from '@angular/core';

import { ContadorComponent } from './primeiro/contador.component';

@Component({
    selector: 'my-app',
    template: `
        <contador></contador>
    `,
    directives: [ContadorComponent]
})
export class AppComponent { 

    }

