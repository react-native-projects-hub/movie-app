import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const index = () => {

    const safeArea = useSafeAreaInsets();
    const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();


    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color="purple" size={30} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
                <Text className='text-3xl font-bold px-4 mb-2'>Movie App</Text>
                {/**Carrousel de imagenes */}
                <MainSlideShow movies={nowPlayingQuery.data ?? []} />
                {/**Populares */}
                <MovieHorizontalList className='mb-5' title='Populares' movies={popularQuery.data ?? []} />
                <MovieHorizontalList className='mb-5' title='Top' movies={topRatedQuery.data?.pages?.flat() ?? []}  loadNextPage={topRatedQuery.fetchNextPage}/>
                <MovieHorizontalList className='mb-5' title='Próximamente' movies={upcomingQuery.data ?? []} />
            </View>
        </ScrollView>
    )
}

export default index