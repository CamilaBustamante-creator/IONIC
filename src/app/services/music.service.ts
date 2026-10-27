import {Injectable, inject} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

export interface Track {
  id: number;
  title: string;
  preview: string;
  artist: {name: string};
  album: {cover_medium: string};
}

@Injectable({
  providedIn: 'root'
})

export class MusicService {
  private http = inject(HttpClient)
  private apiUrl = "https://corsproxy.io/?https://api.deezer.com/search?"
}
