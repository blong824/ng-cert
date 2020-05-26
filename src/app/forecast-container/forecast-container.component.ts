import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-forecast-container',
  templateUrl: './forecast-container.component.html'
})
export class ForecastContainerComponent implements OnInit {

  zipCodes: string[] = [];

  constructor(private ls: LocalStorageService) { }

  ngOnInit() {
    this.ls.zipCodeSubject.subscribe(zipCodes => this.zipCodes = zipCodes);
  }

  addZipCode(zipCode: string) {
    this.ls.setZip(zipCode);
  }

  removeZipCode(zipCode: string) {
    this.ls.removeZip(zipCode);
  }

}
