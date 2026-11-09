import { Component, Input } from '@angular/core';

export type FooterIcon = 'mail-arrow' | 'mail' | 'arrow' | 'none';

export interface FooterSocialLinks {
  linkedin: string;
  twitch: string;
  github: string;
  email: string;
}

export interface FooterConfig {
  eyebrowText: string;
  showEyebrow: boolean;
  headerText: string;
  bodyText: string;
  showBody: boolean;
  buttonText: string;
  buttonIcon: FooterIcon;
  socialLinks: FooterSocialLinks;
}

const DEFAULT_FOOTER_CONFIG: FooterConfig = {
  eyebrowText: 'LET’S CONNECT',
  showEyebrow: false,
  headerText: "Have an idea? Let's make it happen.",
  bodyText: "Whether it's software, an interesting collaboration, or just a conversation about technology; my inbox is open.",
  showBody: true,
  buttonText: 'Get in touch',
  buttonIcon: 'mail-arrow',
  socialLinks: {
    linkedin: '',
    twitch: '',
    github: '',
    email: ''
  }
};

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() config: Partial<FooterConfig> = {};

  readonly currentYear = new Date().getFullYear();

  get content(): FooterConfig {
    return {
      ...DEFAULT_FOOTER_CONFIG,
      ...this.config,
      socialLinks: {
        ...DEFAULT_FOOTER_CONFIG.socialLinks,
        ...this.config.socialLinks
      }
    };
  }
}
