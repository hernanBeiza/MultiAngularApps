import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolucionAgregarComponent } from './resolucion-agregar.component';

describe('ResolucionAgregarComponent', () => {
  let component: ResolucionAgregarComponent;
  let fixture: ComponentFixture<ResolucionAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolucionAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolucionAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
