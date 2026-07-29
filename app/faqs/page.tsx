import React from 'react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

import { getFAQs } from '../lib/faqs';

type Props = {};

const page = async (props: Props) => {
    const faqs = await getFAQs();

    return (
        <div className='py-16 px-5 max-w-4xl mx-auto w-full'>
            <div className="flex flex-col gap-3 items-start justify-start">
                <h1 className="font-archivo font-bold text-[48px]/[57.6px] capitalize text-(--sud-black)">
                    FAQs
                </h1>

                <p className="text-(--sud-black) text-[16px]/[24px] font-normal">
                    Answers to the questions our community asks most.
                </p>
            </div>

            {faqs.map((faqSection, sectionIndex) => {
                const firstItem = faqSection.accordion[0];
                const defaultValue =
                    sectionIndex === 0 && firstItem
                        ? [`${faqSection.id}-${firstItem.id}`]
                        : undefined;

                return (
                    <div
                        key={faqSection.id}
                        className="flex flex-col gap-5 items-start mt-8 w-full"
                    >
                        <h2 className="text-[30px]/[36px] tracking-[-1.2px] font-bold font-archivo text-start text-(--sud-navy-blue) capitalize">
                            {faqSection.h2}
                        </h2>

                        <div className="flex flex-col gap-4 w-full">
                            {faqSection.accordion.map((item) => {
                                const itemValue = `${faqSection.id}-${item.id}`;

                                const isInitiallyOpen =
                                    sectionIndex === 0 &&
                                    firstItem?.id === item.id;

                                return (
                                    <Accordion
                                        key={item.id}
                                        defaultValue={
                                            isInitiallyOpen ? [itemValue] : undefined
                                        }
                                        className="rounded-[20px] border border-(--sud-gold-amber-border) w-full! bg-white! overflow-hidden"
                                    >
                                        <AccordionItem
                                            value={itemValue}
                                            className="bg-white! border-none"
                                        >
                                            <AccordionTrigger className="text-[16px]/[24px] font-bold text-start font-opensans text-(--sud-black) p-5 lg:p-10 bg-white! data-[state=open]:bg-white! cursor-pointer">
                                                {item.trigger}
                                            </AccordionTrigger>

                                            <AccordionContent className="text-[16px]/[24px] font-normal text-start font-opensans text-(--sud-black) p-5 lg:p-10 lg:pt-0 bg-white! data-[state=open]:bg-white!">
                                                {item.content}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default page;