import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearheladoComponent } from './crearhelado.component';

describe('CrearheladoComponent', () => {
  let component: CrearheladoComponent;
  let fixture: ComponentFixture<CrearheladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearheladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearheladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
