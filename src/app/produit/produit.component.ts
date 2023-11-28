import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  @Input() produit: Produit = new Produit() ;

}
