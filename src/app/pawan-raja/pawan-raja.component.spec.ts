import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawanRajaComponent } from './pawan-raja.component';

describe('PawanRajaComponent', () => {
  let component: PawanRajaComponent;
  let fixture: ComponentFixture<PawanRajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PawanRajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PawanRajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
