import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ddm-test',
  templateUrl: './play-test.component.html',
  styleUrls: ['./play-test.component.scss']
})
export class PlayTestComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  theData = ' replace me';


  ngOnInit() {

    this.httpClient
      .get<{ name: string }>('http://localhost:3000/')
      .subscribe((data) => {
        console.log(data[0]);
        this.theData = data[0].name;
      });
  }
}
