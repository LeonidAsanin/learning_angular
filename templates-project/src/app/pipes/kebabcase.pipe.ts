import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabcase'
})
export class KebabcasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    // console.log('KebabcasePipe::transform', args);
    return value.toLowerCase().replace(/ /g, '-');
  }

}
