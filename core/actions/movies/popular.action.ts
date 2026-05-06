import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movier.mapper";
import { movieApi } from "../../api/movie-api";

export const popularPlayingAction = async () => {
    try {

        const { data } = await movieApi.get<MovieDBMoviesResponse>('/popular');
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
     
        return movies;

    } catch (error) {
        console.log(error);
        throw 'cannot load now playing movies';
    }
}