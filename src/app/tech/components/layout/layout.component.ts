import { Component } from '@angular/core';
import { FooterConfig } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  footerConfig: Partial<FooterConfig> = {};

  onRouteActivate(component: unknown): void {
    const page = component as { footerConfig?: Partial<FooterConfig> };
    this.footerConfig = page.footerConfig ?? {};
  }
}
