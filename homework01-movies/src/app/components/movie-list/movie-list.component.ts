import { Component, Input } from '@angular/core';
import { isMovieClicked } from 'src/app/interfaces/movie-shown.enum';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  @Input() movieListTitle: string;
  @Input() movieTitle: string;

  isMovieShown = false;
  isMovieClicked = isMovieClicked.NOTCLICKED;
  selectedMovie: Movie = null;

  onMovieSelect(movie: Movie) {
    this.selectedMovie = movie;
    this.isMovieShown = true;
    this.isMovieClicked = isMovieClicked.CLICKED;
  }

  onMovieClose() {
    this.isMovieShown = false;
    this.isMovieClicked = isMovieClicked.NOTCLICKED;
  }

  movies: Movie[] = [
    {
      title: 'The Adventure Begins',
      releseDate: new Date(2023, 6, 15),
      producerName: 'Jane Smith',
      genre: 'Adventure',
      raiting: 4.5,
      cast: {
        leadingActor: 'John Doe',
        supportingActor: 'Alice Johnson',
        secondSupportingActor: 'Bob Williams',
        screenWriter: 'Emily Brown',
        director: 'Michael Anderson',
      },
    },
    {
      title: 'Romantic Escapade',
      releseDate: new Date(2023, 1, 28),
      producerName: 'Alex Clark',
      genre: 'Romance',
      raiting: 3.8,
      cast: {
        leadingActor: 'David Lee',
        supportingActor: 'Sophia White',
        secondSupportingActor: 'Oliver Taylor',
        screenWriter: 'Ella Martinez',
        director: 'Sarah Johnson',
      },
    },
    {
      title: 'Intriguing Mystery',
      releseDate: new Date(2023, 4, 10),
      producerName: 'Robert Adams',
      genre: 'Mystery',
      raiting: 4.2,
      cast: {
        leadingActor: 'Emma Brown',
        supportingActor: 'William Jackson',
        secondSupportingActor: 'Grace Martin',
        screenWriter: 'Henry Wilson',
        director: 'Laura Smith',
      },
    },
    {
      title: 'Sci-Fi Odyssey',
      releseDate: new Date(2023, 8, 20),
      producerName: 'Chris Taylor',
      genre: 'Science Fiction',
      raiting: 4.7,
      cast: {
        leadingActor: 'Michael Roberts',
        supportingActor: 'Sophie Adams',
        secondSupportingActor: 'James White',
        screenWriter: 'Olivia Martinez',
        director: 'Thomas Johnson',
      },
    },
    {
      title: 'Historical Drama',
      releseDate: new Date(2023, 2, 15),
      producerName: 'Julia Williams',
      genre: 'Drama',
      raiting: 4.0,
      cast: {
        leadingActor: 'Andrew Davis',
        supportingActor: 'Grace Robinson',
        secondSupportingActor: 'Daniel Turner',
        screenWriter: 'Ava Clark',
        director: 'Robert Wilson',
      },
    },
  ];
}
