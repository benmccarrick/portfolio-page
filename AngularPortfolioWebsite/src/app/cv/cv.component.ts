import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Ben McCarrick - CV')
  }
}
