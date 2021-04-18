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
    {
      image: 'matheran_2.jpg',
      name: 'Matheran - October, 2018',
    },
    {
      image: 'andharban_2.JPG',
      name: 'Andharban - June, 2018',
    },
    {
      image: 'torna.jpg',
      name: 'Torna Fort - June, 2018',
    },
    {
      image: 'murud_janjira.jpg',
      name: 'Murud Janjira - January, 2018',
    },
    {
      image: 'aurangabad_2.jpg',
      name: 'Ajanta - Ellora - Aurangabad - December, 2017',
    },
  ];
  showMap: boolean = false;

  cardHeight = 350;
  cardWidth = 350;

  public ngOnInit(): void {
    this.initCardDimen();

    fetch('assets/data/location.json')
      .then((data) => data.json())
      .then((data) => this.prefetchImages(data['places']));

    window.onresize = (data) => this.changeCardsDimen(data);
  }

  initCardDimen() {
    if (window.innerWidth <= 350) {
      this.cardHeight = 300;
      this.cardWidth = 300;
    } else if (window.innerWidth <= 480) {
      this.cardHeight = 350;
      this.cardWidth = 350;
    } else {
      this.cardHeight = 450;
      this.cardWidth = 450;
    }
  }

  changeCardsDimen(currentWindowSize) {
    const width = currentWindowSize.target.innerWidth;
    if (width > 480) {
      this.cardWidth = 450;
      this.cardHeight = 450;
    }
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
