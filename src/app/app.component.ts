import {Component} from "@angular/core";
import {Platform, ToastController} from "ionic-angular";
import {StatusBar} from "ionic-native";
import {TabsPage} from "../pages/tabs/tabs";
import {Network} from 'ionic-native';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  // make HelloIonicPage the root (or first) page
  rootPage: any = TabsPage;
  connected: boolean = true;

  constructor(public platform: Platform, private toastCtrl: ToastController) {
    this.initializeApp();
  }

  presentDisconnectToast() {
    let toast = this.toastCtrl.create({
      message: 'No hay conexión a internet. La aplicación podría no funcionar correctamente.',
      showCloseButton: true,
      closeButtonText: "Ok",
      position: 'bottom'
    });

    toast.present();
  }

  presentConnectToast() {
    let toast = this.toastCtrl.create({
      message: 'Se ha restablecido la conexión a internet.',
      showCloseButton: true,
      closeButtonText: "Recargar",
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      window.location.reload(true);
    });

    toast.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      StatusBar.backgroundColorByHexString("#981d1d");

      if (Network.connection == "none") {
        if (this.connected == true) {
          this.presentDisconnectToast();
        }
      }

      Network.onDisconnect().subscribe(() => {
        if (this.connected == true) {
          this.connected = false;
          this.presentDisconnectToast();
        }
      });

      Network.onConnect().subscribe(() => {
        if (this.connected == false) {
          this.presentConnectToast();
        }
      });

    });
  }

}
