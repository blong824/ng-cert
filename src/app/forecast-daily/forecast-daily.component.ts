import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-forecast-daily',
  templateUrl: './forecast-daily.component.html',
  styleUrls: ['./forecast-daily.component.css'],
  providers: [DatePipe]
})
export class ForecastDailyComponent implements OnInit {

  @Input() data;

  date;

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    this.date = this.datePipe.transform(new Date(this.data.dt_txt), 'EEEE, MMMM d');
  }

}
