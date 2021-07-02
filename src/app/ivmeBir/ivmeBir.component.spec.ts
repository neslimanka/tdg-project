/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IvmeBirComponent } from './ivmeBir.component';

describe('IvmeBirComponent', () => {
  let component: IvmeBirComponent;
  let fixture: ComponentFixture<IvmeBirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvmeBirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvmeBirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
