import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";
import {MaterialModule} from "@angular/material";
import {MainPage} from "../pages/main/main";
import {NoticiasPage} from "../pages/noticias/noticias";
import {SeccionesPage} from "../pages/secciones/secciones";
import {PostsProvider} from "../providers/posts";
import {HttpModule, JsonpModule} from "@angular/http";
import {TabsPage} from "../pages/tabs/tabs";
import {GuiaContentPage} from "../pages/guia-content/guia-content";


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MainPage,
    SeccionesPage,
    NoticiasPage,
    GuiaContentPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MaterialModule.forRoot(),
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MainPage,
    SeccionesPage,
    NoticiasPage,
    GuiaContentPage
  ],
  providers: [PostsProvider]
})
export class AppModule {}
