import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmComponent } from './jm.component';

describe('JmComponent', () => {
  let component: JmComponent;
  let fixture: ComponentFixture<JmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
