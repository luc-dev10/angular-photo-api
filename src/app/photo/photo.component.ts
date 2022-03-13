import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  // properties
  photoUrl: string = '';
  // injection of service
  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto() {
    this.photoService.getPhoto().subscribe((res) => {
      this.photoUrl = res.urls.regular;
    });
  }
}
