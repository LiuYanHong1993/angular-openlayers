import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlDemoComponent } from './ol-demo.component';

describe('OlDemoComponent', () => {
  let component: OlDemoComponent;
  let fixture: ComponentFixture<OlDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
