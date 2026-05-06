import { Movie } from '@/infraestructure/interfaces/movie.interfaces';
import React, { useRef } from 'react';
import { useWindowDimensions, View } from 'react-native';
import Carousel, {
    ICarouselInstance
} from "react-native-reanimated-carousel";
import MoviePoster from './MoviePoster';
interface Props {
    movies: Movie[];

}
const MainSlideShow = ({ movies }: Props) => {

    const ref = useRef<ICarouselInstance>(null);
    const { width } = useWindowDimensions();
    return (
        <View className='h-[250px] w-full'>
            <Carousel
                ref={ref}
                data={movies}
                renderItem={({ item }) => <MoviePoster poster={item.poster} id={item.id} />}
                width={200}         // ← ancho real de pantalla
                height={350}
                style={{
                    width: width,
                    height: 350,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                mode='parallax'
                modeConfig={{
                    parallaxScrollingOffset: 50,   // ← píxeles, no decimal
                    parallaxScrollingScale: 0.9,   // ← entre 0 y 1, no 50
                }}
                defaultIndex={1}
            />
        </View>
    )
}

export default MainSlideShow