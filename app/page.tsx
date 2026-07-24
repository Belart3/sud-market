import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-(--background) min-h-screen">
      <header className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-0 max-w-(--max-width) mx-auto">
        <div className="flex flex-col gap-6 items-start py-14 px-5 md:px-10 md:w-1/2 lg:p-20">
          <div className="flex items-center justify-start py-2.5 px-6 gap-3 rounded-4xl border border-(--sud-gold-amber-border)">
            <span className="font-archivo text-(--sud-gold-amber) text-[21px]/[25.2px] leading-6 font-bold tracking-[-0.84px]">
              ✦
            </span>
            <span className="font-opensans uppercase text-start text-(--sud-gold-amber) text-[12px]/[18px] leading-6 font-bold tracking-[1.44px]">
              Sudanese-owned · Vetted for authenticity
            </span>
          </div>
          <h1 className="font-archivo text-(--sud-black) text-[64px]/[76.8px] font-bold">
            The Sudan you<br /> grew up with, <br />
            <span className="text-(--sud-red)">
              delivered to<br /> your door.
            </span>
          </h1>
          <p className="font-opensans text-(--sud-black) text-[16px]/[24px] font-normal">
            Jewelry, perfumes, food, clothes and home — all from Sudanese-owned brands we vet by hand, shipped fast from our U.S. warehouse.
          </p>
          <div className="flex gap-4">
            <button className="bg-(--sud-red) text-white cursor-pointer font-opensans text-[16px]/[24px] capitalize font-bold py-3 px-6 rounded-4xl">
              Shop Now
            </button>
            <button className="border border-(--sud-navy-blue) text-(--sud-navy-blue) cursor-pointer font-opensans text-[16px]/[24px] capitalize font-bold py-3 px-6 rounded-4xl hover:bg-(--sud-navy-blue) hover:text-white ease-in-out duration-300">
              become a vendor
            </button>
          </div>
        </div>
        <div className="relative w-full h-100 md:h-auto md:w-1/2">
          <Image
            src="/hero.webp"
            alt="Hero Image"
            fill
            className="object-cover"
          />
        </div>
      </header>

      <section className="flex flex-col items-start md:flex-row md:items-center justify-center pt-20 px-5 md:px-10 lg:px-20 lg:pt-24 gap-6 max-w-(--max-width) mx-auto">
        <div className="bg-cover bg-center bg-no-repeat h-75 w-full md:h-150 md:w-1/2 shrink-0 rounded-[20px]" style={{ backgroundImage: "url('/in-line-houses.webp')" }}></div>
        <div className="flex flex-col gap-6">
          <span className="font-archivo text-(--sud-red) text-[14px]/[21px] tracking-[1.68px] uppercase font-bold text-start">
            in-house line
          </span>
          <h2 className="font-archivo text-(--sud-black) text-[48px]/[57.6px] font-bold text-start">
            More than a marketplace. <br /> It's our legacy.
          </h2>
          <p className="font-opensans text-(--sud-black) text-[16px]/[24px] font-normal text-start">
            We didn't just want a place to shop — we wanted a place that feels like home. Where the smell of bakhoor, the taste of binzaniyo, and the feel of real Sudanese kakaka is never out of reach. <br /> <br />
            When you shop here, you're not just buying a product — you're backing a Sudanese entrepreneur, supporting a small business, and keeping our culture alive.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-start md:items-start justify-start pt-16 px-5 md:px-10 lg:px-20 gap-8 lg:gap-10 max-w-(--max-width) mx-auto">
        <h2 className="font-archivo text-[48px]/[57.6px] font-bold text-(--sud-black) text-start">
          How it works
        </h2>
        <div className="flex flex-col md:flex-row items-start lg:items-stretch justify-start gap-4 lg:gap-6 w-full">
          <div className="flex flex-col items-start justify-start gap-6 p-5 md:p-10 rounded-[20px] border border-(--sud-gold-amber-border) bg-white w-full lg:w-1/3 lg:flex-1">
            <span className="font-archivo text-[48px]/[57.6px] font-bold text-(--sud-gold-amber)">
              01
            </span>
            <h3 className="font-archivo text-(--sud-black) text-[30px]/[36px] font-bold tracking-[-1.2px]">
              Shop your favorite Sudanese brands
            </h3>
            <p className="font-opensans text-(--sud-black) text-[16px]/[24px] font-normal">
              Jewelry, perfumes, food, thobes, home goods and more — all vetted, all in one place.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-6 p-5 md:p-10 rounded-[20px] border border-(--sud-gold-amber-border) bg-white w-full lg:w-1/3 lg:flex-1">
            <span className="font-archivo text-[48px]/[57.6px] font-bold text-(--sud-gold-amber)">
              02
            </span>
            <h3 className="font-archivo text-(--sud-black) text-[30px]/[36px] font-bold tracking-[-1.2px]">
              Place your order
            </h3>
            <p className="font-opensans text-(--sud-black) text-[16px]/[24px] font-normal">
              Add to cart and check out in minutes. No overseas fees. No hassle.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-6 p-5 md:p-10 rounded-[20px] border border-(--sud-gold-amber-border) bg-white w-full lg:w-1/3 lg:flex-1">
            <span className="font-archivo text-[48px]/[57.6px] font-bold text-(--sud-gold-amber)">
              03
            </span>
            <h3 className="font-archivo text-(--sud-black) text-[30px]/[36px] font-bold tracking-[-1.2px]">
              We ship directly to your door
            </h3>
            <p className="font-opensans text-(--sud-black) text-[16px]/[24px] font-normal">
              Stored in our U.S. warehouse — fast, secure shipping with no customs delays.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-start md:items-start justify-start py-16 mt-16 px-5 md:px-10 lg:px-20 gap-8 lg:gap-10 max-w-(--max-width) mx-auto bg-(linear-gradient(to bottom, var(--sud-navy-blue) 0%, var(--su-navy-blue-dark) 100%))">
        
      </section>
    </div>
  );
}
