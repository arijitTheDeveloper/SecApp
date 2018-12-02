import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {CarouselModule} from "angular2-carousel";
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {SliderComponent} from './slider/slider.component';
import { HoverComponent } from './hover/hover.component';
import {HttpModule} from '@angular/http';
import { PostsComponent } from './posts/posts.component';
import {RouterModule} from '@angular/router';


const Routes=[

  {
    path:'', 
    redirectTo:'posts',
    pathMatch:'full',
  },
  {
    path:'posts',
    component:PostsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HoverComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    NgbModule,
    HttpModule,
    RouterModule.forRoot(Routes)
  
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
