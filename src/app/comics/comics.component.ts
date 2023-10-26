import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebRequestService } from '../web-request.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
comicList: any;
comic: any;

constructor(private route: ActivatedRoute, private webReqService: WebRequestService){}

ngOnInit(){
  this.webReqService.getAllComics('comics').subscribe((response: any) => {
    this.comicList = response.data;

  this.route.paramMap
  .subscribe( params => {
    this.comic = this.comicList.find( (comic: any) => {
      let paramId: string = params.get('id') || '';
      return comic.id === parseInt(paramId)
    })
  })
  })
}
}
