import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { TileComponent } from './tile/tile.component';


@NgModule({
  declarations: [
    TileComponent
  ],
  exports: [
    TileComponent,
    VirtualScrollerModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    VirtualScrollerModule
  ]
})
export class SharedModule { }
