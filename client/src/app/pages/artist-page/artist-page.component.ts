import { Component, OnInit, OnDestroy, ViewChild} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArtistData } from "../../data/artist-data";
import { TrackData } from "../../data/track-data";
import { AlbumData } from "../../data/album-data";
import { SpotifyService } from "src/app/services/spotify.service";
import { PredictionEvent } from "../../prediction-event"

@Component({
  selector: "app-artist-page",
  templateUrl: "./artist-page.component.html",
  styleUrls: ["./artist-page.component.css"],
})
export class ArtistPageComponent implements OnInit {
  artistId: string;
  artist: ArtistData;
  relatedArtists: ArtistData[];
  topTracks: TrackData[];
  albums: AlbumData[];
  gesture:string = "None";

  @ViewChild("handTracker") handTracker;


  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit() {
    this.artistId = this.route.snapshot.paramMap.get("id");
    
    this.route.params.subscribe((params) => {
      this.artistId = params["id"];
      this.getArtistPageDate();
    });
  }

  getArtistPageDate(): void {
    // getArtist(artistId:string):Promise<ArtistData>
    this.spotifyService
      .getArtist(this.artistId)
      .then((artistData: ArtistData) => {
        this.artist = artistData;
      });

    // getRelatedArtists(artistId:string):Promise<ArtistData[]>
    this.spotifyService
      .getRelatedArtists(this.artistId)
      .then((relatedArtists: ArtistData[]) => {
        this.relatedArtists = relatedArtists;
      });

    // getTopTracksForArtist(artistId:string):Promise<TrackData[]>
    this.spotifyService
      .getTopTracksForArtist(this.artistId)
      .then((topTracks: TrackData[]) => {
        this.topTracks = topTracks;
      });

    // getAlbumsForArtist(artistId:string):Promise<AlbumData[]>
    this.spotifyService
      .getAlbumsForArtist(this.artistId)
      .then((albumData: AlbumData[]) => {
        this.albums = albumData;
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
      document.getElementById("view-artist-spotify").click();
    }

    if (this.gesture.includes("One Open Hand")) {
      let prev = document.querySelector("#artist-albums #carouselPrevious") as HTMLElement;
      prev.click();
    }

    if (this.gesture.includes("Two Open Hands")) {
      let next = document.querySelector("#artist-albums #carouselNext") as HTMLElement;
      next.click();
    }

    if (this.gesture.includes("One Closed Hand")) {
      let prev = document.querySelector("#similar-artists #carouselPrevious") as HTMLElement;
      prev.click();
    }

    if (this.gesture.includes("Two Closed Hands")) {
      let next = document.querySelector("#similar-artists #carouselNext") as HTMLElement;
      next.click();
    }

  }
}
