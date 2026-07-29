import { getShippingData } from '../lib/shipping';

import { getFAQs } from '../lib/faqs';

type Props = {};

const page = async (props: Props) => {
    const shippingSections = await getShippingData();

    return (
        <div className='py-16 px-5 max-w-4xl mx-auto w-full'>
            <div className="flex flex-col gap-3 items-start justify-start">
                <h1 className="font-archivo font-bold text-[48px]/[57.6px] capitalize text-(--sud-black)">
                    Shipping & Returns
                </h1>

                <p className="text-(--sud-black) text-[16px]/[24px] font-normal">
                    Everything ships from our U.S. warehouse — here’s exactly how it works.
                </p>
            </div>
            
            <div className="flex flex-col gap-5 mt-13">
                {shippingSections.map((shippingSection, index) => (
                    <div key={shippingSection.id} className="p-8 rounded-[20px] bg-white border border-(--sud-gold-amber-border) flex flex-col gap-8 w-full">
                        <h2 className="text-[30px]/[36px] tracking-[-1.2px] font-bold font-archivo text-start text-(--sud-navy-blue) capitalize">
                            {shippingSection.title}
                        </h2>
                        {
                            shippingSection.content.map((text, index) => (
                                <p key={index} className="text-[16px]/[24px] font-normal text-start font-opensans text-(--sud-black)">
                                    {text}
                                </p>
                            ))
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;