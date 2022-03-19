import { Pipe, PipeTransform } from '@angular/core';
import { Ihelados } from 'src/app/Models/ihelados';

@Pipe({
  name: 'filterespecial'
})
export class FilterespecialPipe implements PipeTransform {

  transform(especialidades:Ihelados[], search:string=""): Ihelados[] {
    const filterEspecialidades = especialidades.filter(especialidad=>especialidad.sabor.includes(search));
    return filterEspecialidades;
  }

}
