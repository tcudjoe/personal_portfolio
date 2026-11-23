import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getAssetUrl(fileId: string | undefined): string {
    return `${environment.api_url}/assets/${fileId}`;
  }
}
