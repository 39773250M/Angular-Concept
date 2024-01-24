import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynmaicImageComponent } from './dynmaic-image.component';

describe('DynmaicImageComponent', () => {
  let component: DynmaicImageComponent;
  let fixture: ComponentFixture<DynmaicImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynmaicImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynmaicImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
