import { Component, OnInit, Input, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { AlbumData } from '../../data/album-data';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SpotifyService ]
})
export class SearchComponent implements OnInit {
  @Input() gesture:string = "None";
  searchString:string;
  searchCategory:string = 'artist';
  searchCategories:string[] = ['artist', 'album', 'track'];
  resources:ResourceData[];

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  search(): void {
    if (this.searchString) {
      this.resources = null;
      this.spotifyService.searchFor(this.searchCategory, this.searchString)
      .then((resources: ResourceData[]) => {
        this.resources = resources;
      });
    }
  }

  onSelectChange(): void {
    if (this.searchString) {
      this.search();
    }
  }

  handleEnterKey(): void {
    this.search();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.gesture.includes("Two Open Hands")) {
      this.search();
    }

    if (this.gesture.includes("One Open Hand")) {
      
      if (this.searchCategory === "artist") {
        this.searchCategory = "album";
      } else if (this.searchCategory === "album") {
        this.searchCategory = "track"
      } else {
        this.searchCategory = "artist";
      }

      this.resources = null;
    }
  }
}
