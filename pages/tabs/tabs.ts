import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { SellPage } from '../sell/sell';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SellPage;
  tab2Root = MapPage;

  constructor() {

  }
}
