import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from '../shared/models/image.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: Image[] | null | undefined = null;

  constructor(private route: ActivatedRoute,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    if (this.route.snapshot.data.list) {
      this.images = this.route.snapshot.data.list.images;
      this.changeDetectorRef.markForCheck();
    }

  }

}
