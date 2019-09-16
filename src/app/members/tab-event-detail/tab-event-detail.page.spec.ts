import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEventDetailPage } from './tab-event-detail.page';

describe('TabEventDetailPage', () => {
  let component: TabEventDetailPage;
  let fixture: ComponentFixture<TabEventDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabEventDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEventDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
