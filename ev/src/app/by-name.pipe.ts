import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byName',
  standalone: true
})
export class ByNamePipe implements PipeTransform {

  transform(inputList:any[], pattern:string): any[] {
    if (!inputList) return []
    else return inputList.filter( e => e.name.toLowerCase().includes(pattern.toLowerCase() ))
  }

}
