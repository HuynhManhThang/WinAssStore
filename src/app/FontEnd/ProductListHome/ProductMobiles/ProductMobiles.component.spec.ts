/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductMobilesComponent } from './ProductMobiles.component';

describe('ProductMobilesComponent', () => {
  let component: ProductMobilesComponent;
  let fixture: ComponentFixture<ProductMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
