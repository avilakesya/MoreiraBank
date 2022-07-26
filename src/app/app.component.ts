import { Component } from '@angular/core';

// meta dados que adiciona propriedades a minha classe
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];

  transferir($event: any) {
    console.log($event);
    const transferencia = {...$event, data: new Date()}
    this.transferencias.push(transferencia);
  }
}
