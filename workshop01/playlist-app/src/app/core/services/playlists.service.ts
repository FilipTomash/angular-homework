import { EventEmitter, Injectable } from '@angular/core';
import { Song } from '../interfaces/songs.interface';
import { musicMockData } from '../const/music.mock';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsService {
  songs: Song[] = musicMockData;

  songsEmitter = new EventEmitter<Song[]>();
  selectedSongEmitter = new EventEmitter<Song>();

  getSongs() {
    setTimeout(() => {
      this.songsEmitter.emit(this.songs);
    }, 1000);
  }

  onSongSelect(song: Song) {
    this.selectedSongEmitter.emit(song);
  }
}
