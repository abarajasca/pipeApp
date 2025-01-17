import { Pipe, PipeTransform } from "@angular/core";

// Example:
// string | toggleCase = 'STRING'
// STRING | toggleCase = 'string'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUpper: boolean = false) {

    return  ( toUpper ? value.toUpperCase() : value.toLowerCase());
  }

}
