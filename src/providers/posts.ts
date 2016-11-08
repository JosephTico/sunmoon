import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

import { Post, PostContent } from '../models/posts';


/*
  Generated class for the PostsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostsProvider {

  ApiUrl = 'http://www.cpokemon.com/sunmoon/?api=1&callback=JSONP_CALLBACK';
  PostApiUrl = 'http://www.cpokemon.com/wp-json/wp/v2/pages';

  constructor(public http: Http, public jsonp: Jsonp) {
    console.log('Hello PostsProvider Provider');
  }

  load(): Observable<Post[]> {
    return this.jsonp.request(this.ApiUrl, { method: 'Get' })
      .map(res => <Post[]>res.json());
  }

  // Get github user by providing login(username)
  loadDetails(id: number): Observable<PostContent> {
    return this.jsonp.request(`${this.PostApiUrl}/${id}?_jsonp=JSONP_CALLBACK`, { method: 'Get' })
      .map(res => <PostContent>(res.json()))
  }

}
