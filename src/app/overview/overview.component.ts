import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post';
import { PostsService } from '../shared/posts.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ProfilePreferencesHost } from '../common/ProfilePreferencesHost';
import { IModifyPostPreferences } from '../models/IModifyPostPreferences';
import { Subscription } from 'rxjs';
import { WindowInspector, OverviewThresholdResolution } from '../helpers/size-inspector';
import { ProfilePreferencePost } from '../models/ProfilePreferencePost';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent extends ProfilePreferencesHost implements OnInit, OnDestroy {
  public myPosts: Post[] = [];
  public totalPosts: number;
  public loading: boolean = true;
  public wideScreen: boolean;

  private resizeSubscription: Subscription;

  constructor(private postsService: PostsService,
              private spinner: NgxSpinnerService,
              private windowInspector: WindowInspector) {
    super();
  }

  showPreferencesPanel: boolean = false;
  postsForPreferences: Post[] = [];

  ngOnInit() {
    this.updateAction = (req: IModifyPostPreferences[]) => {
      return this.postsService.patchPreferences(req);
    };
    this.renderView();
  }

  ngOnDestroy() {
    if(this.resizeSubscription){
      this.resizeSubscription.unsubscribe();
    }
  };

  renderView() {
    this.spinner.show();
    setTimeout(() => {
      this.fetchPosts();
    }, 4000);
    this.resizeSubscription = this.windowInspector.getWindow().subscribe(window => {
      this.wideScreen = window.innerWidth >= OverviewThresholdResolution ? true:false;
    });
  }

  fetchPosts() {
    const posts$ = this.postsService.getAll();
    posts$.subscribe(res => {
      this.myPosts = res;
      this.allPosts = res;
      this.spinner.hide();
      this.loading = false;
    }, error => (this.loading = false));
  }

  onPreferencesPanelShow() {
    this.showPreferencesPanel = true;
    this.postsForPreferences = this.myPosts;
    this.profilePreferencesPanelIsOpened = true;
  }

  getChildren(post: Post): ProfilePreferencePost[] {
    return [];
  }
}
