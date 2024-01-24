import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptComponentComponent } from './concept-component.component';

describe('ConceptComponentComponent', () => {
  let component: ConceptComponentComponent;
  let fixture: ComponentFixture<ConceptComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConceptComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConceptComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
