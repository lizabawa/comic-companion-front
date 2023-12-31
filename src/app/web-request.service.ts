import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:9000/api/v1';
   }

  getAllComics(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  getComic(uri: string, id: number) {
    return this.http.get(`${this.ROOT_URL}/${uri}/${id}`)
  }

  getComicPage(comics: string, id: number, pages: string) {
    return this.http.get(`${this.ROOT_URL}/${comics}/${id}/${pages}`)
  }
}
