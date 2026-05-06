import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infraestructure/interfaces/cast.interfaces";
import { CreditsResponse } from "@/infraestructure/interfaces/credits-response";
import { MovieMapper } from "@/infraestructure/mappers/movier.mapper";

export const getCastByMovieIdAction = async (movieId: string | number): Promise<Cast[]> => {
    try {

        const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`);

        const cast = (MovieMapper.fromTheMovieCreditsToCast(data));
        return cast;


    } catch (error) {
        console.log("error en actores");
        console.log(error);
        throw 'cannot load now playing movies';
    }
}