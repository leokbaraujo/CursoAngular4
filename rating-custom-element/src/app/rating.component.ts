import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>();

  @Input() rate: number = 0;

  rates: number[] = [1,2,3,4,5];

  previewsRate: number;

  constructor() { }

  ngOnInit() {
  }

  setRate(r: number) {
    this.rate = r;
    this.previewsRate = undefined;
    this.rated.emit(this.rate);
  }

  setTemporaryRate(r: number) {
    if (this.previewsRate === undefined) {
      this.previewsRate = this.rate;
    }
    this.rate = r;
  }

  clearTemporaryRate() {
    if (this.previewsRate !== undefined) {
      this.rate = this.previewsRate;
      this.previewsRate = undefined;
    }
  }

}
