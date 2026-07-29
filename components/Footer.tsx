import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
    return (
    <footer className=' flex flex-col bg-(--sud-black)'>
        <div className="px-5 py-10 lg:px-20 w-full gap-10 flex flex-col max-w-(--max-width) mx-auto">
            <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-6 items-start justify-start max-w-[320px]">
                    <Image
                        src="/footer-logo.png"
                        className="block shrink-0"
                        alt="SUD Market"
                        width={74}
                        height={64}
                    />
                    <p className="text-[16px]/[24px] font-normal text-white">
                        The trusted bridge between authentic Sudanese businesses and the Sudanese community in America.
                    </p>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start">
                    <span className='uppercase font-opensans text-[14px]/[21px] font-bold tracking-[1.68px] text-(--sud-gold-amber)'>
                        shop
                    </span>
                    <div className="flex flex-col gap-4 items-start justify-start">
                        <a href="" className="text-(--sud-B100) font-opensans text-[16px]/[24px] font-bold capitalize">
                            jewelry
                        </a>
                        <a href="" className="text-(--sud-B100) font-opensans text-[16px]/[24px] font-bold capitalize">
                            perfumes
                        </a>
                        <a href="" className="text-(--sud-B100) font-opensans text-[16px]/[24px] font-bold capitalize">
                            food
                        </a>
                        <a href="" className="text-(--sud-B100) font-opensans text-[16px]/[24px] font-bold capitalize">
                            clothes
                        </a>
                        <a href="" className="text-(--sud-B100) font-opensans text-[16px]/[24px] font-bold capitalize">
                            home & decor
                        </a>
                        <a href="" className="text-(--sud-B100) font-opensans text-[16px]/[24px] font-bold capitalize">
                            sud market line
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start">
                    <span className='uppercase font-opensans text-[14px]/[21px] font-bold tracking-[1.68px] text-(--sud-gold-amber)'>
                        help
                    </span>
                    <div className="flex flex-col gap-4 items-start justify-start">
                        <a href="/faqs" className="text-(--sud-B100) font-opensans text-[16px]/[24px] font-bold capitalize">
                            FAQs
                        </a>
                        <a href="/shipping-and-returns" className="text-(--sud-B100) font-opensans text-[16px]/[24px] font-bold capitalize">
                            shipping & returns
                        </a>
                        <a href="/contact" className="text-(--sud-B100) font-opensans text-[16px]/[24px] font-bold capitalize">
                            contact
                        </a>
                        <a href="/legal" className="text-(--sud-B100) font-opensans text-[16px]/[24px] font-bold capitalize">
                            legal
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start">
                    <span className='uppercase font-opensans text-[14px]/[21px] font-bold tracking-[1.68px] text-(--sud-gold-amber)'>
                        vendors
                    </span>
                    <div className="flex flex-col gap-4 items-start justify-start">
                        <a href="" className="text-(--sud-B100) font-opensans text-[16px]/[24px] font-bold capitalize">
                            become a vendor
                        </a>
                        <a href="" className="text-(--sud-B100) font-opensans text-[16px]/[24px] font-bold capitalize">
                            vendor support
                        </a>
                    </div>
                </div>
            </div>
            <hr className='w-full text-[#B8860B33]' />
            <span className='text-center text-(--sud-B200) text-[16px]/[24px] font-normal'>
                © 2026 Sud Market · Built by Sudanese, for Sudanese
            </span>
        </div>
    </footer>
    )
}

export default Footer;