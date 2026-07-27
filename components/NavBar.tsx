'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Twirl as Hamburger } from 'hamburger-react';

type Props = {};

const NavBar = (props: Props) => {
    const [isOpen, setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const previousScrollY = useRef(0);
    const accumulatedScroll = useRef(0);
    const previousDirection = useRef<'up' | 'down' | null>(null);
    const animationFrame = useRef<number | null>(null);

    useEffect(() => {
        previousScrollY.current = Math.max(window.scrollY, 0);

        const updateNavbar = () => {
            const currentScrollY = Math.max(window.scrollY, 0);
            const scrollDifference =
                currentScrollY - previousScrollY.current;

            /*
             * Always display the navbar when the user is
             * close to the top of the page.
             */
            if (currentScrollY <= 50) {
                setIsVisible(true);
                accumulatedScroll.current = 0;
                previousDirection.current = null;
                previousScrollY.current = currentScrollY;
                animationFrame.current = null;

                return;
            }

            /*
             * Ignore extremely small scroll movements.
             */
            if (Math.abs(scrollDifference) < 1) {
                animationFrame.current = null;
                return;
            }

            const currentDirection =
                scrollDifference > 0 ? 'down' : 'up';

            /*
             * Reset the accumulated distance whenever
             * the user changes scroll direction.
             */
            if (currentDirection !== previousDirection.current) {
                accumulatedScroll.current = 0;
                previousDirection.current = currentDirection;
            }

            accumulatedScroll.current += Math.abs(scrollDifference);

            /*
             * Hide after scrolling down by at least 18px.
             */
            if (
                currentDirection === 'down' &&
                accumulatedScroll.current >= 18 &&
                !isOpen
            ) {
                setIsVisible(false);
                accumulatedScroll.current = 0;
            }

            /*
             * Show after scrolling upward by at least 24px.
             */
            if (
                currentDirection === 'up' &&
                accumulatedScroll.current >= 24
            ) {
                setIsVisible(true);
                accumulatedScroll.current = 0;
            }

            previousScrollY.current = currentScrollY;
            animationFrame.current = null;
        };

        const handleScroll = () => {
            if (animationFrame.current !== null) {
                return;
            }

            animationFrame.current =
                window.requestAnimationFrame(updateNavbar);
        };

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);

            if (animationFrame.current !== null) {
                window.cancelAnimationFrame(animationFrame.current);
            }
        };
    }, [isOpen]);

    return (
        <nav
            className={`
                inset-x-0 top-0 z-50 w-full
                transform-gpu
                transition-transform duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                motion-reduce:transition-none
                ${
                    isVisible || isOpen
                        ? 'translate-y-00'
                        : '-translate-y-full0'
                }
            `}
        >
            <div className='w-full bg-white flex flex-col items-center justify-between border-b border-(--sud-gold-amber-border)'>
                <div className="flex items-center justify-between w-full lg:gap-10 px-5 py-4 lg:px-20 max-w-(--max-width) mx-auto">
                    <a href="/">
                        <Image
                            src="/logo.png"
                            className="block shrink-0"
                            alt="SUD Market"
                            width={104}
                            height={40}
                        />
                    </a>

                    {/* mobile menu */}
                    <div className="flex lg:hidden items-center justify-center gap-6">
                        <a href="/" className="">
                            <Image
                                src="/user.png"
                                alt="create or login to SUD market"
                                width={24}
                                height={24}
                            />
                        </a>

                        <a href="/" className="">
                            <Image
                                src="/cart.png"
                                alt="view cart"
                                width={24}
                                height={24}
                            />
                        </a>

                        <Hamburger
                            toggled={isOpen}
                            toggle={() => setOpen(!isOpen)}
                            size={40}
                            color="#000"
                        />
                    </div>

                    {/* desktop menu */}
                    <div className="hidden lg:flex items-center gap-8 w-full">
                        <div className="relative min-w-0 flex-1">
                            <input
                                type="text"
                                placeholder="Search jewelry, perfumes, food, thobes…"
                                className="w-full hidden placeholder-shown:text-sm bg-(--background-dark) placeholder-shown:font-normal placeholder-shown:font-opensans placeholder-shown:text-(--sud-B200) lg:block border border-(--sud-gold-amber-border) rounded-4xl ps-12 p-3 focus-within:ring-2 outline-0 focus-within:ring-(--sud-navy-blue)"
                            />

                            <Image
                                src="/search.png"
                                alt="search"
                                width={24}
                                height={24}
                                className="absolute top-1/2 left-3 -translate-y-1/2"
                            />
                        </div>

                        <div className="flex items-center gap-4 shrink-0">
                            <a
                                href="/"
                                className="text-[16px]/[16px] capitalize text-(--sud-black) hover:text-(--sud-red) font-medium transition-colors ease-in-out duration-300 font-archivo"
                            >
                                sign in
                            </a>

                            <a href="/" className="cursor-pointer">
                                <button className="whitespace-nowrap bg-(--sud-red) hover:bg-(--sud-red) transition-colors ease-in-out duration-300 text-white px-6 py-3 flex items-center gap-3 rounded-4xl text-[16px]/[16px] font-medium capitalize font-archivo cursor-pointer">
                                    <Image
                                        src="/cart-white.png"
                                        alt="view cart"
                                        width={24}
                                        height={24}
                                        className="inline-block mr-2"
                                    />

                                    Cart · 0
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white hidden lg:flex flex-col items-center justify-between border-b border-(--sud-gold-amber-border)">
                <div className="flex items-center justify-between w-full lg:gap-10 max-w-(--max-width)  px-5 py-4 lg:px-20 mx-auto">
                    <div className="flex items-center gap-10 w-full">
                        <a
                            href="/"
                            className="text-[16px]/[16px] capitalize text-(--sud-black) hover:text-(--sud-red) font-medium transition-colors ease-in-out duration-300 font-archivo"
                        >
                            home
                        </a>

                        <a
                            href="/shop"
                            className="text-[16px]/[16px] capitalize text-(--sud-black) hover:text-(--sud-red) font-medium transition-colors ease-in-out duration-300 font-archivo"
                        >
                            shop
                        </a>

                        <a
                            href="/"
                            className="text-[16px]/[16px] capitalize text-(--sud-black) hover:text-(--sud-red) font-medium transition-colors ease-in-out duration-300 font-archivo"
                        >
                            FAQs
                        </a>

                        <a
                            href="/"
                            className="text-[16px]/[16px] capitalize text-(--sud-black) hover:text-(--sud-red) font-medium transition-colors ease-in-out duration-300 font-archivo"
                        >
                            shipping & returns
                        </a>

                        <a
                            href="/"
                            className="text-[16px]/[16px] capitalize text-(--sud-black) hover:text-(--sud-red) font-medium transition-colors ease-in-out duration-300 font-archivo"
                        >
                            contact
                        </a>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                        <a
                            href="/"
                            className="text-[16px]/[16px] capitalize text-(--sud-green) hover:text-(--sud-red) font-medium transition-colors ease-in-out duration-300 font-archivo"
                        >
                            become a vendor

                            <Image
                                src="/arrow-right-green.png"
                                alt="become a vendor on SUD Market"
                                width={24}
                                height={24}
                                className="inline-block ml-4"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div
                className={`w-full bg-white lg:hidden flex flex-col items-center justify-between px-5 py-4 lg:px-20 border-b border-(--sud-gold-amber-border) ${
                    isOpen ? 'block' : 'hidden'
                }`}
            >
                <div className="flex items-center justify-between w-full lg:gap-10 max-w-(--max-width) mx-auto">
                    <div className="flex flex-col items-start gap-4 w-full">
                        <a
                            href="/"
                            className="text-[16px]/[16px] capitalize text-(--sud-black) hover:text-(--sud-red) font-medium transition-colors ease-in-out duration-300 font-archivo"
                        >
                            Jewelry
                        </a>

                        <a
                            href="/"
                            className="text-[16px]/[16px] capitalize text-(--sud-black) hover:text-(--sud-red) font-medium transition-colors ease-in-out duration-300 font-archivo"
                        >
                            Perfumes
                        </a>

                        <a
                            href="/"
                            className="text-[16px]/[16px] capitalize text-(--sud-black) hover:text-(--sud-red) font-medium transition-colors ease-in-out duration-300 font-archivo"
                        >
                            Food
                        </a>

                        <a
                            href="/"
                            className="text-[16px]/[16px] capitalize text-(--sud-black) hover:text-(--sud-red) font-medium transition-colors ease-in-out duration-300 font-archivo"
                        >
                            Thobes
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;