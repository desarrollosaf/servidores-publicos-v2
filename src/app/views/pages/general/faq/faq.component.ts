import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-faq',
    imports: [
        RouterLink,
        NgbAccordionModule
    ],
    templateUrl: './faq.component.html'
})
export class FaqComponent {

}
