import { Component, Pipe } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

    public isUpperCase: boolean = false;

    toggleUpercase(){
      this.isUpperCase = !this.isUpperCase;
    }

    public heroes : Hero[] = [
      {
        name: 'Superman',
        canFly: true,
        color:  Color.blue
      },
      {
        name: 'Batman',
        canFly: false,
        color:  Color.black
      },
      {
        name: 'Daredevil',
        canFly: false,
        color:  Color.red
      },
      {
        name: 'Robin',
        canFly: false,
        color:  Color.green
      },
      {
        name: 'Linterna vede',
        canFly: true,
        color:  Color.green
      },
    ]

    public sortBy?: keyof Hero;

    changeSortBy(sortBy: keyof Hero) : void {
      this.sortBy = sortBy;
    }
}
