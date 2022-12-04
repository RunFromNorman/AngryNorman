import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardScreenComponent } from './scoreboard-screen.component';

describe('ScoreboardScreenComponent', () => {
  let component: ScoreboardScreenComponent;
  let fixture: ComponentFixture<ScoreboardScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreboardScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreboardScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
