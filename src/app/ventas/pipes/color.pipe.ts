import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: number): string {

    switch( value ){
      
      case 0:
        return 'rojo';
      
      case 1:
        return 'negro';

      case 2:
          return 'azul';

      case 3:
        return 'verde';

      default:
        return '';
    }
  }

}
