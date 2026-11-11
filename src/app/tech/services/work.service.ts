import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WorkProject} from "../models/work-project";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private readonly httpClient:HttpClient) { }

  getAllWork(): Observable<WorkProject[]>{
    return this.httpClient.get<WorkProject[]>("/assets/seedData/WorkProjectSeedData.json")
  }
}
