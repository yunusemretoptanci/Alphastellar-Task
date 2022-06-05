import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexAreaComponent } from './flex-area.component';

describe('FlexAreaComponent', () => {
  let component: FlexAreaComponent;
  let fixture: ComponentFixture<FlexAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
