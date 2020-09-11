import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Pics';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://i.redd.it/b160jdq4crax.jpg';
  image3 = 'https://images.theweek.com/sites/default/files/styles/tw_image_9_4/public/33577_article_full.jpg.webp?itok=qkwIO2Hb&resize=728x728';

  constructor() { }

  ngOnInit() {
  }

}