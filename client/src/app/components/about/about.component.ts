import { Component, Input, OnInit, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";
import { ProfileData } from "../../data/profile-data";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() gesture = "None";
  @ViewChild('profileLink') profileLink: ElementRef;
  name:string = null;
  profile_pic:string = "../../../assets/unknown.jpg";
  profile_link:string = null;

  constructor(private spotifyService: SpotifyService) {}

  getAboutMeInfo(): void {
    this.spotifyService.aboutMe().then((profileData: ProfileData): void => {
      this.name = profileData.name;
      this.profile_pic = profileData.imageURL;
      this.profile_link = profileData.spotifyProfile;
    });
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    
    if (this.gesture.includes("One Pointing Hand")) {
      this.getAboutMeInfo();
    }

    if (this.gesture.includes("Two Pointing Hands")) {
      this.profileLink.nativeElement.click();
    }
  }
}
