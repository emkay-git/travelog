import { Component, OnInit,Input, ViewChild, ElementRef } from '@angular/core';
import { StoryImages } from '../models/story.interface';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  shouldStart: boolean = false;
  @Input() data: StoryImages[] = [] as StoryImages[];
  @Input() storyText: String;
  constructor() { }
  ngOnInit(): void {
    
  }

  ngOnChanges() {
    if(this.data&&this.data.length>0) {
    
    this.shouldStart = true;
   
    }
  }

  ngAfterViewInit() {
   
  }


}
