import { Pipe, PipeTransform } from '@angular/core';
import { Ihelados } from 'src/app/Models/ihelados';

@Pipe({
  name: 'filtersabor'
})
export class FiltersaborPipe implements PipeTransform {

  transform(sabores:Ihelados[], page:number=0,search:string=""): Ihelados[] {

    if(search.length === 0)
    return sabores.slice(page, page + 5);

    const filterSabores = sabores.filter(sabor=>sabor.sabor.includes(search));
    return filterSabores.slice(page, page + 5);
  }

}
