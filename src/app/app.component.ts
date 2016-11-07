import {Component} from "@angular/core";
import {Platform} from "ionic-angular";
import {StatusBar} from "ionic-native";
import {TabsPage} from "../pages/tabs/tabs";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  // make HelloIonicPage the root (or first) page
  rootPage: any = TabsPage;

  constructor(public platform: Platform,) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.overlaysWebView(false);
      StatusBar.backgroundColorByHexString("#981d1d");
    });
  }

}
