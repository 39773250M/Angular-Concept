import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterailComponent } from './angular-materail.component';

describe('AngularMaterailComponent', () => {
  let component: AngularMaterailComponent;
  let fixture: ComponentFixture<AngularMaterailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularMaterailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularMaterailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
