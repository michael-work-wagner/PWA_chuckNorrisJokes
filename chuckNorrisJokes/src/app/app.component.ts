import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { SwUpdate } from '@angular/service-worker';
// import { Joke } from 'src/models/joke.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Chuck Norris Jokes';
  currentJoke: any;


  constructor(updatesFromSW: SwUpdate, private dataService: DataService) {
    updatesFromSW.available.subscribe(
      event => {
        console.log((event));

        updatesFromSW.activateUpdate().then(() => document.location.reload());
      }
    );
  }


  ngOnInit() {
    this.updateJoke();
  }

  updateJoke() {
    this.dataService.getJokes().subscribe(
      joke => this.currentJoke = joke,
      noJoke => console.log('sth. went wrong:', noJoke)
    );
  }

}
