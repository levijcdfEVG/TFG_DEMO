import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnioacademicoComponent } from './anioacademico.component';

describe('AnioacademicoComponent', () => {
  let component: AnioacademicoComponent;
  let fixture: ComponentFixture<AnioacademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnioacademicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnioacademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
