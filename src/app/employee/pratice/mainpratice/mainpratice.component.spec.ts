import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpraticeComponent } from './mainpratice.component';

describe('MainpraticeComponent', () => {
  let component: MainpraticeComponent;
  let fixture: ComponentFixture<MainpraticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpraticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpraticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
