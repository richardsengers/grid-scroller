import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileComponent } from './tile.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { Image } from '../models/image.model';
import { ElementRef } from '@angular/core';
import { TooltipModule } from 'ng2-tooltip-directive';

describe('TileComponent', () => {
  let component: TileComponent;
  let fixture: ComponentFixture<TileComponent>;
  let title: ElementRef;
  let titleEl: HTMLElement;
  let expectedImage: Image;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, TooltipModule],
      declarations: [ TileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;

    title = fixture.debugElement.query(By.css('.heading'));
    titleEl = title.nativeElement;

    expectedImage = new Image({
      url: 'https://static.marcomprocloud.eu/account/4dac4777e37f501a80391ba3/cache/imagecloud/164ba537292d7bf874869f1ce7f321f5/03cb4ae46da302ebaf4fda886601dff339eaa381.jpg',
      title: 'Ferrari',
      name: 'ferrari.jpg',
      description: 'Red sports car'
    });

    component.item = expectedImage;

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display Ferrari as title', () => {
    const expectedTitle = expectedImage.title;
    expect(titleEl.textContent).toContain(expectedTitle);
  });

});
