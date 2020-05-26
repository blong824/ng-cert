import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  zip_key = 'zip-codes';

  public zipCodeSubject: BehaviorSubject<string[]>;

  constructor() {
    this.initStorage();
  }

  initStorage() {
    const initialValue = this.getData();
    this.zipCodeSubject = new BehaviorSubject<string[]>(initialValue);
  }

  private setData(data: string[]) {
    try {
      localStorage.setItem(this.zip_key, JSON.stringify(data));
      this.zipCodeSubject.next(data);
    } catch (e) {
      console.error("Unable to save zip code in local storage");
    }
  }

  private getData(): string[] {
    try {
      return JSON.parse(localStorage.getItem(this.zip_key)) || [];
    } catch (e) {
      console.error("Unable to get zip codes in local storage");
    }
  }

  setZip(zip: string) {
    try {
      const currentValues = this.getData();
      currentValues.push(zip);
      this.setData(currentValues);
    } catch (e) {
      console.error("Unable to save zip code in local storage");
    }
  }

  removeZip(zip: string) {
    try {
      const zipCodes = this.getData();
      const index = zipCodes.indexOf(zip);
      if (index > -1) {
        const updatedList = [...zipCodes.slice(0, index), ...zipCodes.slice(index + 1)];
        this.setData(updatedList);
      }
    } catch (e) {
      console.error("Unable to remove zip code in local storage");
    }
  }
}
