import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[], search: string): any[] {

    if (!Array.isArray(value) || !search) {
      return value;
    }

    return value.sort((arg1, arg2) => {
      if (typeof arg1[search] === 'number' && typeof arg2[search] === 'number') {
        return arg1[search] - arg2[search];
      } else {
        return arg1[search].toString().toLowerCase().localeCompare(arg2[search].toString().toLowerCase());
      }
    });
  }

}
