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
  title: string = "" //may not need title?

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit(){
    this.route.paramMap
    .subscribe( params => {
      this.comic = comics.find( comic => {
        let paramTitle: string = params.get('title') || ''
        return comic.title
      })
    })
  }
}
