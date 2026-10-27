import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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
    private apiUrl = "https://corsproxy.io/?key=TU_API_KEY_AQUI&url=https%3A%2F%2Fapi.deezer.com%2Fsearch%3Fq=";


    searchTracks(query: string){
        return this.http.get<{ data: Track[] }>(`${this.apiUrl}${encodeURIComponent(query)}`);
    }

}
