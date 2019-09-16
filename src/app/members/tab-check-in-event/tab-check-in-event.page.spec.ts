import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCheckInEventPage } from './tab-check-in-event.page';

describe('TabCheckInEventPage', () => {
  let component: TabCheckInEventPage;
  let fixture: ComponentFixture<TabCheckInEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCheckInEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCheckInEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
