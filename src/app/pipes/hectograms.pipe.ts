import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  standalone:true,
  name: 'hectograms'
})
export class HectogramPipe implements PipeTransform{
  transform(value: number, factor: number = 1): number {
    return (value * 10) / factor;
  }
}
