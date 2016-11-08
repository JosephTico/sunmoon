import {Component} from "@angular/core";
import {NavController, NavParams, LoadingController, Platform} from "ionic-angular";
import {PostsProvider} from "../../providers/posts";
import {PostContent} from "../../models/posts";

/*
  Generated class for the GuiaContent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

declare var cordova: any;

@Component({
  selector: 'page-guia-content',
  templateUrl: 'guia-content.html'
})
export class GuiaContentPage {
  id: number;
  post: PostContent;
  loader;
  platform;

  constructor(platform: Platform, public navCtrl: NavController, private navParams: NavParams, private postsProvider: PostsProvider, public loadingCtrl: LoadingController) {
    this.platform = platform;
    window.open = (url, target?, opts?) => cordova.plugins.browsertab.openUrl(url);

    this.loader = loadingCtrl.create({
      content: "Cargando..."
    });
    this.loader.present();

    this.id = navParams.get('id');
    postsProvider.loadDetails(this.id).subscribe(post => {
      this.post = post;
      this.loader.dismiss();
    })
  }

  launch(url) {
    this.platform.ready().then(() => {
      cordova.plugins.browsertab.openUrl(url);
    });
  }

  ionViewDidLoad() {
    console.log('Hello GuiaContentPage Page');
  }

}
