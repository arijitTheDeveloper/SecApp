import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Tool } from './Tools';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class PostsService {
  //private _url: string ="db.json";
  constructor(private http:HttpClient) { }

  getAllPosts(){
   
    return this.http.get('http://127.0.0.1:3000/posts/A').pipe(map(res=> res.json())).subscribe(posts => {
      console.log(posts.valueOf);
    
    //return this.http.get<Tool[]>(this._url);
  })

}

}
