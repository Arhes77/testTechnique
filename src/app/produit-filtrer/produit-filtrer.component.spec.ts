import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitFiltrerComponent } from './produit-filtrer.component';

describe('ProduitFiltrerComponent', () => {
  let component: ProduitFiltrerComponent;
  let fixture: ComponentFixture<ProduitFiltrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitFiltrerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProduitFiltrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
