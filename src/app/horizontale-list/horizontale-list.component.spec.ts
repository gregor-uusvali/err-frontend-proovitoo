import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontaleListComponent } from './horizontale-list.component';

describe('HorizontaleListComponent', () => {
  let component: HorizontaleListComponent;
  let fixture: ComponentFixture<HorizontaleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontaleListComponent]
    });
    fixture = TestBed.createComponent(HorizontaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
