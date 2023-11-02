import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerComponenteHijoComponent } from './primer-componente-hijo.component';

describe('PrimerComponenteHijoComponent', () => {
  let component: PrimerComponenteHijoComponent;
  let fixture: ComponentFixture<PrimerComponenteHijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimerComponenteHijoComponent]
    });
    fixture = TestBed.createComponent(PrimerComponenteHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
