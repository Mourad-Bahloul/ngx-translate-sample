import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteewartComponent } from './steewart.component';

describe('SteewartComponent', () => {
  let component: SteewartComponent;
  let fixture: ComponentFixture<SteewartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteewartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteewartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
