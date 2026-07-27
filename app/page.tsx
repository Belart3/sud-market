import Image from "next/image";
import { title } from "process";

export default function Home() {
  const categories = [
    {
      name: "Home & Decor",
      image: "/home-and-decor.jpg",
      items: 3,
    },
    {
      name: "Food",
      image: "/food-category.jpg",
      items: 3,
    },
    {
      name: "Clothes", 
      image: "/clothes-category.jpg",  
      items: 5,
    },
    {
      name: "Jewelry",
      image: "/jewelry-category.jpg",
      items: 4,
    },
    {
      name: "Perfumes",
      image: "/perfumes-category.jpg",
      items: 2,
    },
  ];

  const popularProducts = [
    {
      name: "Gold-Plated Kholkhal Anklet",
      vendor: "Nubia Gold",
      image: "/home-and-decor.jpg",
      price: "75.00",
    },
    {
      name: "Filigree Hoop Earrings",
      vendor: "Nubia Gold",
      image: "/home-and-decor.jpg",
      price: "48.00",
    },
    {
      name: "Oud Muattar Perfume Oil — 12ml",
      vendor: "Nubia Gold",
      image: "/home-and-decor.jpg",
      price: "64.00",
    },
  ];  

  const privateLabel = [
    {
      name: "Sud Market Gold Bangle Set — 6 pc",
      image: "/gold-bangle-set.png",
      price: "42.00",
    },
    {
      name: "Sud Market Signature Dukhan Blend",
      image: "/home-and-decor.jpg",
      price: "34.00",
    },
    {
      name: "Sud Market Shai Sudani — Loose Black Tea",
      image: "/loose-black-tea.png",
      price: "8.50",
    },
    {
      name: "Sud Market Jebena Coffee — Ground with Ginger",
      image: "/ground-coffee-with-ginger.png",
      price: "11.00",
    },
  ]

  const features = [
    {
      title: "Authentic brands only",
      info: "Every vendor is Sudanese-owned and vetted"
    },
    {
      title: "Fast U.S. shipping",
      info: "From our warehouse — 3–5 days"
    },
    {
      title: "Support entrepreneurs",
      info: "Every purchase backs a small business"
    },
    {
      title: "Everything in one place",
      info: "No searching ten different stores"
    },

  ]
  
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

      <section className="bg-linear-to-b from-(--sud-navy-blue) to-(--sud-navy-blue-dark)">
        <div className="flex flex-col items-start md:items-start justify-start py-16 mt-16 px-5 md:px-10 lg:px-20 gap-8 lg:gap-10 max-w-(--max-width) mx-auto">
          <div className="flex flex-col gap-8 items-center justify-center w-full lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col items-center justify-center gap-3 lg:items-start lg:justify-start">
              <span className="font-opensans text-[14px]/[21px] font-bold tracking-[1.68px] uppercase text-center text-(--sud-gold-amber) lg:text-start">
                REAL SUDANESE ENTREPRENEURS
              </span>
              <h2 className="font-archivo text-[48px]/[57.6px] font-bold text-center text-white lg:text-start">
                Meet our vendors
              </h2>
            </div>
            <a href="/vendors" className="font-opensans text-[16px]/[24px] font-bold text-(--sud-gold-amber) capitalize transition-colors duration-300 ease-in-out">
              become a vendor
              <Image src="/arrow-right-gold.png" alt="Arrow Right" width={24} height={24} className="inline-block ml-3" />
            </a>
          </div>
          <div className="flex flex-col gap-4 w-full lg:flex-row lg:gap-6 items-center justify-center lg:items-stretch lg:justify-center">
            <div className="rounded-4xl border border-(--sud-gold-amber-border) bg-[#FFFFFF0D] flex flex-col gap-3 items-center justify-center p-5 lg:flex-1 w-full">
              <Image src="/nubia-gold.png" alt="Nubia Gold" width={120} height={120} className="rounded-4xl object-cover" />
              <div className="flex flex-col items-center justify-center gap-3 p-2.5">
                <h3 className="font-archivo text-[21px]/[25.2px] font-bold text-center text-white tracking-[-0.84px]">
                  Nubia Gold
                </h3>
                <p className="font-opensans text-[16px]/[24px] font-normal text-center text-white">
                  Khartoum → New York · Jewelry
                </p>
              </div>
            </div>
            <div className="rounded-4xl border border-(--sud-gold-amber-border) bg-[#FFFFFF0D] flex flex-col gap-3 items-center justify-center p-5 lg:flex-1 w-full">
              <Image src="/bakhoor-al-nile.png" alt="Bakhoor Al-Nile" width={120} height={120} className="rounded-4xl object-cover" />
              <div className="flex flex-col items-center justify-center gap-3 p-2.5">
                <h3 className="font-archivo text-[21px]/[25.2px] font-bold text-center text-white tracking-[-0.84px]">
                  Bakhoor Al-Nile
                </h3>
                <p className="font-opensans text-[16px]/[24px] font-normal text-center text-white">
                  Omdurman → Cairo · Perfumes & oud
                </p>
              </div>
            </div>
            <div className="rounded-4xl border border-(--sud-gold-amber-border) bg-[#FFFFFF0D] flex flex-col gap-3 items-center justify-center p-5 lg:flex-1 w-full">
              <Image src="/sitt-al-shai.png" alt="Sitt Al-Shai" width={120} height={120} className="rounded-4xl object-cover" />
              <div className="flex flex-col items-center justify-center gap-3 p-2.5">
                <h3 className="font-archivo text-[21px]/[25.2px] font-bold text-center text-white tracking-[-0.84px]">
                  Sitt Al-Shai
                </h3>
                <p className="font-opensans text-[16px]/[24px] font-normal text-center text-white">
                  Port Sudan → Virginia · Tea & food
                </p>
              </div>
            </div>
            <div className="rounded-4xl border border-(--sud-gold-amber-border) bg-[#FFFFFF0D] flex flex-col gap-3 items-center justify-center p-5 lg:flex-1 w-full">
              <Image src="/beit-al-dar.png" alt="Beit Al-Dar" width={120} height={120} className="rounded-4xl object-cover" />
              <div className="flex flex-col items-center justify-center gap-3 p-2.5">
                <h3 className="font-archivo text-[21px]/[25.2px] font-bold text-center text-white tracking-[-0.84px]">
                  Beit Al-Dar
                </h3>
                <p className="font-opensans text-[16px]/[24px] font-normal text-center text-white">
                  Khartoum → Texas · Home & decor
                </p>
              </div>
            </div>
            <div className="rounded-4xl border border-(--sud-gold-amber-border) bg-[#FFFFFF0D] flex flex-col gap-3 items-center justify-center p-5 lg:flex-1 w-full">
              <Image src="/toub-and-thread.png" alt="Toub & Thread" width={120} height={120} className="rounded-4xl object-cover" />
              <div className="flex flex-col items-center justify-center gap-3 p-2.5">
                <h3 className="font-archivo text-[21px]/[25.2px] font-bold text-center text-white tracking-[-0.84px]">
                  Toub & Thread
                </h3>
                <p className="font-opensans text-[16px]/[24px] font-normal text-center text-white">
                  Dubai · Thobes & fabrics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-start md:items-start justify-start pt-16 mt-16 px-5 md:px-10 lg:px-20 gap-10 lg:gap-10 max-w-(--max-width) mx-auto">
        <div className="flex flex-col gap-3 items-start justify-start">
          <span className="font-opensans text-[14px]/[21px] font-bold tracking-[1.68px] uppercase text-start text-(--sud-gold-amber)">
            Browse the market
          </span>
          <h2 className="font-archivo text-[48px]/[57.6px] font-bold text-start text-(--sud-black)">
            Shop by category
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full justify-stretch">
          {
            categories.map((category, index) => (
              <div className={`flex flex-col justify-end items-start p-6 rounded-[20px] bg-cover bg-center relative min-h-80
              ${index === 0 
                ? 'md:col-span-2 md:row-span-2 md:h-auto'
                : 'md:col-span-1 md:h-80'             
              }`} key={index} style={{ backgroundImage: `linear-gradient(to bottom, #00000000, #000000), url('${category.image}')` }}>
                <h3 className="font-archivo text-[30px]/[36px] font-bold text-start text-white tracking-[-1.2px] capitalize">
                  {category.name}
                </h3>
                <div className="flex items-center justify-between w-full">
                  <p className="font-opensans text-[16px]/[24px] font-normal text-start text-white">
                    {category.items} items
                  </p>
                  <a href="/" className="font-archivo text-[16px]/[24px] capitalize py-3 px-6 rounded-4xl font-medium text-white border border-white hover:text-(--sud-gold-amber) hover:border-(--sud-gold-amber) transition-colors duration-300 ease-in-out">
                    shop
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      <section className="flex flex-col items-start md:items-start justify-start mt-16 lg:mt-24 px-5 md:px-10 lg:px-20 gap-10 lg:gap-10 max-w-(--max-width) mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 w-full md:flex-row md:items-center md:justify-between">
          <h2 className="font-archivo text-[48px]/[57.6px] font-bold text-center text-(--sud-black) oldstyle-nums">
            Popular right now
          </h2>
          <a href="" className="font-opensans text-[16px]/[24px] font-bold text-(--sud-red) capitalize transition-colors duration-300 ease-in-out">
            view all
            <Image src="/arrow-right-red.png" alt="Arrow Right" width={24} height={24} className="inline-block ml-3" />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-3 lg:gap-6 items-stretch justify-stretch">
          {
            popularProducts.map((product, index) => (
              <div key={index} className="flex flex-col gap-3 items-start justify-start p-2.5 rounded-4xl border border-(--sud-gold-amber-border) bg-white w-full">
                <div className="bg-cover bg-no-repeat bg-center p-3 rounded-3xl flex items-start justify-start h-75 w-full" style={{ backgroundImage: `url(${product.image})` }}></div>
                <div className="flex flex-col gap-6 py-5 px-2.5 justify-start w-full">
                  <div className="flex flex-col gap-3 justify-start">
                    <span className="font-opensans uppercase text-[14px]/[21px] font-bold text-start text-(--sud-gold-amber) tracking-[1.68px]">
                      {product.vendor}
                    </span>
                    <p className="font-opensans text-[16px]/[24px] font-normal text-start text-(--sud-black)">
                      {product.name}
                    </p>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="font-archivo text-[30px]/[36px] font-bold text-start tracking-[-1.2px] text-(--sud-black) proportional-nums">
                      ${product.price}
                    </p>
                    <a href="/" className="font-archivo text-[16px]/[16px] capitalize py-3 px-6 rounded-4xl font-medium text-white bg-(--sud-red) transition-colors duration-300 ease-in-out">
                      add to cart
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      <section className="bg-linear-to-b from-(--sud-navy-blue) to-(--sud-navy-blue-dark) mt-16">
        <div className="flex flex-col items-start md:items-start justify-start py-16 mt-16 px-5 md:px-10 lg:px-20 gap-10 lg:gap-10 max-w-(--max-width) mx-auto">
          <div className="flex flex-col gap-8 items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center gap-3 lg:max-w-150 lg:gap-6">
              <div className="flex flex-col items-center justify-center gap-3">
                <span className="font-opensans text-[14px]/[21px] font-bold tracking-[1.68px] uppercase text-center text-(--sud-gold-amber) lg:text-center">
                  IN-HOUSE LINE
                </span>
                <h2 className="font-archivo text-[48px]/[57.6px] font-bold text-center text-white">
                  Introducing Sud Market — our private label
                </h2>
              </div>
              <p className="text-[16px]/[24px] text-white text-center font-opensans font-normal">
                Our own line of everyday Sudanese staples — like the trusted store brand you already know, made to our standard and priced honestly. It’s the one line with real product photography ready today.
              </p>
            </div>
            <a href="/vendors">
              <button className="bg-(--sud-gold-amber) text-white cursor-pointer font-opensans text-[16px]/[16px] font-medium capitalize py-3 px-6 rounded-4xl transition-colors duration-300 ease-in-out">
                shop the sud market line
              </button>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-4 lg:gap-6 items-stretch justify-stretch">
            {
              privateLabel.map((product, index) => (
                <div key={index} className="flex flex-col items-start justify-start p-2.5 rounded-4xl border border-(--sud-gold-amber-border) bg-[#FFFFFF0D] w-full">
                  <div className="bg-cover bg-no-repeat bg-center p-3 rounded-3xl flex items-start justify-start h-54 w-full" style={{ backgroundImage: `url(${product.image})` }}></div>     
                  <div className="flex flex-col gap-3 p-2.5 justify-start w-full">
                    <p className="font-opensans text-[16px]/[24px] font-normal text-center text-white">
                      ${product.name}
                    </p>
                    <p className="font-archivo tracking-[-1.2px] text-[30px]/[36px] font-bold text-center text-(--sud-gold-amber)">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-16 py-16 px-5 md:px-10 lg:px-20 max-w-(--max-width) mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {
            features.map((feature, index) => (
              <div className="flex flex-col gap-3 p-5 bg-[#B8860B1A] border border-[#B8860B33] rounded-xl" key={index}>
                <h3 className="font-archivo text-[14px]/[21px] lg:text-[21px]/[25.2px] font-bold tracking-[-0.84px] text-(--sud-black) text-start">
                  {feature.title}
                </h3>
                <p className="font-opensans text-[14px]/[21px] font-normal text-(--sud-black) text-start">
                {feature.info}
                </p>
              </div>
            ))
          }
        </div>
        <div className="flex flex-col gap-6 rounded-[20px] py-16 px-5 bg-linear-to-b from-(--sud-green) to-(--sud-green-dark) border border-(--sud-gold-amber-border) w-full">
          <h2 className="text-center text-[48px]/[57.6px] lg:text-[73px]/[73px] font-bold font-archivo text-white">
            Ready to shop Sudanese?
          </h2>
          <p className="text-center text-[16px][24px] font-normal font-opensans text-white sm:max-w-150 sm:mx-auto">
            Bring the products you love — and the culture you miss — straight to your door.
          </p>
          <div className="flex flex-col gap-4 w-full sm:w-full sm:flex-row sm:items-center sm:justify-center">
            <a href="/">
              <button className="py-3 px-6 rounded-4xl bg-(--sud-red) flex items-center justify-center w-full text-[16px]/[16px] capitalize text-white font-medium cursor-pointer">
                shop now
              </button>
            </a>
            <a href="/">
              <button className="py-3 px-6 rounded-4xl bg-transparent border border-white flex items-center justify-center w-full text-[16px]/[16px] capitalize text-white font-medium cursor-pointer">
                become a vendor
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
