import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebRequestService } from '../web-request.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit{
  comicList: any;
  comic: any;
  idxEnd = 3;

  constructor(private route: ActivatedRoute, private webReqService: WebRequestService) {
    
  }

  seeMore(){
    if (this.idxEnd <= this.comicList.length - 3){
    this.comicList.slice(0, this.idxEnd += 3)
    console.log("start: 0" + " end: " + this.idxEnd)
    } else {    
      const noMoreMsg = document.getElementById("noMoreMsg");
      if (noMoreMsg) {
        noMoreMsg.textContent = "No more comics to display";
      }
    }
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
