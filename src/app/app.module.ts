import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ForecastTodayComponent } from './forecast-today/forecast-today.component';
import { ForecastWeekComponent } from './forecast-week/forecast-week.component';
import { ZipcodeEntryComponent } from './zipcode-entry/zipcode-entry.component';
import { ForecastContainerComponent } from './forecast-container/forecast-container.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { ForecastDailyComponent } from './forecast-daily/forecast-daily.component';
import { WeatherImageComponent } from './weather-image/weather-image.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ForecastTodayComponent,
    ForecastWeekComponent,
    ZipcodeEntryComponent,
    ForecastContainerComponent,
    ForecastDailyComponent,
    WeatherImageComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
