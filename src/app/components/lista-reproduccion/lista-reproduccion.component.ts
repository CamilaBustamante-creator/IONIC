import { Component, inject, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MusicService, Track} from '../../services/music.service';

@Component({
  selector: 'app-lista-reproduccion',
  templateUrl: './lista-reproduccion.component.html',
  styleUrls: ['./lista-reproduccion.component.scss'],
  standalone: false,
})
export class ListaReproduccionComponent {

  private musicServe = inject(MusicService)
  tracks: Track[] = [];
  currentAudio: HTMLAudioElement | null = null;
  playingTrackId: number | null= null;

  onSearch(event:any){
    const query = event.target.value;
    if (!query || query.trim() === '') return '';

    this.musicServe. searchTrack(query) subscribe ({
      next: (res)=> {
        this.tracks = res.data;
      },
      error: (err) =>
    })
  }

  constructor() { }

  

}
