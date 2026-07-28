import ProductCard from '@/components/ProductCard';
import Image from 'next/image';
import { products } from '@/app/mockdata/products';
import { notFound } from 'next/navigation';
import {Button} from '@/components/animate-ui/components/buttons/button'

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

const page = async ({ params }: Props) => {
    const { slug } = await params;

    const product = products.find((product) => product.slug === slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = products
        .filter((relatedProduct) => relatedProduct.id !== product.id)
        .slice(0, 3);

    return (
        <div className='px-5 py-16 lg:p-20 w-full max-w-(--max-width) mx-auto'>
            <div className="flex flex-col gap-8 items-start justify-start">
                <a href="/shop" className="">
                    <button className='capitalize flex items-center justify-start gap-3 text-(--sud-red) text-[16px]/[16px] font-medium font-archivo cursor-pointer'>
                        <Image
                            src="/arrow-left-red.png"
                            className="block shrink-0"
                            alt="back to shop"
                            width={24}
                            height={24}
                        />
                        back to shop
                    </button>
                </a>

                <div className="flex flex-col gap-8 w-full md:flex-row md:items-stretch 2xl:items-center">
                    <div
                        className="h-78.75 w-full rounded-[20px] bg-center bg-cover bg-no-repeat md:w-1/2 md:h-auto 2xl:min-h-165"
                        style={{
                            backgroundImage: `url(${product.image})`,
                        }}
                    ></div>

                    <div className="flex flex-col gap-5 items-start justify-start md:w-1/2">
                        <span className="font-opensans uppercase text-[14px]/[21px] font-bold text-start text-(--sud-green) tracking-[1.68px]">
                            {product.vendor}
                        </span>

                        <h1 className="font-archivo font-bold text-[48px]/[57.6px] capitalize text-(--sud-black)">
                            {product.name}
                        </h1>

                        <h2 className="font-archivo text-[48px]/[57.6px] font-bold text-start tracking-[-1.2px] text-(--sud-navy-blue) oldstyle-nums">
                            ${product.price.toFixed(2)}
                        </h2>

                        <p className="font-opensans text-[16px]/[24px] font-normal text-start text-(--sud-gold-amber)">
                            ● Only {product.stock} left
                        </p>

                        <p className="font-opensans text-[16px]/[24px] font-normal text-start text-(--sud-black)">
                            {product.description}
                        </p>

                        <div className="flex gap-4">
                            <Button className="bg-(--sud-red) hover:bg-(--sud-red) text-white cursor-pointer font-opensans text-[16px]/[16px] capitalize font-medium py-4 px-6 h-auto rounded-4xl">
                                add to cart
                            </Button>

                            <Button className="border border-(--sud-navy-blue) bg-transparent text-(--sud-navy-blue) cursor-pointer font-opensans text-[16px]/[16px] capitalize font-medium py-4 px-6 h-auto rounded-4xl hover:bg-(--sud-navy-blue) hover:text-white ease-in-out duration-300">
                                Cart&nbsp;·&nbsp;0
                            </Button>
                        </div>

                        <div className="p-5 flex items-center gap-3 justify-start rounded-xl border border-(--sud-gold-amber-border) bg-[#B8860B1A]">
                            <Image
                                src="/shipping.png"
                                className="block shrink-0"
                                alt="ships from our U.S. warehouse"
                                width={24}
                                height={24}
                            />

                            <p className="font-opensans text-[14px]/[21px] font-normal text-start text-(--sud-black)">
                                Ships from our U.S. warehouse — arrives in 3–5 days. No customs delays.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-16 gap-8">
                <h2 className="font-archivo font-bold text-[48px]/[57.6px] text-(--sud-black)">
                    You may also like
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full'>
                    {relatedProducts.map((relatedProduct) => (
                        <ProductCard
                            key={relatedProduct.id}
                            slug={relatedProduct.slug}
                            vendor={relatedProduct.vendor}
                            image={relatedProduct.image}
                            name={relatedProduct.name}
                            price={relatedProduct.price}
                            privateLabel={relatedProduct.privateLabel}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;