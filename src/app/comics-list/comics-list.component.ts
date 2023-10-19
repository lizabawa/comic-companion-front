import { Component, OnInit } from '@angular/core';
import { comics } from './comics';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit{
  comics = comics
  comic: any;
  idxEnd = 3;

  constructor(private route: ActivatedRoute) {
    
  }
  seeMore(){
    if (this.idxEnd <= comics.length - 3){
    comics.slice(0, this.idxEnd += 3)
    console.log("start: 0" + " end: " + this.idxEnd)
    } else {    
      console.log("end of array")
    }
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
