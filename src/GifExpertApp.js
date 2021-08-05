import React, { useState } from 'react';
import { AddCAtegory } from './components/AddCAtegory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    // const handleAdd = () =>{
    //     // setstate([ ...categories, 'HunterXhunter' ]);
    //     setstate( cats => [...cats, 'El Zorro'] )

    // }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCAtegory setCategories = { setCategories } />
            <hr/>

            <ol>
                {
                    categories.map( category => 
                        <GifGrid
                            key = { category }
                            category = { category }
                        />
                        
                    )
                }
            </ol>

        </>
    );
};