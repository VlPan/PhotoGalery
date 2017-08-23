import {Component, OnInit, Input} from '@angular/core';
import {Image} from "../../header/modules/Image.module";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() image: Image;
  @Input() id: number;
  
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  showImage(){
    this.router.navigate([this.id], {relativeTo: this.route});
  }

}
