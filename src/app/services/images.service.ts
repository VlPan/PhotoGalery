
import {Image} from "../header/modules/Image.module";
export class ImagesService{
    images: Image[] = [
        {
            path: 'https://www.bmw.co.za/content/dam/bmw/common/all-models/4-series/gran-coupe/2017/images-and-videos/images/BMW-4-series-gran-coupe-images-and-videos-1920x1200-04.jpg.asset.1487328216285.jpg',
            author: 'Jonh Smitch',
            desc: 'Weather is beautiful!'
        },
        {
            path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6iFtvCsV1Ur7UbNmyYlg8JBw0muxZM6NUUMozlb6II3282vh-',
            author: 'Alen Rox',
            desc: 'Shadow of North'
        },


]
    
    getImages(){
        return this.images;
    }
    
    getImage(id:number){
        return this.images[id];
    }

    saveImage(image: Image){
        this.images.push(image);
    }
}