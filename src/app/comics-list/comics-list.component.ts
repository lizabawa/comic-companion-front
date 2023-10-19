import { Component, OnInit } from '@angular/core';
import { comics } from './comics';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit{
  comics = comics
  id: any
  getComic = new Subject();

  viewComic(id: any) {
    // console.log("comic viewed with ID: " + id);
    this.getComic.next(id)
    //retrieve the link to open
  }

  ngOnInit(): void {
    this.getComic

    .subscribe(id => {
      console.log("comic viewed with ID: " + id);
    })
  }
}
