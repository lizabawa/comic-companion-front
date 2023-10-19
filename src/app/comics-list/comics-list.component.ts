import { Component, OnInit } from '@angular/core';
import { comics } from './comics';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit{
  comics = comics
  title: string = ""
  getComic = new Subject();

  viewComic(title: string) {
    this.getComic.next(title)
  }

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    this.getComic

    .subscribe(title => {
      console.log("comic viewed with title: " + title);
      this.router.navigate(['./comics/:{{title}}']);
    })
  }
}
