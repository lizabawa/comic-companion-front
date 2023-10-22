import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ComicsListService {
  constructor(private webReqService: WebRequestService) { }

  seeMore() {
    // send a web request to get more comic titles and descriptions
  }
}
