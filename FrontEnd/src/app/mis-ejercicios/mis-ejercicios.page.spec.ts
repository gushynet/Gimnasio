import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisEjerciciosPage } from './mis-ejercicios.page';

describe('MisEjerciciosPage', () => {
  let component: MisEjerciciosPage;
  let fixture: ComponentFixture<MisEjerciciosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisEjerciciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
