import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FetchForecastService } from '../services/fetch-forecast.service';

@Component({
  selector: 'app-forecast-week',
  templateUrl: './forecast-week.component.html'
})
export class ForecastWeekComponent implements OnInit {

  data$: Observable<any>;

  constructor(private route: ActivatedRoute, private router: Router, private ffs: FetchForecastService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.data$ = this.ffs.getFiveDayForecast(params.zipcode);
    });
  }

  back() {
    this.router.navigate(['/']);
  }

}
