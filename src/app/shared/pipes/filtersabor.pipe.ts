import { Pipe, PipeTransform } from '@angular/core';
import { Ihelados } from 'src/app/Models/ihelados';

@Pipe({
  name: 'filtersabor'
})
export class FiltersaborPipe implements PipeTransform {

  transform(sabores:Ihelados[], search:string=""): Ihelados[] {
    const filterSabores = sabores.filter(sabor=>sabor.sabor.includes(search));
    return filterSabores;
  }

}
