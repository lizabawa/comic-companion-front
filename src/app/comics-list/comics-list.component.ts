import { Component, OnInit } from '@angular/core';
import { comics } from './comics';
import { ActivatedRoute } from '@angular/router';
import { ComicsListService } from './comics-list.service';
import { WebRequestService } from '../web-request.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit{
  comics = comics
  comicList: any;
  comic: any;
  idxEnd = 3;

  constructor(private route: ActivatedRoute, private webReqService: WebRequestService) {
    
  }
  showNewRow(){
    return this.webReqService.getAllComics('comics').subscribe((response: any) => {
      this.comicList = JSON.stringify(response);
      console.log("this is the response" + this.comicList);
    })

    // if (this.idxEnd <= comics.length - 3){
    // comics.slice(0, this.idxEnd += 3)
    // console.log("start: 0" + " end: " + this.idxEnd)
    // } else {    
    //   console.log("end of array")
    // }
  }

  ngOnInit(){
    this.route.paramMap
    .subscribe( params => {
      this.comic = comics.find( comic => {
        let paramId: string = params.get('id') || ''
        return comic.id === parseInt(paramId)
      })
    })
  }
}
