import { Component, OnInit,Input, ViewChild, ElementRef } from '@angular/core';
import { StoryImages } from '../models/story.interface';
// import * as $ from 'jquery';
declare var $ : any;
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input() data: StoryImages[] = [] as StoryImages[];
  @Input() storyText: String;
  constructor() { }
  ngOnInit(): void {
    
  }

  ngOnChanges() {
    if(this.data&&this.data.length>0) {
      setTimeout(_ =>{ 
      $("#carouselExampleControls").carousel("pause").removeData();
      $("#carouselExampleControls").carousel(0);
    },0);
    
    }
  }

  ngAfterViewInit() {
    
  
  }


}
