import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastWeekComponent } from './forecast-week/forecast-week.component';
import { ForecastContainerComponent } from './forecast-container/forecast-container.component';

const routes: Routes = [
  { path: '', component: ForecastContainerComponent },
  { path: 'forecast/:zipcode', component: ForecastWeekComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
