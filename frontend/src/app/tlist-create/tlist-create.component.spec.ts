import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlistCreateComponent } from './tlist-create.component';

describe('TlistCreateComponent', () => {
  let component: TlistCreateComponent;
  let fixture: ComponentFixture<TlistCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TlistCreateComponent]
    });
    fixture = TestBed.createComponent(TlistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
