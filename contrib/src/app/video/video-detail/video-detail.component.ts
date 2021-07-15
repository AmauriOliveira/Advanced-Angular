import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { VideoService } from '../video.service';

interface Repository {
  name: string;
}

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss'],
})
export class VideoDetailComponent implements OnInit {
  repo!: Observable<Repository>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    const { params } = this.activatedRoute;

    params.subscribe((data) => this.videoService.getRepository(data.name));
    this.repo.subscribe((data) => console.log(data));
  }
}
