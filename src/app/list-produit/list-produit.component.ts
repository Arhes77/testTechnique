import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../model/produit';
import { ProduitComponent } from "../produit/produit.component";

@Component({
    selector: 'app-list-produit',
    standalone: true,
    templateUrl: './list-produit.component.html',
    styleUrl: './list-produit.component.css',
    imports: [CommonModule, ProduitComponent]
})
export class ListProduitComponent {

  listproduit: Produit[];

  constructor(){
    this.listproduit = [
      {
          "id":1,
          "nom":"Ordinateur Portable",
          "categorie":"Electronique",
          "prix":1200,
          "stock":15
      },
      {
          "id":2,
          "nom":"Livre JavaScript Avance",
          "categorie":"Livres",
          "prix":35,
          "stock":50
      },
      {
          "id":3,
          "nom":"Smartphone",
          "categorie":"Electronique",
          "prix":800,
          "stock":10
      },
      {
          "id":4,
          "nom":"Chaise de Bureau",
          "categorie":"Mobilier",
          "prix":150,
          "stock":20
      }


    ]
  }









}
