import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'dinesh',
  templateUrl: './dinesh.html',
  styleUrls: ['./dinesh.css']
})
export class Dinesh {
  isPopupOpen: boolean = false;
  WidthSize: string = '300px';
  HeightSize: string = '30px';

  constructor() { }

  array = [
    {
        id: 1,
        history: 'Diabetes Type 2',
        selectState: false
    },

    {
        id: 2,
        history: 'Stress Symptoms',
        selectState: false
    },

    {
        id: 3,
        history: 'Heart Failure',
        selectState: false
    }
]

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  handleClick(index: number) {
  this.array.forEach(item => item.selectState = false);
  this.array[index].selectState = true;
}

}
