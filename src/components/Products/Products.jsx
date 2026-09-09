import { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom'

const Products = () => {

    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood'];
    const [activeTab, setActiveTab] = useState('All');

    let filteredItems = activeTab === 'All' ? ProductList : ProductList.filter(item => item.category === activeTab)

    const renderCards = filteredItems.slice(0, 8).map(product => {
        return (
            <Cards key={product.id || product.name} image={product.image} name={product.name} price={product.price} category={product.category}  />
        )
    })

    return (
        <section>
            <div className='max-w-350 mx-auto px-10 py-20'>
                <Heading Highlight='Our' text2='Products' />

                {/* Tabs */}
                <div className='grid grid-cols-3 place-content-center md:flex gap-3 justify-center mt-10'>
                    {categories.map(cat => {
                        return (
                            <button key={cat} className={`px-5 py-2 text-lg rounded-lg cursor-pointer  ${activeTab === cat ? 'bg-linear-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'}`}
                            onClick={() => setActiveTab(cat)}>
                                {cat}
                            </button>
                        )

                    })}
                </div>

                {/* Product Listing here */}
                <div className='grid grid-col-1 md:grid-cols-4 gap-9 mt-20'>
                    {renderCards}
                </div>

                <div className='flex justify-center items-center mt-12'>
                    <Link to='/allproducts' className='bg-linear-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-104 hover:to-orange-600 transition-all duration-300 cursor-pointer'>View all</Link>
                </div>

            </div>
        </section>
    )
}

export default Products
