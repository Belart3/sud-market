const RelatedProductSkeleton = () => {
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
            <div className="flex flex-col gap-8 items-start justify-start">
                <div className="flex items-center gap-3 animate-pulse">
                    <div className="size-6 rounded-full bg-gray-200"></div>

                    <div className="h-4 w-28 rounded-md bg-gray-200"></div>
                </div>

                <div className="flex flex-col gap-8 w-full md:flex-row md:items-stretch 2xl:items-center animate-pulse">
                    <div className="h-78.75 w-full rounded-[20px] bg-gray-200 md:w-1/2 md:h-auto 2xl:min-h-165"></div>

                    <div className="flex flex-col gap-5 items-start justify-start md:w-1/2">
                        <div className="h-[21px] w-32 rounded-md bg-gray-200"></div>

                        <div className="flex flex-col gap-3 w-full">
                            <div className="h-[58px] w-full rounded-lg bg-gray-200"></div>

                            <div className="h-[58px] w-3/4 rounded-lg bg-gray-200"></div>
                        </div>

                        <div className="h-[58px] w-36 rounded-lg bg-gray-200"></div>

                        <div className="h-6 w-28 rounded-md bg-gray-200"></div>

                        <div className="flex flex-col gap-2 w-full">
                            <div className="h-6 w-full rounded-md bg-gray-200"></div>

                            <div className="h-6 w-full rounded-md bg-gray-200"></div>

                            <div className="h-6 w-3/4 rounded-md bg-gray-200"></div>
                        </div>

                        <div className="flex gap-4">
                            <div className="h-12 w-32 rounded-4xl bg-gray-200"></div>

                            <div className="h-12 w-24 rounded-4xl bg-gray-200"></div>
                        </div>

                        <div className="p-5 flex items-center gap-3 justify-start rounded-xl border border-(--sud-gold-amber-border) w-full">
                            <div className="size-6 shrink-0 rounded-md bg-gray-200"></div>

                            <div className="flex flex-col gap-2 w-full">
                                <div className="h-[21px] w-full rounded-md bg-gray-200"></div>

                                <div className="h-[21px] w-3/4 rounded-md bg-gray-200"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-16 gap-8">
                <div className="h-[58px] w-80 max-w-full rounded-lg bg-gray-200 animate-pulse"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <RelatedProductSkeleton key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Loading;