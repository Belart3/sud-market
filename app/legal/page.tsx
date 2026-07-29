import React from 'react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

import { getLegalPolicies } from '../lib/legal-policies';

type Props = {};

const page = async (props: Props) => {
    const legalPolicies = await getLegalPolicies();

    return (
        <div className='py-16 px-5 max-w-4xl mx-auto w-full'>
            <div className="flex flex-col gap-3 items-start justify-start">
                <h1 className="font-archivo font-bold text-[48px]/[57.6px] capitalize text-(--sud-black)">
                    legal
                </h1>

                <p className="text-(--sud-black) text-[16px]/[24px] font-normal">
                    The policies and agreements that govern Sud Market.
                </p>
            </div>

            <div className="flex flex-col gap-4 w-full mt-10">
                {legalPolicies.map((legalPolicy, sectionIndex) => {
                    const itemValue = legalPolicy.id.toString();

                    return (
                        <Accordion
                            key={legalPolicy.id}
                            defaultValue={
                                sectionIndex === 0 ? [itemValue] : undefined
                            }
                            className="rounded-[20px] border border-(--sud-gold-amber-border) w-full! bg-white! overflow-hidden"
                        >
                            <AccordionItem
                                value={itemValue}
                                className="bg-white! border-none"
                            >
                                <AccordionTrigger className="text-[21px]/[25.2px] tracking-[-0.84px] font-bold text-start font-archivo text-(--sud-navy-blue) p-5 lg:p-10 bg-white! data-[state=open]:bg-white! cursor-pointer">
                                    {legalPolicy.trigger}
                                </AccordionTrigger>

                                <AccordionContent className="text-[16px]/[24px] font-normal text-start font-opensans text-(--sud-black) p-5 lg:p-10 lg:pt-0 bg-white! data-[state=open]:bg-white!">
                                    <div className="flex flex-col gap-4">
                                        {legalPolicy.content.intro.map(
                                            (paragraph, index) => (
                                                <p className='text-[16px]/[24px] font-normal text-start font-opensans text-(--sud-black)'
                                                    key={`${legalPolicy.id}-intro-${index}`}
                                                >
                                                    {paragraph}
                                                </p>
                                            )
                                        )}

                                        <ul className="flex flex-col">
                                            {legalPolicy.content.points.map(
                                                (point, index) => (
                                                    <li className='text-[16px]/[24px] font-normal text-start font-opensans text-(--sud-black)'
                                                        key={`${legalPolicy.id}-point-${index}`}
                                                    >
                                                        · {point}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    );
                })}
            </div>
        </div>
    );
};

export default page;