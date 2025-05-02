import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducadoresComponent } from './educadores.component';

describe('EducadoresComponent', () => {
  let component: EducadoresComponent;
  let fixture: ComponentFixture<EducadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
