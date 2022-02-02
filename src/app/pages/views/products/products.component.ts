import { Component } from '@angular/core';

import { products } from '../../models/product';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
    products: any[] = products;
}
