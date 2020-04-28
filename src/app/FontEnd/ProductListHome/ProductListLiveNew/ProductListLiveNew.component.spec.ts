/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductListLiveNewComponent } from './ProductListLiveNew.component';

describe('ProductListLiveNewComponent', () => {
  let component: ProductListLiveNewComponent;
  let fixture: ComponentFixture<ProductListLiveNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListLiveNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListLiveNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
