import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Product, ProductsService } from '../services/products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CardPage implements OnInit {
  products: Product []=[];
  productsService = inject(ProductsService);

  async ngOnInit() {
    const response =await this.productsService.getAll();
    this.products = response.items;
  }

}
