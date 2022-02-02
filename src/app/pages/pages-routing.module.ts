import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './views/main/main.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ProductsComponent } from './views/products/products.component';
import { FaqsComponent } from './views/faqs/faqs.component';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'products', component: ProductsComponent },
            { path: 'faqs', component: FaqsComponent },
            { path: 'contact', component: ContactComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
