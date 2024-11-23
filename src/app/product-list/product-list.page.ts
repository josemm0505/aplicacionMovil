import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Product, ProductsService } from '../services/products.service';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule, RouterLink]
})
export class ProductListPage implements OnInit {
  alertButtons = ['Action'];

  products: Product []=[];
  productsService = inject(ProductsService);

  async ngOnInit() {
    const response =await this.productsService.getAll();
    this.products = response.items;
  }

}
