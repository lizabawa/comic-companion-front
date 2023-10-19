import { Component } from '@angular/core';
import { comics } from './comics';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent {
  comics = comics
}
