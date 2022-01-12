import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroyear',
  pure: false,
})
export class FiltroyearPipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    if (!items || !filter) {
        return items;
    }
    return items.filter(item => item.year.toString().indexOf(filter) !== -1);
}

}
