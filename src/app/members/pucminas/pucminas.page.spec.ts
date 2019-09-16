import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PucminasPage } from './pucminas.page';

describe('PucminasPage', () => {
  let component: PucminasPage;
  let fixture: ComponentFixture<PucminasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PucminasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PucminasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
