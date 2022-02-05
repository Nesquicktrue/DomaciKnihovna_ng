import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PridejknihuComponent } from './pridejknihu.component';

describe('PridejknihuComponent', () => {
  let component: PridejknihuComponent;
  let fixture: ComponentFixture<PridejknihuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PridejknihuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PridejknihuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
