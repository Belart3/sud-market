'use client';
import Link from 'next/link';
import React from 'react'
import {Button} from '@/components/animate-ui/components/buttons/button'

type Props = {
    slug: string;
    vendor: string;
    image: string;
    name: string;
    price: number;
    privateLabel: boolean;
}

function ProductCard(props: Props) {
    return (
        <Link href={`/shop/${props.slug}`} className="block">
            <div className="flex flex-col gap-3 items-start justify-start p-2.5 rounded-4xl border border-(--sud-gold-amber-border) bg-white w-full">
                <div className="bg-cover bg-no-repeat bg-center p-3 rounded-3xl flex items-start justify-start h-75 w-full" style={{ backgroundImage: `url(${props.image})` }}>
                    {
                        props.privateLabel ? 
                            <div className="flex items-center justify-center rounded-[20px] bg-(--sud-gold-amber) py-2 px-4">
                                <span className="text-[12px]/[18px] font-bold uppercase font-opensans text-(--sud-black)tracking-(1.44px)">
                                    SUD MARKET · PRIVATE LABEL
                                </span>
                            </div> : null
                    }
                </div>
                <div className="flex flex-col gap-6 py-5 px-2.5 justify-start w-full">
                    <div className="flex flex-col gap-3 justify-start">
                    <span className="font-opensans uppercase text-[14px]/[21px] font-bold text-start text-(--sud-green) tracking-[1.68px]">
                        {props.vendor}
                    </span>
                    <p className="font-opensans text-[16px]/[24px] font-normal text-start text-(--sud-black)">
                        {props.name}
                    </p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                    <p className="font-archivo text-[30px]/[36px] font-bold text-start tracking-[-1.2px] text-(--sud-black) proportional-nums">
                        ${props.price}
                    </p>
                    <Button onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                    }} className="font-archivo text-[16px]/[16px] capitalize py-3 px-6 h-auto rounded-4xl font-medium text-white bg-(--sud-red) hover:bg-(--sud-red) cursor-pointer transition-colors duration-300 ease-in-out z-50">
                        add to cart
                    </Button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard