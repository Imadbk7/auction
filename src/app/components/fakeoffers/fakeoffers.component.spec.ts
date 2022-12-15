import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeoffersComponent } from './fakeoffers.component';

describe('FakeoffersComponent', () => {
  let component: FakeoffersComponent;
  let fixture: ComponentFixture<FakeoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeoffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
