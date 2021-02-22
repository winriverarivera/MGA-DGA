import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgaMainComponent } from './mga-main.component';

describe('MgaMainComponent', () => {
  let component: MgaMainComponent;
  let fixture: ComponentFixture<MgaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
