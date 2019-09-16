import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCreateEventPage } from './tab-create-event.page';

describe('TabCreateEventPage', () => {
  let component: TabCreateEventPage;
  let fixture: ComponentFixture<TabCreateEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCreateEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCreateEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
