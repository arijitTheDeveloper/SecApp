import { Component, OnInit } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { PostsService } from '../posts.service';
 

@Component({
  selector: 'app-hover',
  templateUrl: './hover.component.html',
  styleUrls: ['./hover.component.css'],
  providers: [PostsService]
})
export class HoverComponent implements OnInit {

  
  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

 message: string;


 showMsg() {
   this.message = null;
   this.postService.getAllPosts();

}
}
