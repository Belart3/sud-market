const AccordionSkeleton = () => {
    return (
        <div className="w-full rounded-[20px] border border-(--sud-gold-amber-border) p-5">
            <div className="flex items-center justify-between gap-5 animate-pulse">
                <div className="h-6 w-3/4 rounded-md bg-gray-200"></div>

                <div className="h-6 w-6 shrink-0 rounded-md bg-gray-200"></div>
            </div>
        </div>
    );
};

const Loading = () => {
    return (
        <div className="py-16 px-5 max-w-4xl mx-auto w-full">
            <div className="flex flex-col gap-3 items-start justify-start animate-pulse">
                <div className="h-[58px] w-40 rounded-lg bg-gray-200"></div>

                <div className="h-6 w-96 max-w-full rounded-md bg-gray-200"></div>
            </div>

            {Array.from({ length: 4 }).map((_, sectionIndex) => (
                <div
                    key={sectionIndex}
                    className="flex flex-col gap-5 items-start mt-8"
                >
                    <div className="h-9 w-64 max-w-full rounded-md bg-gray-200 animate-pulse"></div>

                    <div className="flex flex-col gap-4 w-full">
                        {Array.from({
                            length: sectionIndex === 0 ? 4 : 3,
                        }).map((_, itemIndex) => (
                            <AccordionSkeleton key={itemIndex} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Loading;