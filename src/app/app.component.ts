import { Component } from '@angular/core';
import { Destination } from './models/destination.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travelog';
  data= [];
  showMap: boolean = false;
  public ngOnInit(): void {
    fetch("assets/data/location.json").then((data) => data.json()).then((data) => this.prefetchImages( data['places']))
  
  }

  private prefetchImages(locations: Destination[]): void {
    locations.forEach((dest: Destination) => {
      new Image().src = "assets/teaser-photos/"+dest.teaseImage;
    })
    this.showMap = true

  }
}
