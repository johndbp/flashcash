import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  constructor(public navCtrl: NavController, public app: App) {

  }

  back(){
    this.app.getRootNav().setRoot(HomePage);
  }
}
