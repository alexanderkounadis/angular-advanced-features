import { Post } from '../models/post';
import { ProfilePreferencePost } from '../models/ProfilePreferencePost';
import { IModifyPostPreferences } from '../models/IModifyPostPreferences';
import { Observable } from 'rxjs';

export abstract class ProfilePreferencesHost {
    public showPreferencesPanel: boolean = false;
    public profilePreferencesPanelIsOpened = false;
    public allPosts: Post[] = [];
    public postsForProfilePreferences: ProfilePreferencePost[] = [];
    public updateAction: (request: IModifyPostPreferences[]) => Observable<void> = null;
    public hasVisiblePosts = true;

    public onClosePreferencesPanel(changes: IModifyPostPreferences[]){
        // reload page???
        if(changes!=null && changes.length) {
            changes.forEach(change => {
                const post  = this.getStalePost(change.Id, change.TypeId);
                if(post !=null) {
                    post.IsPreferred = change.ShowInOverview;
                }
            });
            // edw ksanazwgrafizw to component
            this.renderView();
        }
        this.showPreferencesPanel = false;
        this.profilePreferencesPanelIsOpened = false;
    }

    public showProfilePreferencesComponent() {
        this.postsForProfilePreferences = [];
        this.profilePreferencesPanelIsOpened = true;
        this.allPosts.forEach(item => {
            const hideUnhideItem = new ProfilePreferencePost();
            hideUnhideItem.Id = item.Id;
            hideUnhideItem.TypeId = item.TypeId;
            hideUnhideItem.Title = item.Title;
            hideUnhideItem.ShowInOverview = item.IsPreferred;
            this.postsForProfilePreferences.push(hideUnhideItem);
        });
        this.showPreferencesPanel = true;
        this.profilePreferencesPanelIsOpened = true;
    }

    protected getStalePost(id: number, typeId: number): Post {
        const profilePosts = this.allPosts.filter(post=>{
            post.Id === id && post.TypeId === typeId 
        });
        return profilePosts != null && profilePosts.length > 0 ? profilePosts[0] : null;
    }

    protected onVisiblePostsRenderEnd(visiblePosts: Post[]): void {
        this.hasVisiblePosts = visiblePosts && visiblePosts.length > 0;
    }

    abstract renderView(): void;
    abstract getChildren(post: Post): ProfilePreferencePost[];
}
