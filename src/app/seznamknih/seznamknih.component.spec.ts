import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeznamknihComponent } from './seznamknih.component';

describe('SeznamknihComponent', () => {
  let component: SeznamknihComponent;
  let fixture: ComponentFixture<SeznamknihComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeznamknihComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeznamknihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
