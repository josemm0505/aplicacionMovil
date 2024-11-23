import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'main', loadComponent:()=>import('./main/main.page').then(m=>m.MainPage)},
  {
    path: 'product-list',
    loadComponent: () => import('./product-list/product-list.page').then( m => m.ProductListPage)
  },
  {
    path: 'card',
    loadComponent: () => import('./card/card.page').then( m => m.CardPage)
  },
];
