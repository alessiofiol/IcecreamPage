import { Pipe, PipeTransform } from '@angular/core';
import { Ihelados } from 'src/app/Models/ihelados';

@Pipe({
  name: 'filterespecial'
})
export class FilterespecialPipe implements PipeTransform {

  transform(especialidades:Ihelados[], page:number=0, search:string=""): Ihelados[] {

    if(search.length === 0)
    return especialidades.slice(page, page + 4);

    const filterEspecialidades = especialidades.filter(especialidad=>especialidad.sabor.includes(search));
    return filterEspecialidades.slice(page, page + 4);
  }

}
