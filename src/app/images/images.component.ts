import { Component, OnInit } from '@angular/core';
import {Image} from "../header/modules/Image.module";
import {ImagesService} from "../services/images.service";


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private imagesService: ImagesService) { }

  images: Image[];

  ngOnInit() {
    this.images = this.imagesService.getImages();
    console.log(this.images);
  }



}
