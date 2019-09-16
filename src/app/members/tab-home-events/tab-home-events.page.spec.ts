import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabHomeEventsPage } from './tab-home-events.page';

describe('TabHomeEventsPage', () => {
  let component: TabHomeEventsPage;
  let fixture: ComponentFixture<TabHomeEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabHomeEventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabHomeEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
