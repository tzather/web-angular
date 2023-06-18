import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private _config: any = {};

  constructor() {
    fetch('/assets/config.json').then(
      res => res.json().then(
        data => this._config = data
      )
    );
  }

  public get identity() { return this._config.identity }
  public get dashboard() { return this._config.dashboard }
}
