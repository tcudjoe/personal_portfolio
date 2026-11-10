import { Component, Input } from '@angular/core';

export type FooterIcon = 'mail-arrow' | 'mail' | 'arrow' | 'none';

export interface FooterSocialLinks {
  linkedin: string;
  twitch: string;
  github: string;
  email: string;
}

export interface FooterLink {
  eyebrow: string;
  label: string;
  href: string;
}

export interface FooterConfig {
  showCallout: boolean;
  eyebrowText: string;
  showEyebrow: boolean;
  headerText: string;
  bodyText: string;
  showBody: boolean;
  buttonText: string;
  buttonIcon: FooterIcon;
  buttonHref: string;
  secondaryLink?: FooterLink;
}

const DEFAULT_FOOTER_CONFIG: FooterConfig = {
  showCallout: true,
  eyebrowText: 'LET’S CONNECT',
  showEyebrow: false,
  headerText: "Have an idea? Let's make it happen.",
  bodyText: "Whether it's software, an interesting collaboration, or just a conversation about technology; my inbox is open.",
  showBody: true,
  buttonText: 'Get in touch',
  buttonIcon: 'mail-arrow',
  buttonHref: 'mailto:taocudjoe@gmail.com'
};

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() config: Partial<FooterConfig> = {};

  readonly socialLinks: FooterSocialLinks = {
    linkedin: 'https://www.linkedin.com/in/tcudjoe2401/',
    twitch: 'https://www.twitch.tv/taocudjoe',
    github: 'https://github.com/tcudjoe',
    email: 'taocudjoe@gmail.com'
  };

  readonly currentYear = new Date().getFullYear();

  get content(): FooterConfig {
    return { ...DEFAULT_FOOTER_CONFIG, ...this.config };
  }
}
