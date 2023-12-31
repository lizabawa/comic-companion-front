import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicComponent } from './comic/comic.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'comics',
    component: ComicsComponent
  },
  {
    path: 'comics/:id',
    component: ComicComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
