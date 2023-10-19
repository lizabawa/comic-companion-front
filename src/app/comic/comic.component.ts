import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { comics } from '../comics-list/comics';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-comic',
  standalone: true,
  imports: [NgbCarouselModule, NgFor],
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit{
  images = [
    "assets/images/mech-bros.png",
    "assets/images/red-ranger.png",
    "assets/images/mech-bros.png",
    "assets/images/red-ranger.png",
    "assets/images/mech-bros.png",
    "assets/images/red-ranger.png"
  ]

  comics = comics;
  comic: any

  constructor(private route: ActivatedRoute) {
    
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
