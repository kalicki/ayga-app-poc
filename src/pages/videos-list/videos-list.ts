import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, AlertController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { VideosProvider } from '../../providers/videos/videos';

@IonicPage({})
@Component({
  selector: 'page-videos-list',
  templateUrl: 'videos-list.html'
})
export class VideosListPage {
  videos: any[];
  page: number;
  // Ref: https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(
    public navCtrl: NavController, 
    private alertCtrl: AlertController,
    public navParams: NavParams, 
    private videoProvider: VideosProvider) {
  }

  // Execute on enter (active) in Page
  // Ref: https://ionicframework.com/docs/api/navigation/NavController/
  ionViewDidEnter() {
    this.videos = [];
    this.page = 1;
    this.infiniteScroll.enable(true);
    this.showAllVideos(this.page);
  }

  // Return all videos
  showAllVideos(page: number) {
    this.videoProvider.getAll(page).then((result: any) => {
      // Push date in array for pagination
      for (var i = 0; i < result.data.length; i++) {
        var user = result.data[i];
        this.videos.push(user);
      }

      // Load inifitescroll
      if (this.infiniteScroll) {
        this.infiniteScroll.complete();

        // Disable infinitescroll If you dont have any more videos
        if (this.videos.length == result.pagination.total) {
          this.infiniteScroll.enable(false);
        }
      }
    })
    .catch((error: any) => {
      // Error alert
      this.alertCtrl.create({
        message: 'Falha no carregamento'
      }).present();
    });
  }

  // Function for pagination on inifitescroll  
  getVideos() {
    setTimeout(() => {
      this.page += 1;
      this.showAllVideos(this.page);
    }, 200);
  }

  openVideo(id: number) {
    this.videoProvider.getVideo(id)
      .then((result: any) => {
        this.navCtrl.push('VideosPage', { video: result.data });
      })
      .catch((error: any) => {
        // Error alert
        this.alertCtrl.create({
          message: 'Falha no carregamento do vídeo'
        }).present();
      });
  }
}
