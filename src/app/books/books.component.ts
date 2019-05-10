import { Component, OnInit } from '@angular/core';
import { VisabilityService } from '../services/visability.service';
import {DragDropModule} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private Visability: VisabilityService) {  }
  vis = this.Visability.bookComponentVisNum;
  myVis = this.Visability.bookVis;
  ngOnInit() {
    this.Visability.updateBookComponent(this.vis);
    this.Visability.getBookUpdateListener().subscribe((data: string) => {
      this.myVis = data;
    });
    // console.log(this.myVis);


  }

}
