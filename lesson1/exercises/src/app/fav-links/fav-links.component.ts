import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: string[] = ["https://www.craftsy.com/post/determining-yarn-weights/", "https://www.knitting-bee.com/free-knitting-patterns/free-knitted-toy-patterns/free-pattern-for-easy-knitted-fish"]
  constructor() { }

  ngOnInit() {
  }

}
