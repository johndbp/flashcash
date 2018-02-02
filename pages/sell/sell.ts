import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-sell',
  templateUrl: 'sell.html'
})
export class SellPage {
  posts: any;
  e: any;

  constructor(public navCtrl: NavController, public http: Http, public app: App) {
    this.http.get('http://18.231.29.251/flash/users.php').map(res => res.json()).subscribe(data => {
        this.posts = data;
    });
  }

  back(){
    this.app.getRootNav().setRoot(HomePage);
  }
}
