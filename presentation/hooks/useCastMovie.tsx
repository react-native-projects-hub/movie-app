import { getCastByMovieIdAction } from "@/core/actions/cast/getCastByMovieId.action";
import { useQuery } from "@tanstack/react-query";

export const useCastMovie = (id: number) => {

    const castQuery = useQuery({
        queryKey: ['cast_movie', id],
        queryFn: () => getCastByMovieIdAction(id),
        staleTime: 1000 * 60 * 60 * 24,
    });

    return { castQuery }

}