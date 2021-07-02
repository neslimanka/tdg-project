/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IvmeIkiComponent } from './ivmeIki.component';

describe('IvmeIkiComponent', () => {
  let component: IvmeIkiComponent;
  let fixture: ComponentFixture<IvmeIkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvmeIkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvmeIkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
