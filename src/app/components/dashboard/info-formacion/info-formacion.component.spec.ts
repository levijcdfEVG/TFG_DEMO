import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFormacionComponent } from './info-formacion.component';

describe('InfoFormacionComponent', () => {
  let component: InfoFormacionComponent;
  let fixture: ComponentFixture<InfoFormacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFormacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
