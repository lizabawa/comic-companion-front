import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { WebRequestService } from '../web-request.service';

@Component({
  selector: 'app-comic',
  standalone: true,
  imports: [NgbCarouselModule, NgFor],
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit{

  comicList: any
  comic: any

  constructor(private route: ActivatedRoute, private webReqService: WebRequestService) {
    
  }

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