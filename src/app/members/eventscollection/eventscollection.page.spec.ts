import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventscollectionPage } from './eventscollection.page';

describe('EventscollectionPage', () => {
  let component: EventscollectionPage;
  let fixture: ComponentFixture<EventscollectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventscollectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventscollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
