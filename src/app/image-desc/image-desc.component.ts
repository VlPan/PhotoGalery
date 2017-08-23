import { Component, OnInit } from '@angular/core';
import {ImagesService} from "../services/images.service";
import {Route, ActivatedRoute, Params} from "@angular/router";
import {Image} from "../header/modules/Image.module";

@Component({
  selector: 'app-image-desc',
  templateUrl: './image-desc.component.html',
  styleUrls: ['./image-desc.component.css']
})
export class ImageDescComponent implements OnInit {

  id:number;
  image: Image;
  photo: string;

  constructor(private imagesSerivice: ImagesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
              this.id = +params['id'];
              this.image = this.imagesSerivice.getImage(this.id);
              this.photo = this.image.path;
            }
        );
  }
}
