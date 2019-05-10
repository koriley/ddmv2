import { Component, OnInit } from '@angular/core';
import { VisabilityService } from '../../services/visability.service';
import { ApiCallsService } from '../../services/api-calls.service';
declare var jQuery: any;
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  constructor(private Visability: VisabilityService, private api: ApiCallsService) {}
  mySwitch = 0;
 bookVisNum = this.Visability.bookComponentVisNum;

 setBook() {
    if (this.bookVisNum === 1) {
      this.bookVisNum = 0;
      this.Visability.updateBookComponent(this.bookVisNum);
    } else {
      this.bookVisNum = 1;
      this.Visability.updateBookComponent(this.bookVisNum);
    }
 }

   ngOnInit() {}
}
