import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCentroComponent } from './info-centro.component';

describe('InfoCentroComponent', () => {
  let component: InfoCentroComponent;
  let fixture: ComponentFixture<InfoCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCentroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
