import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html'
})
export class VideosPage {
  video: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.video = this.navParams.data.video;
  }
  
}
