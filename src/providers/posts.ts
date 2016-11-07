import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

import { Post } from '../models/posts';


/*
  Generated class for the PostsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostsProvider {

  ApiUrl = 'http://www.cpokemon.com/sunmoon/?api=1&callback=JSONP_CALLBACK';

  constructor(public http: Http, public jsonp: Jsonp) {
    console.log('Hello PostsProvider Provider');
  }

  load(): Observable<Post[]> {
    return this.jsonp.request(this.ApiUrl, { method: 'Get' })
      .map(res => <Post[]>res.json());
  }

}
