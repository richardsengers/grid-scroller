import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { ImageList } from '../shared/models/image.model';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    const routeData = {
      snapshot: {
        data: new ImageList([{
          url: 'https://static.marcomprocloud.eu/account/4dac4777e37f501a80391ba3/cache/imagecloud/164ba537292d7bf874869f1ce7f321f5/03cb4ae46da302ebaf4fda886601dff339eaa381.jpg',
          title: 'Ferrari',
          name: 'ferrari.jpg',
          description: 'Red sports car'
        }])
      }
    };
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: routeData
      }, ChangeDetectorRef]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
