import React from 'react'


const page = () => {
    return (
        <div className='py-16 px-5 max-w-4xl mx-auto w-full'>
            <div className="flex flex-col gap-3 items-start justify-start">
                <h1 className="font-archivo font-bold text-[48px]/[57.6px] capitalize text-(--sud-black)">
                    We’re Here to Help
                </h1>
                <p className="text-(--sud-black) text-[16px]/[24px] font-normal">
                    Have a question about an order, a product, or becoming a vendor? Our team — Sudanese, just like you — is ready to help. We respond within 24 hours.
                </p>
            </div>
            <div className="bg-white rounded-[20px] p-5 w-full">
                <form action="" className='flex flex-col gap-4 w-full'>
                    <input type="text" className='p-4 rounded-[12px] bg-(--background-dark)' />
                </form>
            </div>
        </div>
    )
}

export default page