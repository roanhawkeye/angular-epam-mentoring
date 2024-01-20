import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  standalone: true,
  name: 'decimeter'
})
export class DecimeterPipe implements PipeTransform{

  transform(value: number) {
    return value / 10;
  }

}
