import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestvalidComponent } from './testvalid.component';

describe('TestvalidComponent', () => {
  let component: TestvalidComponent;
  let fixture: ComponentFixture<TestvalidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestvalidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
