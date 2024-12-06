import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '@/app/core/components/header/header.component';
import { FooterComponent } from '@/app/core/components/footer/footer.component';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './layout.component.html'
})
export class LayoutComponent { }
