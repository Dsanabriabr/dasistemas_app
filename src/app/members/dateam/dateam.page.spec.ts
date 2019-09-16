import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateamPage } from './dateam.page';

describe('DateamPage', () => {
  let component: DateamPage;
  let fixture: ComponentFixture<DateamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
