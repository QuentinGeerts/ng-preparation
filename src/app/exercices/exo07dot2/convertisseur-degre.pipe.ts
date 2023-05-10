import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertisseurDegre'
})
export class ConvertisseurDegrePipe implements PipeTransform {

  transform (value: number, unite: string): number {

    if (unite === 'fahrenheit') return (value * 9 / 5) + 32;
    if (unite === 'celsius') return (value - 32) * 5 / 9;

    return value;
  }

}
