import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { TileComponent } from './tile/tile.component';
import { TooltipModule } from 'ng2-tooltip-directive';


@NgModule({
  declarations: [
    TileComponent
  ],
  exports: [
    TileComponent,
    VirtualScrollerModule,
    TooltipModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    VirtualScrollerModule,
    TooltipModule
  ]
})
export class SharedModule { }
