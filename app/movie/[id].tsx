import MovieCast from '@/presentation/components/movie/MovieCast';
import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import { useCastMovie } from '@/presentation/hooks/useCastMovie';
import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';


const MovieScreen = () => {

    const { id } = useLocalSearchParams();

    const { movieQuery } = useMovie(+id);
    const { castQuery } = useCastMovie(+id);

    if (movieQuery.isLoading || !movieQuery.data || castQuery.isLoading || !castQuery.data) {
        return (
            <View className='flex flex-1 justify-center items-center'>
                <Text className='mb-4'>Espere Porfavor</Text>
                <ActivityIndicator color={"purple"} size={30} />
            </View>
        )
    }

    return (
        <ScrollView>
            <MovieHeader
                poster={movieQuery.data.poster}
                title={movieQuery.data.title}
                originalTitle={movieQuery.data.originalTitle}
            />
            <MovieDescription movie={movieQuery.data} />
            <MovieCast actors={castQuery.data} />
        </ScrollView>
    )
}

export default MovieScreen