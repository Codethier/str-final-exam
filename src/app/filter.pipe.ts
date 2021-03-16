import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], key: string, search: string | boolean | number ): any[] {
    if (!Array.isArray(value) || !key || !search) {
      return value;
    }

    search = typeof search !== 'number' ? ('' + search).toLowerCase() : search;

    return value.filter(item => {
      if (typeof item[key] === 'number' && typeof search === 'number') {
        return item[key] === search;
      }

      return ('' + item[key]).toLowerCase().includes((search as string));
    });
  }

}
