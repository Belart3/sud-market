import React from 'react'
import {Button} from '@/components/animate-ui/components/buttons/button'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='w-full'>
            <header className='flex flex-col gap-6 items-center justify-center w-full py-16 px-5 lg:p-20 bg-center 2xl:bg-top bg-cover bg-no-repeat 2xl:min-h-180' style={{
                backgroundImage:
                "linear-gradient(rgba(39, 46, 110, 0.50), rgba(39, 46, 110, 0.50)), url('/become-a-vendor.jpg')",
            }}>
                <span className="text-white text-center font-opensans text-[14px]/[21px] font-bold uppercase tracking-[1.68px]">
                    EMPOWERING SUDANESE ENTREPRENEURS. Preserving Our Legacy.
                </span>
                <h1 className="text-white text-center font-archivo text-[48px]/[57.6px] lg:text-[73px]/[73px] font-bold">
                    Join the Sud Market Family
                </h1>
                <p className="text-white text-center font-opensans text-[16px]/[24px] font-normal">
                    Sud Market is powered by Sudanese entrepreneurs from around the world. We provide the platform — you bring the culture and the brand.
                </p>
            </header>
            <div className="max-w-(--max-width) 2xl:mx-auto flex flex-col gap-8 items-start justify-start mt-16 lg:mt-20 mx-5 lg:mx-20">
                <h2 className="font-archivo font-bold text-[48px]/[57.6px] capitalize text-(--sud-black)">
                    Our 4-Step Partnership Process
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-6 p-5 rounded-[20px] border border-(--sud-gold-amber-border) bg-white">
                        <span className="font-archivo font-bold text-[48px]/[57.6px] text-(--sud-gold-amber)">
                            01
                        </span>
                        <h3 className="font-archivo font-bold text-[30px]/[36px] tracking-[-1.2px] text-(--sud-black)">
                            Apply
                        </h3>
                        <p className="font-opensans text-[16px]/[24px] text-(--sud-black) font-normal">
                            Submit the vendor form to tell us about your brand and products.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 p-5 rounded-[20px] border border-(--sud-gold-amber-border) bg-white">
                        <span className="font-archivo font-bold text-[48px]/[57.6px] text-(--sud-gold-amber)">
                            02
                        </span>
                        <h3 className="font-archivo font-bold text-[30px]/[36px] tracking-[-1.2px] text-(--sud-black)">
                            Meet with our team
                        </h3>
                        <p className="font-opensans text-[16px]/[24px] text-(--sud-black) font-normal">
                            We get to know you, review your products, understand your goals, and ensure your brand aligns with our quality and authenticity standards.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 p-5 rounded-[20px] border border-(--sud-gold-amber-border) bg-white">
                        <span className="font-archivo font-bold text-[48px]/[57.6px] text-(--sud-gold-amber)">
                            03
                        </span>
                        <h3 className="font-archivo font-bold text-[30px]/[36px] tracking-[-1.2px] text-(--sud-black)">
                            Build the partnership
                        </h3>
                        <p className="font-opensans text-[16px]/[24px] text-(--sud-black) font-normal">
                            We finalize pricing, create your digital storefront, and establish a long-term partnership focused on growth and shared success.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 p-5 rounded-[20px] border border-(--sud-gold-amber-border) bg-white">
                        <span className="font-archivo font-bold text-[48px]/[57.6px] text-(--sud-gold-amber)">
                            04
                        </span>
                        <h3 className="font-archivo font-bold text-[30px]/[36px] tracking-[-1.2px] text-(--sud-black)">
                            Ship to the U.S.
                        </h3>
                        <p className="font-opensans text-[16px]/[24px] text-(--sud-black) font-normal">
                            Send your inventory to our U.S. warehouse. From there, we handle fulfillment and delivery to your customers.
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-(--max-width) 2xl:mx-auto flex flex-col gap-10 items-start justify-start mt-16 mx-5 lg:mx-20 lg:mt-20">
                <h2 className="font-archivo font-bold text-[48px]/[57.6px] capitalize text-(--sud-black)">
                    Why Partner With Sud Market
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-6">
                    <div className="h-80 rounded-[20px] w-full bg-center bg-cover bg-no-repeat lg:h-auto" style={{
                        backgroundImage:
                        "url('/fast-delivery.png')",
                    }}></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
                        <div className="flex flex-col gap-6 p-5 lg:p-10 rounded-[20px] border border-(--sud-gold-amber-border) bg-[#B8860B1A]">
                            <h3 className="font-archivo font-bold text-[30px]/[36px] tracking-[-1.2px] text-(--sud-navy-blue)">
                                Built by Sudanese, for Sudanese
                            </h3>
                            <p className="font-opensans text-[16px]/[24px] text-(--sud-black) font-normal">
                                We understand the importance of your brand, your story, and the customers you’re serving.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6 p-5 lg:p-10 rounded-[20px] border border-(--sud-gold-amber-border) bg-[#B8860B1A]">
                            <h3 className="font-archivo font-bold text-[30px]/[36px] tracking-[-1.2px] text-(--sud-navy-blue)">
                                Vendor dashboard & support
                            </h3>
                            <p className="font-opensans text-[16px]/[24px] text-(--sud-black) font-normal">
                                Manage products, track orders and inventory, and get a dedicated account representative.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6 p-5 lg:p-10 rounded-[20px] border border-(--sud-gold-amber-border) bg-[#B8860B1A]">
                            <h3 className="font-archivo font-bold text-[30px]/[36px] tracking-[-1.2px] text-(--sud-navy-blue)">
                                U.S. market — without the complexity
                            </h3>
                            <p className="font-opensans text-[16px]/[24px] text-(--sud-black) font-normal">
                                Sell in the U.S. without worrying about tax or legal compliance — we handle it for you.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6 p-5 lg:p-10 rounded-[20px] border border-(--sud-gold-amber-border) bg-[#B8860B1A]">
                            <h3 className="font-archivo font-bold text-[30px]/[36px] tracking-[-1.2px] text-(--sud-navy-blue)">
                                Fast shipping for your customers
                            </h3>
                            <p className="font-opensans text-[16px]/[24px] text-(--sud-black) font-normal">
                                Products ship from our U.S. warehouse — no customs delays or overseas fees.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-(--max-width) 2xl:mx-auto flex flex-col gap-6 items-start justify-start mx-5 p-5 rounded-[20px] my-16 lg:m-20 lg:p-20 lg:grid lg:grid-cols-2 lg:gap-6 lg:items-center" style={{
                backgroundImage: "linear-gradient(#272E6E 0%, #0A1050 100%)",
            }}>
                <div className="flex flex-col gap-6 items-start justify-start">
                    <h2 className="text-[48px]/[57.6px] lg:text-[73px]/[73px] font-bold font-archivo text-start text-white">
                        Ready to grow your brand & legacy?
                    </h2>
                    <p className="text-[16px]/[24px] text-white font-normal font-opensans text-start">
                        Help bring the tastes, scents, and traditions of Sudan to homes across the United States.
                    </p>
                </div>
                <div className="rounded-[20px] bg-white p-5 w-full lg:p-10">
                    <form className="flex flex-col gap-4 items-start justify-start w-full">
                        <input
                            type="text"
                            className='p-4 rounded-[12px] bg-(--background-dark) border border-(--sud-gold-amber-border) text-[16px]/[24px] font-normal font-opensans text-(--sud-black) w-full placeholder:text-[16px]/[24px] placeholder:font-normal placeholder:font-opensans placeholder:text-(--sud-black)'
                            placeholder='Brand name'
                        />

                        <input
                            type="text"
                            className='p-4 rounded-[12px] bg-(--background-dark) border border-(--sud-gold-amber-border) text-[16px]/[24px] font-normal font-opensans text-(--sud-black) w-full placeholder:text-[16px]/[24px] placeholder:font-normal placeholder:font-opensans placeholder:text-(--sud-black)'
                            placeholder='Your name'
                        />

                        <div className="flex gap-4 w-full">
                            <input
                                type="email"
                                className='p-4 rounded-[12px] bg-(--background-dark) border border-(--sud-gold-amber-border) text-[16px]/[24px] font-normal font-opensans text-(--sud-black) w-full placeholder:text-[16px]/[24px] placeholder:font-normal placeholder:font-opensans placeholder:text-(--sud-black)'
                                placeholder='Email'
                            />
                            <input
                                type="tel"
                                className='p-4 rounded-[12px] bg-(--background-dark) border border-(--sud-gold-amber-border) text-[16px]/[24px] font-normal font-opensans text-(--sud-black) w-full placeholder:text-[16px]/[24px] placeholder:font-normal placeholder:font-opensans placeholder:text-(--sud-black)'
                                placeholder='Country'
                            />
                        </div>

                        <input
                            type="text"
                            className='p-4 rounded-[12px] bg-(--background-dark) border border-(--sud-gold-amber-border) text-[16px]/[24px] font-normal font-opensans text-(--sud-black) w-full placeholder:text-[16px]/[24px] placeholder:font-normal placeholder:font-opensans placeholder:text-(--sud-black)'
                            placeholder='Primary category'
                        />

                        <textarea
                        className='p-4 w-full rounded-[12px] bg-(--background-dark) border border-(--sud-gold-amber-border) text-[16px]/[24px] font-normal font-opensans text-(--sud-black) placeholder:text-[16px]/[24px] placeholder:font-normal placeholder:font-opensans placeholder:text-(--sud-black)'
                        placeholder='Tell us about your brand and products'
                        />

                        <Button
                            type='submit'
                            className="w-full bg-(--sud-red) hover:bg-(--sud-red) text-white cursor-pointer font-opensans text-[16px]/[24px] capitalize font-medium h-auto py-3 px-6 rounded-4xl"
                        >
                            apply to become a vendor
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page