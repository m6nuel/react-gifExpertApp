import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifs( category );


    return (
        <>
            <h3 className="card-grid animate__heartBeat"> { category } </h3>
                { loading && <p className="animate__animated animate__flash"> Loading... </p> }
                {
                    images.map( (img) => (
                        <GifGridItem 
                            key = { img.id }
                            { ...img }
                        />
                    )) 
                }

        </> 
    )
}
