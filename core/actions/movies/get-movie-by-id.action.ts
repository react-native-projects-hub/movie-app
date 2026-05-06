import { movieApi } from "@/core/api/movie-api";
import { movieDetails } from "@/infraestructure/interfaces/movie.interfaces";
import { MovieDBMovieDetailResponse } from "@/infraestructure/interfaces/moviedb-detail-response";
import { MovieMapper } from "@/infraestructure/mappers/movier.mapper";

export const getMovieByIdAction = async (id: string | number): Promise<movieDetails> => {
    try {


        const { data } = await movieApi.get<MovieDBMovieDetailResponse>(`/${id}`);       
        const movie = (MovieMapper.fromTheMovieDBToCompleteMovie(data));
        return movie;


    } catch (error) {
        console.log(error);
        throw 'cannot load now playing movies';
    }
}