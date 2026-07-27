import ProductCard from '@/components/ProductCard';
import React from 'react'

type Props = {}

const page = (props: Props) => {
    const products = [
        {
            vendor: "NUBIA GOLD",
            name: "Gold-Plated Kholkhal Anklet",
            price: "75.00",
            privateLabel: true,
            image: "/home-and-decor.jpg",
            category :"jewelry"
        },
        {
            vendor: "NUBIA GOLD",
            name: "Filigree Hoop Earrings",
            price: "48.00",
            privateLabel: false,
            image: "/home-and-decor.jpg",
            category :"perfumes"
        },
        {
            vendor: "BAKHOOR AL-NILE",
            name: "Filigree Hoop Earrings",
            price: "64.00",
            privateLabel: false,
            image: "/home-and-decor.jpg",
            category :"food"
        },
        {
            vendor: "NUBIA GOLD",
            name: "Gold-Plated Kholkhal Anklet",
            price: "75.00",
            privateLabel: false,
            image: "/home-and-decor.jpg",
            category :"clothes"
        },
        {
            vendor: "NUBIA GOLD",
            name: "Filigree Hoop Earrings",
            price: "48.00",
            privateLabel: true,
            image: "/home-and-decor.jpg",
            category :"home-decor"
        },
        {
            vendor: "NUBIA GOLD",
            name: "Gold-Plated Kholkhal Anklet",
            price: "75.00",
            privateLabel: false,
            image: "/home-and-decor.jpg",
            category :"sud-market-line"
        },
        {
            vendor: "NUBIA GOLD",
            name: "Gold-Plated Kholkhal Anklet",
            price: "75.00",
            privateLabel: false,
            image: "/home-and-decor.jpg",
            category :"jewelry"
        },
        {
            vendor: "BAKHOOR AL-NILE",
            name: "Filigree Hoop Earrings",
            price: "64.00",
            privateLabel: true,
            image: "/home-and-decor.jpg",
            category :"perfume"
        },
        {
            vendor: "NUBIA GOLD",
            name: "Gold-Plated Kholkhal Anklet",
            price: "75.00",
            privateLabel: false,
            image: "/home-and-decor.jpg",
            category :"food"
        },
        {
            vendor: "NUBIA GOLD",
            name: "Gold-Plated Kholkhal Anklet",
            price: "75.00",
            privateLabel: false,
            image: "/home-and-decor.jpg",
            category :"clothes"
        },
        {
            vendor: "NUBIA GOLD",
            name: "Gold-Plated Kholkhal Anklet",
            price: "75.00",
            privateLabel: false,
            image: "/home-and-decor.jpg",
            category :"home-decor"
        },
        {
            vendor: "NUBIA GOLD",
            name: "Gold-Plated Kholkhal Anklet",
            price: "75.00",
            privateLabel: false,
            image: "/home-and-decor.jpg",
            category :"sud-market-line"
        },
    ];
    const categories = [...new Set(products.map((item) => item.category))]
    return (
        <div className='px-5 py-16'>
            <div className="flex flex-col gap-6 max-w-(--max-width) mx-auto">
                <div className="flex flex-col gap-3 items-start justify-start">
                    <h1 className="font-archivo font-bold text-[48px]/[57.6px] capitalize text-(--sud-black)">
                        shop
                    </h1>
                    <p className="text-(--sud-black) text-[16px]/[24px] font-normal">
                        Every brand is Sudanese-owned, vetted and approved by our team.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 items-center justify-start">
                    <button className='py-3 px-6 rounded-4xl bg-white hover:bg-(--sud-navy-blue) transition-colors ease-in duration-300 flex items-center justify-center hover:text-white text-(--sud-black) text-[16px]/[16px] capitalize font-medium font-archivo cursor-pointer border border-(--sud-gold-amber-border) hover:border-transparent'>
                        All
                    </button>
                    {
                        categories.map((category, index) => (
                            <button key={index} className='py-3 px-6 rounded-4xl bg-white hover:bg-(--sud-navy-blue) transition-colors ease-in duration-300 flex items-center justify-center hover:text-white text-(--sud-black) text-[16px]/[16px] capitalize font-medium font-archivo cursor-pointer border border-(--sud-gold-amber-border) hover:border-transparent'>
                                {category}
                            </button>
                        ))
                    }
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        products.map((product, index) => (
                            <ProductCard key={index} vendor={product.vendor} image={product.image} name={product.name} price={product.price} privateLabel={product.privateLabel} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default page