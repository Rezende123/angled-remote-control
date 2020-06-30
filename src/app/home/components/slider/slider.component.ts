import { Component, OnInit, Input } from '@angular/core';
import { Options } from 'ng5-slider/options';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input()
  label: string;

  value = 50;
  options: Options = {
    floor: 0,
    ceil: 100
  };

  constructor() { }

  ngOnInit(): void {
  }

}
