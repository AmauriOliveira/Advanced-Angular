import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoService } from './../video.service';

interface Repository {
  name: string;
  description: string;
  language: string;
}

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
  repos!: Observable<Repository[]>;
  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.repos = this.videoService.getRepositories();
  }

}
