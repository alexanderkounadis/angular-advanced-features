import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { IModifyPostPreferences } from '../models/IModifyPostPreferences';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Post[]> {
    var posts = this.http.get<Post[]>(`${API_URL}`);
    return posts;
  }
  public patchPreferences(request: IModifyPostPreferences[]): Observable<void> {
    return this.http.patch<void>(`${API_URL}`, request);
  }
}
