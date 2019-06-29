import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-pwa-app';
  joke: any;

  constructor(updates: SwUpdate, private dataService: DataService) {
       updates.available.subscribe(() => {
         updates.activateUpdate().then(() => document.location.reload());
       });
  }

  ngOnInit() {
    this.dataService.gimmeJokes().subscribe(res => {
        this.joke = res;
    });
  }

}
