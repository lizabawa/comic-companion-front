import { Component, OnInit } from '@angular/core';
import { comics } from './comics';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit{
  comics = comics
  id: any

  viewComic(id: any) {
    console.log("comic viewed with ID: " + id);
  }

  ngOnInit(): void {
      
  }
}
