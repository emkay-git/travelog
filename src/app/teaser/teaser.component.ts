import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss'],
})
export class TeaserComponent implements OnInit {
  @Input() title: String = '';
  @Input() placeName: String = '';
  @Input() backgroundImage: String = '';
  @Input() width = '200';
  @Input() height = '200';
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    console.log(this.title);
  }
}
