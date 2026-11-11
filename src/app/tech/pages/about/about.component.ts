import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ExperienceItem} from '../../models/experience-item';
import {AboutService} from "../../services/about.service";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  experience: ExperienceItem[] = [
  ];

  constructor(aboutService: AboutService) {
    aboutService.getExperiences().subscribe(experience => {
      this.experience = experience
    });
  }
}
