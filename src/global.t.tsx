interface Rating {
  Source: string;
  Value: string;
}

export interface singleMovieType {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface searchMovieType {
  Title: string;
  title: string;
  Year: string;
  year: string;
  imdbID: string;
  imdb_id: string;
  Type?: string;
  Poster?: string;
  poster?: string;
  index?: number;
} 

export interface searchResultsType {
  Search: searchMovieType[];
  totalResults: string;
  Response: boolean;
}