import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatickaComponent } from './paticka.component';

describe('PatickaComponent', () => {
  let component: PatickaComponent;
  let fixture: ComponentFixture<PatickaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatickaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatickaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
