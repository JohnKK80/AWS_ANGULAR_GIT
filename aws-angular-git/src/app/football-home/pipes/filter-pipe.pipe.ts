import { Pipe, PipeTransform } from '@angular/core';
import { Footballer } from '../models/footballer.module';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string ): any {
    if( value.length < 1 || filterString === ""){
      return value
    }
    const resultArray = [];
    for(const item of value){
      if(item[propName] == filterString){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
