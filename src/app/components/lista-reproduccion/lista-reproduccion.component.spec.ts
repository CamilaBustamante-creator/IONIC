import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular/lazy';

import { ListaReproduccionComponent } from './lista-reproduccion.component';

describe('ListaReproduccionComponent', () => {
  let component: ListaReproduccionComponent;
  let fixture: ComponentFixture<ListaReproduccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaReproduccionComponent],
      imports: [IonicModule.forRoot()],
    });

    fixture = TestBed.createComponent(ListaReproduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
