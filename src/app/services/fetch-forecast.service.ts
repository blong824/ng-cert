import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const appId = '5a4b2d457ecbef9eb2a71e480b947604';
const baseUrl = 'https://api.openweathermap.org/data/2.5/';
@Injectable({
  providedIn: 'root'
})
export class FetchForecastService {

  constructor(private http: HttpClient) { }

  getOneDayForecast(zip: string) {
    return this.get('weather', zip);
  }

  getFiveDayForecast(zip: string) {
    return this.get('forecast', zip);
  }

  private get(forecastType: string, zip: string): Observable<any> {
    const url = `${baseUrl}${forecastType}?zip=${zip}&appId=${appId}`;

    return this.http.get(url)
      .pipe(
        catchError(this.errorHandler)
      );
  }



  private errorHandler(error: HttpResponse<any>) {
    console.error(error);
    return of({ err: 'Problem communicating with the weather api.' });
  }

}
