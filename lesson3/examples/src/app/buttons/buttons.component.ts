import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   activeButton: boolean[] = [true, true, true];

   constructor() { }

   ngOnInit() { }

   reactivateButtons() {
      for (let i = 0; i < this.activeButton.length; i++) {
         this.activeButton[i] = true;
      }
      return this.activeButton;
   }

}
