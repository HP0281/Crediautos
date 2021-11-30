import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilterpipe',
  pure: false,
})
export class MyfilterpipePipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    if (!items || !filter) {
        return items;
    }
    return items.filter(item => item.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1);
}
}