import { Component } from '@angular/core';

import { faqs } from '../../models/faq';

@Component({
    selector: 'app-faqs',
    templateUrl: './faqs.component.html',
    styleUrls: ['./faqs.component.scss'],
})
export class FaqsComponent {
    faqs: any[] = faqs;
}
