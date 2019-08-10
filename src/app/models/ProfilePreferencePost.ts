export class ProfilePreferencePost {
    Code: string;
    Id: number;
    ColorClass: string;
    Children: ProfilePreferencePost[] = [];
    TypeId: number;
    Identifier: string;
    ShowInOverview: boolean;
    Action: boolean;
    Title: string;
    Author: string;
}
