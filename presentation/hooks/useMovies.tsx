import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import { popularPlayingAction } from '@/core/actions/movies/popular.action';
import { topRatingPlayingAction } from '@/core/actions/movies/top.action';
import { upcomingPlayingAction } from '@/core/actions/movies/upcoming.action';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useMovies = () => {
    // Queries
    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 //24 hrs
    });

    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 //24 hrs
    })

    const upcomingQuery = useQuery({
        queryKey: ['movies', 'upcoming'],
        queryFn: upcomingPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 //24 hrs
    })

    const topRatedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'topRated'],
        queryFn: ({ pageParam, }) => {
            return topRatingPlayingAction({ page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24, //24 hrs
        getNextPageParam: (_, pages) => pages.length + 1
    })




    return {
        nowPlayingQuery,
        popularQuery,
        upcomingQuery,
        topRatedQuery
    };
};
