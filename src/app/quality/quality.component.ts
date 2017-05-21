import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wp-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.css']
})
export class QualityComponent implements OnInit {
  pictures = Array(8).fill(0).map((value, idx) => `/assets/images/portfolio/75x75/g${idx + 1}.jpg`);

  constructor() { }

  ngOnInit() {
  }

}
