import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Overlay from 'ol/Overlay'
import Point from 'ol/geom/Point'
import Feature from 'ol/Feature';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import {Vector } from 'ol/source';
import {Destination } from '../models/destination.interface';
import TileJSON from 'ol/source/TileJSON';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  //map object
  map: Map;

  //what needs to be displayed.
  popup: any;
  content: any;
  showDialog: boolean = false;
  locationList: Destination[] = [];
  hoveredPlace: Destination = {} as Destination;
  clickedPlace: Destination = {} as Destination;

  constructor() { }
  
  ngOnInit(): void {

    fetch("assets/data/location.json").then((data) => data.json()).then(
      (data) => 
     { 
      this.locationList =  data['places'];
      this.initMap(data['places']);
      this.addTeaserOverlay();
      this.addEventsOnMap();
    }
    
    );

  }



  checkFeature(e) {
    var pixel = this.map.getEventPixel(e.originalEvent);
    var hit = this.map.hasFeatureAtPixel(pixel);
    if(hit) {
      var feature = this.map.forEachFeatureAtPixel(pixel, function (feature) {
        return feature;
      });
     return feature;
    }
    return null;
  }

  openPopup(event) {
    let pixel = this.map.getEventPixel(event);
      var feature = this.map.forEachFeatureAtPixel(pixel, function (feature) {
        return feature;
      });
      if (feature) {
        var coordinates = feature.getGeometry().getCoordinates();
        this.popup.setPosition(coordinates);
      } else {
        this.popup.setPosition(null)
      }
  
    
  }

  initMap(destination: Destination[]): void {
    
    this.map =  new Map({
      target: 'map',
      layers: [
        new TileLayer({
          // source: new OSM()
          source: new TileJSON({
            url: 'https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1',
            crossOrigin: 'anonymous',
          }),
        }), this.markerLayers(destination)
      ]
      ,
      view: new View({
        center: olProj.fromLonLat([77.1025,28.7041 ]),
        zoom:4
      })
    });

  }

  addEventsOnMap() {
    this.showDialog = false;
    this.map.on('click', (e) => {
      if(this.checkFeature(e)) {
     
       this.showDialog = true;
       if(this.hoveredPlace&&this.hoveredPlace['storyImages']&&this.hoveredPlace['storyImages'].length>0) {
        this.clickedPlace = this.hoveredPlace;
       }
       else this.clickedPlace = {} as Destination;
       setTimeout(() => {
        let button =  document.getElementById('buttonText');
        button.click();
       },0);
      
      }
    }); 
  
    this.map.on('pointermove', (e) => {
      if (e.dragging) {
        return;
      }
      let feature = this.checkFeature(e);
      document.getElementById('map').style.cursor = feature? 'pointer':'';
      if(feature) {
        var coordinates = feature.getGeometry().getCoordinates();
        this.popup.setPosition(coordinates);
        let button =  document.getElementById('popup');
        let placeId = feature.get('name').split(":")[1];
        this.hoveredPlace = this.locationList.find((place:Destination) => place.id == placeId);
        button.click();
       
      }
      else this.popup.setPosition(null);
    });
  }

  addTeaserOverlay() {
    var element = document.getElementById('popup');

    this.popup = new Overlay({
    element: element,
    positioning: 'bottom-center',
    stopEvent: false,
    offset: [0, 0],

  });

  this.map.addOverlay(this.popup);

  }

  markerLayers(destination:Destination[]) {
    console.log(destination);
    let vectorSource = new Vector({
      //create empty vector
    });
    
    //create a bunch of icons and add to source vector
    for (let i=0;i<destination.length;i++){
        let iconFeature = new Feature({
          geometry: new Point(olProj.transform([destination[i].lon,destination[i].lat], 'EPSG:4326',   'EPSG:3857')),
        name: destination[i].title+":"+destination[i].id,
        });
        vectorSource.addFeature(iconFeature);
    }

    //create the style
    let iconStyle = new Style({
      image: new Icon(({
        anchor: [0.5, 0.5],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        opacity: 1,
        src: 'https://icons.iconarchive.com/icons/icons8/windows-8/16/Maps-Geo-Fence-icon.png'
      }))
    });

//https://icons.iconarchive.com/icons/hopstarter/button/16/Button-Add-icon.png
//Image by <a href="https://pixabay.com/users/mmi9-1424200/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1315651">mmi9</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1315651">Pixabay</a>
    //add the feature vector to the layer vector, and apply a style to whole layer
    let vectorLayer = new VectorLayer({
      source: vectorSource,
      style: iconStyle
    });
    return vectorLayer
  }
}


//Image by <a href="https://pixabay.com/users/bartekhdd-2657534/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1593045">bartekhdd</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1593045">Pixabay</a>