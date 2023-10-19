import { Component } from '@angular/core';
import { featured } from './featured-comic';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent {
featured = featured;
}
