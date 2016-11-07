import {Component} from "@angular/core";
import {NoticiasPage} from "../noticias/noticias";
import {SeccionesPage} from "../secciones/secciones";
import {MainPage} from "../main/main";

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  pages: Array<{title: string, icon: string, component: any}>;

  constructor() {
    this.pages = [
      { title: 'Inicio', icon: 'home', component: MainPage },
      { title: 'Guías', icon: 'map', component: SeccionesPage },
      { title: 'Noticias', icon: 'paper', component: NoticiasPage }
    ];
  }

  ionViewDidLoad() {
    console.log('Hello TabsPage Page');
  }

}
