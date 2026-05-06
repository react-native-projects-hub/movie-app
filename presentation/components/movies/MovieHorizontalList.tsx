import { Movie } from '@/infraestructure/interfaces/movie.interfaces';
import React, { useEffect, useRef } from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';


interface Props {
    movies: Movie[];
    title?: string;
    className?: string;
    loadNextPage?: () => void;
}
const MovieHorizontalList = ({ title, movies, className, loadNextPage }: Props) => {

    const isloading = useRef(false);
    
    useEffect(() => {
        setTimeout(() => {
            isloading.current = false;
        }, 200);
    }, [movies])

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isloading.current) return;

        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;


        const currentPosition = contentOffset.x;
        const totalWidth = contentSize.width;
        const visibleWidth = layoutMeasurement.width;

        const isNearEnd = (currentPosition + visibleWidth + 600) >= totalWidth;

        if (!isNearEnd) return;

        isloading.current = true;

        //TODO: cargar siguientes peliculas
        loadNextPage && loadNextPage();
    }
    return (
        <View className={`${className}`} >
            {
                title && <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>
            }

            <FlatList
                horizontal={true}
                data={movies}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item,i) => `${item.id}-${i}`}
                renderItem={({ item }) => <MoviePoster poster={item.poster} id={item.id} smallPoster={true} />}
                onScroll={onScroll}
            >

            </FlatList>
        </View>
    )
}

export default MovieHorizontalList