import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movier.mapper";
import { movieApi } from "../../api/movie-api";

export const upcomingPlayingAction = async () => {
    try {

        const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming');

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
     
        return movies;

    } catch (error) {
        console.log(error);
        throw 'cannot load now playing movies';
    }
}