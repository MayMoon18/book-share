import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatIconComponent } from './flat-icon.component';

describe('FlatIconComponent', () => {
  let component: FlatIconComponent;
  let fixture: ComponentFixture<FlatIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
