import { Component } from '@angular/core';
import { get } from 'scriptjs';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    constructor() {
        get('../assets/main.js', () => {
            console.log('Funcionando!');
        });
    }
}
