import { Injectable } from '@angular/core';
import { ApiHttpService } from './api-http.service';
import { ImageList } from '../shared/models/image.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private apiHttpService: ApiHttpService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ImageList> | null {
    return this.getList();
  }

  getList(): Observable<ImageList> {
    return this.apiHttpService.get('/images/list').pipe(
      map(response => new ImageList(response))
    );
  }
}
