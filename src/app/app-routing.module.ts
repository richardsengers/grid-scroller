import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImageService } from './core/image.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    resolve: {
      images: ImageService
    },
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
