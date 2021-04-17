import { Component } from '@angular/core';
import { Destination } from './models/destination.interface';

export interface PhotoData {
  name: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'travelog';
  photoData: PhotoData[] = [
    {
      image: 'jaipur_food_2.jpg',
      name: 'Jaipur - April, 2021',
    },
    {
      image: 'goa_3.jpg',
      name: 'Goa - Feb, 2021',
    },
    {
      image: 'pondicherry.jpg',
      name: 'Pondicherry - January, 2021',
    },
    {
      image: 'mysore.jpg',
      name: 'Mysore - Ooty - Coorg - March, 2020',
    },
    {
      image: 'agra.jpg',
      name: 'Agra - Feb, 2020',
    },
    {
      image: 'ranchi.jpg',
      name: 'Ranchi - Feb, 2020',
    },
    {
      image: 'kartarpur.jpg',
      name: 'Kartarpur Corridor - Feb, 2020',
    },
    {
      image: 'alwar.jpg',
      name: 'Alwar, Bharathpur Sanct - Feb, 2020',
    },
    {
      image: 'andaman.jpg',
      name: 'Andaman Islands - November, 2020',
    },
    {
      image: 'bhutan.jpg',
      name: 'Bhutan - September, 2020',
    },
    {
      image: 'jaipur.jpg',
      name: 'Jaipur, Bhangarh - July, 2020',
    },
    {
      image: 'badrinath.jpg',
      name: 'Badrinath - July, 2020',
    },
    {
      image: 'ranthambore.jpg',
      name: 'Ranthambore - July, 2020',
    },
    {
      image: 'amritsar.jpg',
      name: 'Amritsar - July, 2020',
    },
    {
      image: 'goa_2.jpg',
      name: 'Goa - Mumbai - July, 2020',
    },
    {
      image: 'rameswaram_2.jpg',
      name: 'Rameswara - Madurai - Hogenakkal - July, 2020',
    },
  ];
  showMap: boolean = false;
  public ngOnInit(): void {
    fetch('assets/data/location.json')
      .then((data) => data.json())
      .then((data) => this.prefetchImages(data['places']));
  }

  private prefetchImages(locations: Destination[]): void {
    locations.forEach((dest: Destination) => {
      new Image().src = 'assets/teaser-photos/' + dest.teaseImage;
    });
    this.showMap = true;
  }

  scrollSection(elementId: string) {
    let id = document.getElementById(elementId);
    id.scrollIntoView({ behavior: 'smooth' });
  }
}
