const ProductCardSkeleton = () => {
    return (
        <div className="flex flex-col gap-3 items-start justify-start p-2.5 rounded-4xl border border-(--sud-gold-amber-border) bg-white w-full animate-pulse">
            <div className="h-75 w-full rounded-3xl bg-gray-200"></div>

            <div className="flex flex-col gap-6 py-5 px-2.5 justify-start w-full">
                <div className="flex flex-col gap-3 justify-start">
                    <div className="h-[21px] w-28 rounded-md bg-gray-200"></div>

                    <div className="h-[24px] w-3/4 rounded-md bg-gray-200"></div>
                </div>

                <div className="flex items-center justify-between gap-4 w-full">
                    <div className="h-[36px] w-24 rounded-md bg-gray-200"></div>

                    <div className="h-10 w-30 rounded-4xl bg-gray-200"></div>
                </div>
            </div>
        </div>
    );
};

const Loading = () => {
    return (
        <div className="px-5 py-16 lg:p-20 w-full max-w-(--max-width) mx-auto">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 animate-pulse">
                    <div className="h-14 w-64 max-w-full rounded-lg bg-gray-200"></div>

                    <div className="h-6 w-96 max-w-full rounded-md bg-gray-200"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Loading;