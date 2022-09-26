import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value:any) {
    value.sort((a:any,b:any) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0);
    return value;
  }

}
