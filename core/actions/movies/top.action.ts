import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movier.mapper";
import { movieApi } from "../../api/movie-api";


interface Options {
    page?: number;
    limit?: number;
}
export const topRatingPlayingAction = async ({ page = 1, limit = 10}: Options) => {
    try {

        const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated',{
            params:{
                page,
                //limit
            }
        });

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        return movies;

    } catch (error) {
        console.log(error);
        throw 'cannot load now playing movies';
    }
}