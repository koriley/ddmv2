import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { CampList} from '../interfaces/campList.interface';

@Component({
  selector: 'app-ddm-test',
  templateUrl: './play-test.component.html',
  styleUrls: ['./play-test.component.scss']
})
export class PlayTestComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }
  theData = ' replace me';


  ngOnInit() {
    this.httpClient
      .get<CampList>('http://localhost:3000/')
      .subscribe((data) => {
        console.log(data[0].campaigns);
        const camps = data[0].campaigns;
        camps.forEach(element => {
          console.log(element.name);
        });
        // this.theData = data;
      });
  }
}
