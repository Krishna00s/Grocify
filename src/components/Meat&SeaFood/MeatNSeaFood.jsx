import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgMeat from '../../assets/seafood-banner.jpg'

const MeatNSeaFood = () => {
    return (
        <div>
            <CategoryPage title="Meat & SeaFoods" bgImage={BgMeat} categories={['Meat', 'SeaFood']} />
        </div>
    )
}

export default MeatNSeaFood
