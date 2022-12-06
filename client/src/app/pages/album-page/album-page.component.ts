import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArtistData } from "../../data/artist-data";
import { TrackData } from "../../data/track-data";
import { AlbumData } from "../../data/album-data";
import { SpotifyService } from "src/app/services/spotify.service";
import { PredictionEvent } from "src/app/prediction-event";

@Component({
  selector: "app-album-page",
  templateUrl: "./album-page.component.html",
  styleUrls: ["./album-page.component.css"],
})
export class AlbumPageComponent implements OnInit {
  albumId: string;
  album: AlbumData;
  tracks: TrackData[];

  @ViewChild("handTracker") handTracker;
  gesture:string = "None";

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit() {
    this.albumId = this.route.snapshot.paramMap.get("id");
    //TODO: inject spotifyService and use it to get the album data and the tracks for the album

    // getAlbum(albumId: string): Promise<AlbumData>
    this.spotifyService.getAlbum(this.albumId)
    .then((album: AlbumData) => {
      this.album = album;
    });

    this.spotifyService.getTracksForAlbum(this.albumId)
    .then((tracks: TrackData[]) => {
      this.tracks = tracks;
    });
  }

  ngOnDestroy() {
    this.handTracker.stopDetection();
  }

  onPrediction(event: PredictionEvent) {
    this.gesture = event.getPrediction();

    if (this.gesture.includes("One Hand Pointing & One Hand Closed")) {
      document.getElementById("home-link").click();
    }

    if (this.gesture.includes("One Pointing Hand")) {
      document.getElementById("artist-page-link").click();
    }

    if (this.gesture.includes("Two Pointing Hands")) {
      document.getElementById("view-album-spotify").click();
    }
  }
}
