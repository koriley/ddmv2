import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VisabilityService {
  visibility = 'show';
  bookVis = 'hidden';
  bookComponentVisNum = 0;
  private bookUpdated = new Subject();

  getBookUpdateListener() {
    return this.bookUpdated.asObservable();
  }

  updateBookComponent(bookComponentVisNum) {
    if (bookComponentVisNum === 0) {
      this.bookVis = 'hidden';
    } else {
      this.bookVis = 'show';
    }
    return this.bookUpdated.next(this.bookVis);
    // return this.bookVis;
  }

  setHide() {
    return (this.visibility = 'hidden');
  }
  setShow() {
    return (this.visibility = 'show');
  }
  constructor() {}
}
