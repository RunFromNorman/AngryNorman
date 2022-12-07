import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScreenComponent } from './home-screen.component';

describe('HomeScreenComponent', () => {
  let component: HomeScreenComponent;
  let fixture: ComponentFixture<HomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeScreenComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
