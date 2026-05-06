import { Cast } from '@/infraestructure/interfaces/cast.interfaces'
import React from 'react'
import { FlatList } from 'react-native'
import { ActorCard } from './ActorCard'

interface Props {
    actors: Cast[]
}
const MovieCast = ({ actors }: Props) => {

    return (

        <FlatList
            horizontal={true}
            data={actors}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, i) => `${item.id}-${i}`}
            renderItem={({ item }) => <ActorCard actor={item} />}
        >
        </FlatList>
    )
}

interface Props {
    actors: Cast[]
}
export default MovieCast