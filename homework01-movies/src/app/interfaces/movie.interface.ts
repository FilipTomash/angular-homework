import { Cast } from './cast.interface';

export interface Movie {
  title: string;
  releseDate: Date;
  producerName: string;
  genre: string;
  raiting: number;
  cast: Cast;
}
