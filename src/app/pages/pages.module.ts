import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './views/main/main.component';
import { AboutComponent } from './views/about/about.component';
import { StepsComponent } from './views/steps/steps.component';
import { ProductsComponent } from './views/products/products.component';
import { FaqsComponent } from './views/faqs/faqs.component';
import { ContactComponent } from './views/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [HeaderComponent, HomeComponent, MainComponent, AboutComponent, StepsComponent, ProductsComponent, FaqsComponent, ContactComponent, FooterComponent],
    imports: [CommonModule, PagesRoutingModule, SharedModule],
    exports: [PagesRoutingModule],
})
export class PagesModule {}
