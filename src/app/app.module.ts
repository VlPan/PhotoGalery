import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OwlModule } from 'ng2-owl-carousel';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';


import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { HeaderComponent } from './header/header.component';
import { ImageComponent } from './images/image/image.component';
import { ImagesAddComponent } from './images/images-add/images-add.component';
import { ImagesEditComponent } from './images/images-edit/images-edit.component';
import { AuthorsComponent } from './authors/authors.component';
import { ImagesDescComponent } from './images/images-desc/images-desc.component';
import { NavComponent } from './header/nav/nav.component';
import { CarouselComponent } from './header/carousel/carousel.component';
import {Routes, RouterModule} from "@angular/router";
import {ImagesService} from "./services/images.service";
import { ImageDescComponent } from './image-desc/image-desc.component';



const routes : Routes = [
    {path: '', redirectTo: '/images', pathMatch: 'full'},
    {path: 'images', component: ImagesComponent, children: [
        {path: ':id/edit', component: ImagesEditComponent}
    ]},
    {path: 'desc', component: ImagesDescComponent},
    {path: 'add', component: ImagesAddComponent},
    {path: 'authors', component: AuthorsComponent},
    {path: 'images/:id', component: ImageDescComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    HeaderComponent,
    ImageComponent,
    ImagesAddComponent,
    ImagesEditComponent,
    AuthorsComponent,
    ImagesDescComponent,
    NavComponent,
    CarouselComponent,
    ImageDescComponent
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
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
