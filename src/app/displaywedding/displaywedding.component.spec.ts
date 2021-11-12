import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayweddingComponent } from './displaywedding.component';

describe('DisplayweddingComponent', () => {
  let component: DisplayweddingComponent;
  let fixture: ComponentFixture<DisplayweddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayweddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayweddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
