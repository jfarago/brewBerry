import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerStatusComponent } from './beer-status.component';

describe('BeerStatusComponent', () => {
  let component: BeerStatusComponent;
  let fixture: ComponentFixture<BeerStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
