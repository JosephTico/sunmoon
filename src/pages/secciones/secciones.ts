import { Component } from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import { Post } from '../../models/posts';
import { PostsProvider } from '../../providers/posts';

/*
  Generated class for the Secciones page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-secciones',
  templateUrl: 'secciones.html'
})
export class SeccionesPage {
  postList: Post[];
  loader;


  constructor(public navCtrl: NavController, private posts: PostsProvider, public loadingCtrl: LoadingController) {
    this.loader = loadingCtrl.create({
      content: "Cargando..."
    });
    this.loader.present();

    posts.load().subscribe(posts => {
      this.postList = posts;
      this.loader.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log('Hello secciones Page');
  }

}
