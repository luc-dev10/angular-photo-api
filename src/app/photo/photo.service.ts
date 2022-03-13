import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interface for response
interface IUnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // di
  constructor(private httpClient: HttpClient) {}

  // method for search
  getPhoto() {
    const UNSPLASH_URL =
      'https://api.unsplash.com/photos/random?client_id=TFYZBC-19J98WmdojnWfnOL68cC4IbmGrnSDT3bZQOI';

    return this.httpClient.get<IUnsplashResponse>(UNSPLASH_URL);
  }
}
