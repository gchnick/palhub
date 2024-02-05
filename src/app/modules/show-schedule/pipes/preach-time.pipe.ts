import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'preachTime',
  standalone: true,
})
export class PreachTimePipe implements PipeTransform {
  transform(date: Date, durationMinutes: number): string {
    const isOclock = date.getMinutes() === 0;
    const duration = moment.duration(durationMinutes, 'minutes');
    const init = isOclock
      ? moment(date).format('h')
      : moment(date).format('h:mm');
    const end = isOclock
      ? moment(date).add(duration).format('h A')
      : moment(date).add(duration).format('h:mm A');
    return `${init} - ${end}`;
  }
}
