import React from 'react'

type Props = {
    key: number,
    image: string,
    vendor: string,
    name: string,
    price: string,
    privateLabel: boolean
}

function ProductCard(props: Props) {
    return (
        <div key={props.key} className="flex flex-col gap-3 items-start justify-start p-2.5 rounded-4xl border border-(--sud-gold-amber-border) bg-white w-full">
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
                <a href="/" className="font-archivo text-[16px]/[16px] capitalize py-3 px-6 rounded-4xl font-medium text-white bg-(--sud-red) transition-colors duration-300 ease-in-out">
                    add to cart
                </a>
                </div>
            </div>
        </div>
    )
}

export default ProductCard