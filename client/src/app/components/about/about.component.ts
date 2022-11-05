import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";
import { ProfileData } from "../../data/profile-data";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:string = null;
  profile_pic:string = "../../../assets/unknown.jpg";
  profile_link:string = null;

  constructor(private spotifyService: SpotifyService) {}

  getAboutMeInfo(): void {
    this.spotifyService.aboutMe().then((profileData: ProfileData): void => {
      this.name = profileData.name;
      this.profile_pic = profileData.imageURL;
      this.profile_link = profileData.spotifyProfile;
      console.log(this);
    }).catch(error => {
      console.log(`ERROR: ${error.message}`);
    });
  }

  ngOnInit() {}
}
