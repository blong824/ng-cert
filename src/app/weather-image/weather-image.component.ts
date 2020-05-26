import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-image',
  templateUrl: './weather-image.component.html'
})
export class WeatherImageComponent {

  @Input() weather;

  @Input() width;

  @Input() height;

}
