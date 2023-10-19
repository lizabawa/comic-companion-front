import { Component, OnInit } from '@angular/core';
import { featured } from './featured-comic';
import { comics } from '../comics-list/comics';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
featured = featured;
comics = comics;
comic: any;
title: string = "" //may not need title?
// idxStart = 0;
// idxEnd = 3;

constructor(private route: ActivatedRoute){}

// seeMore(){
//   comics.slice(this.idxStart += 3, this.idxEnd += 3)
//   console.log("start: " + this.idxStart + " end: " + this.idxEnd)
// }

ngOnInit() {
  this.route.paramMap
  .subscribe( params => {
    this.comic = comics.find( comic => {
      let paramTitle: string = params.get('title') || ''
      return comic.title
    })
  })
}
}
