import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FetchForecastService } from '../services/fetch-forecast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forecast-today',
  templateUrl: './forecast-today.component.html'
})
export class ForecastTodayComponent implements OnInit {

  @Input() zip: string;

  @Output() removeZipEvent: EventEmitter<string> = new EventEmitter<string>();

  data$: Observable<any>;

  constructor(private ffs: FetchForecastService) { }

  ngOnInit() {
    this.data$ = this.ffs.getOneDayForecast(this.zip);
  }

  removeZip(zip: string) {
    this.removeZipEvent.emit(zip);
  }

}
