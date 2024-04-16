import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayComponentBindingComponent } from './two-way-component-binding.component';

describe('TwoWayComponentBindingComponent', () => {
  let component: TwoWayComponentBindingComponent;
  let fixture: ComponentFixture<TwoWayComponentBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayComponentBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayComponentBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
