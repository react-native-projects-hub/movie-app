import { Cast } from '../interfaces/cast.interfaces';
import { CreditsResponse } from '../interfaces/credits-response';
import { Movie, movieDetails } from "../interfaces/movie.interfaces";
import { MovieDBMovieDetailResponse } from "../interfaces/moviedb-detail-response";
import { Result } from "../interfaces/moviedb-response";

export class MovieMapper {
    static fromTheMovieDBToMovie = (movie: Result): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average,
        }
    }

    static fromTheMovieDBToCompleteMovie = (movie: MovieDBMovieDetailResponse): movieDetails => {

        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average,
            budget: movie.budget,
            duration: movie.runtime,
            genres: movie.genres.map(g => g.name),
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map(c => c.name)
        }
    }

    static fromTheMovieCreditsToCast = (credits: CreditsResponse): Cast[] => {


        return credits.cast.map(c => {
            return {
                'id': c.id,
                'name': c.name,
                'character': c.character ?? '',
                avatar: c.profile_path
                    ? `https://image.tmdb.org/t/p/w500${c.profile_path}`
                    : 'https://i.stack.imgur.com/l60Hf.png', // esto en caso de no tener imagen

            }
        }
        );
    }
}