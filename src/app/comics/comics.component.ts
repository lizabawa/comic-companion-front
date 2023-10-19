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

constructor(private route: ActivatedRoute){}

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
