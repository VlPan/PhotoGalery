import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OwlModule } from 'ng2-owl-carousel';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';


import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { HeaderComponent } from './header/header.component';
import { ImagesListComponent } from './images/images-list/images-list.component';
import { ImageComponent } from './images/image/image.component';
import { ImagesAddComponent } from './images/images-add/images-add.component';
import { ImagesEditComponent } from './images/images-edit/images-edit.component';
import { AuthorsComponent } from './authors/authors.component';
import { ImagesDescComponent } from './images/images-desc/images-desc.component';
import { NavComponent } from './header/nav/nav.component';
import { CarouselComponent } from './header/carousel/carousel.component';
import {Routes, RouterModule} from "@angular/router";



const routes : Routes = [
    {path: '', redirectTo: '/images', pathMatch: 'full'},
    {path: 'images', component: ImagesComponent, children: [
        {path: ':id', component: ImageComponent},
        {path: ':id/edit', component: ImagesEditComponent}
    ]},
    {path: 'desc', component: ImagesDescComponent},
    {path: 'add', component: ImagesAddComponent},
    {path: 'authors', component: AuthorsComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    HeaderComponent,
    ImagesListComponent,
    ImageComponent,
    ImagesAddComponent,
    ImagesEditComponent,
    AuthorsComponent,
    ImagesDescComponent,
    NavComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OwlModule,
    AngularFontAwesomeModule, 
      RouterModule.forRoot(routes)
  ],
    exports:[ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
