/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IvmeComponent } from './ivme.component';

describe('IvmeComponent', () => {
  let component: IvmeComponent;
  let fixture: ComponentFixture<IvmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
