import { Component, Input, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArtistData } from "../../data/artist-data";
import { TrackData } from "../../data/track-data";
import { AlbumData } from "../../data/album-data";
import { TrackFeature } from "../../data/track-feature";
import { SpotifyService } from "src/app/services/spotify.service";
import { PredictionEvent } from "src/app/prediction-event";

@Component({
  selector: "app-track-page",
  templateUrl: "./track-page.component.html",
  styleUrls: ["./track-page.component.css"],
})
export class TrackPageComponent implements OnInit {
  trackId: string;
  track: TrackData;
  audioFeatures: TrackFeature[];

  @ViewChild("handTracker") handTracker;
  gesture:string = "None";

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit() {
    this.trackId = this.route.snapshot.paramMap.get("id");

    this.spotifyService.getTrack(this.trackId)
    .then((track: TrackData) => {
      this.track = track;
    });

    this.spotifyService.getAudioFeaturesForTrack(this.trackId)
    .then((audioFeatures: TrackFeature[]) => {
      this.audioFeatures = audioFeatures.filter(feature => TrackFeature.FeatureTypes.includes(feature.name));
      for (let feature of this.audioFeatures) {
        feature.id = this.trackId;
      }
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
      document.getElementById("album-link").click();
    }

    if (this.gesture.includes("Two Pointing Hands")) {
      document.getElementById("view-track-spotify").click();
    }
  }
}
