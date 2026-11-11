import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ExperienceItem} from "../models/experience-item";

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private readonly httpClient: HttpClient) { }

  getExperiences(): Observable<ExperienceItem[]> {
    return this.httpClient.get<ExperienceItem[]>('/assets/seedData/AboutExperienceSeedData.json')
  }
}
