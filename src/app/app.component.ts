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
      image: 'mysore_2.jpg',
      name: 'Mysore - Ooty - Coorg - March, 2020',
    },
    {
      image: 'agra_2.jpg',
      name: 'Agra - Feb, 2020',
    },
    {
      image: 'jharkhand.jpg',
      name: 'Ranchi - Feb, 2020',
    },
    {
      image: 'kartarpur_2.jpg',
      name: 'Kartarpur Corridor - January, 2020',
    },
    {
      image: 'alwar.jpg',
      name: 'Alwar, Bharathpur Sanct - December, 2020',
    },
    {
      image: 'andaman_2.jpg',
      name: 'Andaman Islands - November, 2019',
    },
    {
      image: 'bhutan_2.jpg',
      name: 'Bhutan - September, 2019',
    },
    {
      image: 'jaipur_bhangarh.jpg',
      name: 'Jaipur, Bhangarh - July, 2019',
    },
    {
      image: 'badrinath.jpg',
      name: 'Badrinath - June, 2019',
    },
    {
      image: 'ranthambore.jpg',
      name: 'Ranthambore - March, 2019',
    },
    {
      image: 'amritsar.jpg',
      name: 'Amritsar - Feb, 2019',
    },
    {
      image: 'goa_2.jpg',
      name: 'Goa - Mumbai - December, 2019',
    },
    {
      image: 'rameswaram_2.jpg',
      name: 'Rameswaram - Madurai - Hogenakkal - November, 2018',
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
    if (elementId == 'code') {
      window.open('https://github.com/emkay-git', '_blank').focus();
    } else {
      let id = document.getElementById(elementId);
      id.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
