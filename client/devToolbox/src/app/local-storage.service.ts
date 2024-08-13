import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LocalStorageService {
  appPrefix: string =  'devToolBox';

  set(key: string, value: any) {
    key = `${this.appPrefix}_${key}`;
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    key = `${this.appPrefix}_${key}`;
    return JSON.parse(localStorage.getItem(key) ?? '') ?? []
  }

  constructor() { }
}