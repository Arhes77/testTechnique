import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProduitComponent } from "./produit/produit.component";
import { ListProduitComponent } from "./list-produit/list-produit.component";
import { ProduitFiltrerComponent } from "./produit-filtrer/produit-filtrer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ProduitComponent, ListProduitComponent, ProduitFiltrerComponent]
})
export class AppComponent {
  title = 'test';
}
