import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/core/interfaces/songs.interface';
import { PlaylistsService } from 'src/app/core/services/playlists.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
  songs: Song[];
  selectedSong: Song;

  constructor(private playlistService: PlaylistsService) {}

  ngOnInit(): void {
    this.playlistService.getSongs();

    this.playlistService.songsEmitter.subscribe((value) => {
      this.songs = value;
    });

    this.playlistService.selectedSongEmitter.subscribe((value) => {
      this.selectedSong = value;
    });
  }
  onSongClick(song: Song) {
    this.playlistService.onSongSelect(song);
  }
}
