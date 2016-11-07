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
      { title: 'Sección principal', icon: 'water', component: MainPage },
      { title: 'Guías', icon: 'water', component: SeccionesPage },
      { title: 'Noticias', icon: 'water', component: NoticiasPage }
    ];
  }

  ionViewDidLoad() {
    console.log('Hello TabsPage Page');
  }

}
