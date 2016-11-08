import {Component} from "@angular/core";
import {NavController, NavParams, LoadingController, Platform} from "ionic-angular";
import {PostsProvider} from "../../providers/posts";
import {PostContent} from "../../models/posts";
import {SocialSharing} from "ionic-native";


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
  title: string;
  excerpt: string;
  image: string;
  post: PostContent;
  loader;
  platform;

  constructor(platform: Platform, public navCtrl: NavController, private navParams: NavParams, private postsProvider: PostsProvider, public loadingCtrl: LoadingController) {
    this.platform = platform;

    this.loader = loadingCtrl.create({
      content: "Cargando..."
    });
    this.loader.present();

    this.id = navParams.get('id');
    this.title = navParams.get('title');
    this.excerpt = navParams.get('excerpt');
    this.image = navParams.get('image');

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

  share() {
    let options = {
      subject: 'Revisa esta guía',
      message: this.title + ' - Guía de Pokémon Sol y Luna',
      url: this.post.link,
      chooserTitle: 'Compartir con...' // Android only, you can override the default share sheet title
    };
    SocialSharing.shareWithOptions(options);
  }

}
