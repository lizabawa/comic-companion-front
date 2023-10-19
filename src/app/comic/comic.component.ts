import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { comics } from '../comics-list/comics';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-comic',
  standalone: true,
  imports: [NgbCarouselModule, NgFor, FormsModule],
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
  
  paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;

  constructor(private route: ActivatedRoute) {
    
  }

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
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
