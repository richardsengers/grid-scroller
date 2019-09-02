import { Component, OnInit } from '@angular/core';
import { ImageService } from './core/image.service';
import { ImageList } from './shared/models/image.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  images: ImageList = null;
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {

    this.imageService.getList().subscribe((imageList: ImageList) => {
      console.log(imageList)
    });
  }

}
