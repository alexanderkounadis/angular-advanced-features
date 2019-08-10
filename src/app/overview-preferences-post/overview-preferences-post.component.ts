import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfilePreferencePost } from '../models/ProfilePreferencePost';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Post } from '../models/post';

@Component({
  selector: 'app-overview-preferences-post',
  templateUrl: './overview-preferences-post.component.html',
  styleUrls: ['./overview-preferences-post.component.css']
})
export class OverviewPreferencesPostComponent implements OnInit {

@Input()
post: ProfilePreferencePost;

@Output()
postToModify: EventEmitter<ProfilePreferencePost> = new EventEmitter<ProfilePreferencePost>();

constructor() { }

ngOnInit() {}

hideUnhide(post: ProfilePreferencePost, event: MatSlideToggleChange) {
  post.ShowInOverview = event.checked;
  this.postToModify.emit(post);
}

}
