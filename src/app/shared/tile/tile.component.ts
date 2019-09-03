import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tileFadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(700)
      ]),
      transition(':leave',
        animate(700, style({opacity: 0})))
    ])
  ]
})
export class TileComponent {
  @HostBinding('class') className = 'col-xs-12 col-sm-6 col-md-4 col-lg-3';
  @Input()
  public item: Image;

}
