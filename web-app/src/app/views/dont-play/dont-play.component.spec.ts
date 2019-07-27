import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DontPlayComponent } from './dont-play.component';

describe('DontPlayComponent', () => {
  let component: DontPlayComponent;
  let fixture: ComponentFixture<DontPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DontPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DontPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
