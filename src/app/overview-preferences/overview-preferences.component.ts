import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post';
import { IModifyPostPreferences } from '../models/IModifyPostPreferences';
import { Observable } from 'rxjs';
import { ProfilePreferencePost } from '../models/ProfilePreferencePost';
import { EventsService, EventTypeEnum } from '../shared/events.service';

@Component({
  selector: 'app-overview-preferences',
  templateUrl: './overview-preferences.component.html',
  styleUrls: ['./overview-preferences.component.css']
})

export class OverviewPreferencesComponent implements OnInit {
  constructor(private eventService: EventsService) { }
  
  @Input() 
  profilePosts: ProfilePreferencePost[];
  
  // need for this???
  @Input() 
  updateAction: (request: IModifyPostPreferences[]) => Observable<void>;

  @Output()
  closePanel: EventEmitter<IModifyPostPreferences[]> = new EventEmitter<IModifyPostPreferences[]>();
  
  postsToModify: ProfilePreferencePost[] = [];

  ngOnInit() {}

  checkForPostModification(product: ProfilePreferencePost){
    if(product.Action === product.ShowInOverview) {
      if(this.postsToModify.filter(p => p.Id === product.Id).length > 0){
        // remove from changes
        this.postsToModify.splice(this.postsToModify.indexOf(product), 1);
      }
    }
      else {
        // push post to changes
        this.postsToModify.push(product);
      }
  } 

  onCancel() {
    this.closePanel.emit(null);
  }

  onSave() {
    const request = this.postsToModify.map(item => {
      return {
        Code: item.Code,
        ShowInOverview: item.Action,
        Id: item.Id,
        TypeId: item.TypeId
      }as IModifyPostPreferences;
    });
    this.updateAction(request).subscribe((result)=>{
      this.closePanel.emit(this.postsToModify);
    }, (error) => {
      this.eventService.broadcast(EventTypeEnum.BusinessError, error);
    });
  }
}
