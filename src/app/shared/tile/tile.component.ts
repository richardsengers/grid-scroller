import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileComponent {
  @HostBinding('class') className = 'col-xs-12 col-sm-6 col-md-4 col-lg-3';
  @Input()
  public item: Image;

}
