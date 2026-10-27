import { Component, inject } from '@angular/core';

import { MusicService, Track } from '../../services/music.service';

@Component({
  selector: 'app-lista-reproduccion',
  templateUrl: './lista-reproduccion.component.html',
  styleUrls: ['./lista-reproduccion.component.scss'],
  standalone: false
})
export class ListaReproduccionComponent {

  private musicServe = inject(MusicService);

  searchTerm: string = ''; // 👈 Variable vinculada con [(ngModel)]
  tracks: Track[] = [];
  currentAudio: HTMLAudioElement | null = null;
  playingTrackId: number | null = null;

  buscar(): void { // 👈 Coincide con el (ionInput)="buscar()" del HTML
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      return;
    }

    // Usamos this.searchTerm en lugar de event.target.value
    this.musicServe.searchTracks(this.searchTerm).subscribe({
      next: (res) => {
        this.tracks = res.data;
      },
      error: (err) => console.error("Error al buscar:", err)
    });
  }

  playPreview(track: Track): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      if (this.playingTrackId === track.id) {
        this.playingTrackId = null;
        return;
      }
    }

    this.currentAudio = new Audio(track.preview);
    this.currentAudio.play();
    this.playingTrackId = track.id;

    this.currentAudio.onended = () => {
      this.playingTrackId = null;
    };
  }
}
