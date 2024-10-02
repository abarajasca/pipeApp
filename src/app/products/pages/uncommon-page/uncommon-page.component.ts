import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name ='Melisa';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Maria','Pedro','Henando','Melisa','Natalia']
  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando.',
    '=1': 'Tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando.'
  }

  public deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe

  public person = {
    name: 'Fernando',
    age:  36,
    address: 'Ottawa, Canada'
  }

  // Async Pipe
  public myObservableTimer = interval(2000);



}
