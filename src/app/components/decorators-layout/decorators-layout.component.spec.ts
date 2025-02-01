import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorsLayoutComponent } from './decorators-layout.component';

describe('DecoratorsLayoutComponent', () => {
  let component: DecoratorsLayoutComponent;
  let fixture: ComponentFixture<DecoratorsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecoratorsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoratorsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
