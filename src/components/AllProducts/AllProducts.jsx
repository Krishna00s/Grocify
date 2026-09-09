import React from 'react'
import Banner from '../Banner/Banner'
import BgAll from '../../assets/all-banner.jpg'
import CategoryPage from '../CategoryPage/CategoryPage'

const AllProducts = () => {
    return (
        <div>
            <CategoryPage title="All Products" bgImage={BgAll} categories={['All']} />
        </div>
    )
}

export default AllProducts
