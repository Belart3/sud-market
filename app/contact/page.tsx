import React from 'react'
import {Button} from '@/components/animate-ui/components/buttons/button'
import Image from 'next/image'
import { MultiSelect } from '@mantine/core'


const page = () => {
    return (
        <div className='py-16 px-5 lg:p-20 max-w-7xl mx-auto w-full grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch'>
            <div className="flex flex-col gap-3 items-start justify-start md:col-start-1 md:row-start-1">
                <h1 className="font-archivo font-bold text-[48px]/[57.6px] capitalize text-(--sud-black)">
                    We’re Here to Help
                </h1>
                <p className="text-(--sud-black) text-[16px]/[24px] font-normal">
                    Have a question about an order, a product, or becoming a vendor? Our team — Sudanese, just like you — is ready to help. We respond within 24 hours.
                </p>
            </div>

            <div className="bg-white rounded-[20px] p-5 w-full md:p-10 md:col-start-2 md:row-start-1 md:row-span-2">
                <form action="" className='flex flex-col gap-4 w-full'>
                    <input
                        type="text"
                        className='p-4 rounded-[12px] bg-(--background-dark) border border-(--sud-gold-amber-border) text-[16px]/[24px] font-normal font-opensans text-(--sud-black) placeholder:text-[16px]/[24px] placeholder:font-normal placeholder:font-opensans placeholder:text-(--sud-black)'
                        placeholder='Your name'
                    />

                    <input
                        type="email"
                        className='p-4 rounded-[12px] bg-(--background-dark) border border-(--sud-gold-amber-border) text-[16px]/[24px] font-normal font-opensans text-(--sud-black) placeholder:text-[16px]/[24px] placeholder:font-normal placeholder:font-opensans placeholder:text-(--sud-black)'
                        placeholder='Email'
                    />

                    <input
                        type="text"
                        className='p-4 rounded-[12px] bg-(--background-dark) border border-(--sud-gold-amber-border) text-[16px]/[24px] font-normal font-opensans text-(--sud-black) placeholder:text-[16px]/[24px] placeholder:font-normal placeholder:font-opensans placeholder:text-(--sud-black)'
                        placeholder='Order Number (Optional)'
                    />

                    <input
                        type="text"
                        className='p-4 rounded-[12px] bg-(--background-dark) border border-(--sud-gold-amber-border) text-[16px]/[24px] font-normal font-opensans text-(--sud-black) placeholder:text-[16px]/[24px] placeholder:font-normal placeholder:font-opensans placeholder:text-(--sud-black)'
                        placeholder='Order Issue'
                    />

                    <textarea
                        className='p-4 rounded-[12px] bg-(--background-dark) border border-(--sud-gold-amber-border) text-[16px]/[24px] font-normal font-opensans text-(--sud-black) placeholder:text-[16px]/[24px] placeholder:font-normal placeholder:font-opensans placeholder:text-(--sud-black)'
                        placeholder='Your Message'
                    />

                    <Button
                        type='submit'
                        className="bg-(--sud-red) hover:bg-(--sud-red) text-white cursor-pointer font-opensans text-[16px]/[24px] capitalize font-medium h-auto py-3 px-6 rounded-4xl"
                    >
                        send message
                    </Button>
                </form>
            </div>

            <div className="flex flex-col gap-5 md:col-start-1 md:row-start-2">
                <div className="flex gap-3 w-full items-center justify-start">
                    <div className="flex items-center justify-center p-3.5 rounded-[12px] bg-(--sud-gold-amber-border)">
                        <Image
                            src="/mail.png"
                            className="block shrink-0"
                            alt="send us a mail today"
                            width={32}
                            height={32}
                        />
                    </div>

                    <p className="text-[16px]/[24px] font-normal font-opensans text-(--sud-black) text-start">
                        <span className='font-bold'>Email — </span>
                        support@sudmarket.com
                    </p>
                </div>

                <div className="flex gap-3 w-full items-center justify-start">
                    <div className="flex items-center justify-center p-3.5 rounded-[12px] bg-(--sud-gold-amber-border)">
                        <Image
                            src="/whatsapp.png"
                            className="block shrink-0"
                            alt="Get through to us fast on whatsapp"
                            width={32}
                            height={32}
                        />
                    </div>

                    <p className="text-[16px]/[24px] font-normal font-opensans text-(--sud-black) text-start">
                        <span className='font-bold'>WhatsApp — </span>
                        +1 (555) 012-3456 — fastest way to reach us
                    </p>
                </div>

                <div className="flex gap-3 w-full items-center justify-start">
                    <div className="flex items-center justify-center p-3.5 rounded-[12px] bg-(--sud-gold-amber-border)">
                        <Image
                            src="/clock.png"
                            className="block shrink-0"
                            alt="Support hours"
                            width={32}
                            height={32}
                        />
                    </div>

                    <p className="text-[16px]/[24px] font-normal font-opensans text-(--sud-black) text-start">
                        <span className='font-bold'>Support hours:</span> Mon–Fri, 9am–6pm CST
                    </p>
                </div>

                <div className="flex gap-3 w-full items-center justify-start">
                    <div className="flex items-center justify-center p-3.5 rounded-[12px] bg-(--sud-gold-amber-border)">
                        <Image
                            src="/store.png"
                            className="block shrink-0"
                            alt="Are you a vendor? Contact your account rep directly"
                            width={32}
                            height={32}
                        />
                    </div>

                    <p className="text-[16px]/[24px] font-normal font-opensans text-(--sud-black) text-start">
                        Already a vendor? Reach your account rep directly, or email
                        <a
                            href="mailto:vendors@sudmarket.com"
                            className="text-(--sud-red) ms-1 hover:underline"
                        >
                            vendors@sudmarket.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page