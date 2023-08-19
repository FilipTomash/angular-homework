import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  @Input() movieTitle: string;
  @Input() movie: Movie;

  @Output() moviesOutput = new EventEmitter<Movie>();

  onBtnClick() {
    this.moviesOutput.emit(this.movie);
  }
}
