import { Injectable } from '@angular/core';
import { ApiHttpService } from './api-http.service';
import { ImageList } from '../shared/models/image.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private apiHttpService: ApiHttpService) {
  }

  getList(): Observable<ImageList> {
    return this.apiHttpService.get('/image/list').pipe(
      map(response => new ImageList(response))
    );
  }
}
