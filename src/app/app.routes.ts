import { Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ProduitFiltrerComponent } from './produit-filtrer/produit-filtrer.component';

export const routes: Routes = [
  {path: 'produit', component: ProduitComponent},
  {path: 'listproduit', component: ListProduitComponent},
  {path: 'filtre', component: ProduitFiltrerComponent},

];

