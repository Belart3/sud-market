const ShippingCardSkeleton = ({
    lines = 3,
}: {
    lines?: number;
}) => {
    return (
        <div className="w-full rounded-[20px] bg-(--white) p-5 animate-pulse">
            <div className="h-7 w-56 max-w-[70%] rounded-md bg-gray-200"></div>

            <div className="flex flex-col gap-3 mt-6">
                {Array.from({ length: lines }).map((_, index) => (
                    <div
                        key={index}
                        className={`h-4 rounded bg-gray-200 ${
                            index === lines - 1
                                ? 'w-3/4'
                                : 'w-full'
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

const Loading = () => {
    return (
        <div className="py-16 px-5 w-full">
            <div className="flex flex-col gap-3 items-start justify-start animate-pulse">
                <div className="h-[58px] w-80 max-w-full rounded-lg bg-gray-200"></div>

                <div className="h-6 w-96 max-w-full rounded-md bg-gray-200"></div>
            </div>

            <div className="flex flex-col gap-4 mt-8 w-full">
                <ShippingCardSkeleton lines={5} />
                <ShippingCardSkeleton lines={2} />
                <ShippingCardSkeleton lines={2} />
                <ShippingCardSkeleton lines={2} />
                <ShippingCardSkeleton lines={4} />
                <ShippingCardSkeleton lines={3} />
            </div>
        </div>
    );
};

export default Loading;
