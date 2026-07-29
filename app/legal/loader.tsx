const LegalAccordionSkeleton = ({
    expanded = false,
}: {
    expanded?: boolean;
}) => {
    return (
        <div className="rounded-[20px] border border-(--sud-gold-amber-border) w-full bg-(--white) overflow-hidden animate-pulse">
            <div className="flex items-center justify-between gap-5 p-5">
                <div className="h-6 w-48 max-w-[75%] rounded-md bg-gray-200"></div>

                <div className="h-5 w-5 shrink-0 rounded-md bg-gray-200"></div>
            </div>

            {expanded && (
                <div className="flex flex-col gap-4 p-5 pt-0">
                    <div className="flex flex-col gap-2">
                        <div className="h-4 w-full rounded bg-gray-200"></div>
                        <div className="h-4 w-11/12 rounded bg-gray-200"></div>
                        <div className="h-4 w-3/4 rounded bg-gray-200"></div>
                    </div>

                    <div className="flex flex-col gap-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2"
                            >
                                <div className="size-1.5 shrink-0 rounded-full bg-gray-200"></div>

                                <div
                                    className={`h-4 rounded bg-gray-200 ${
                                        index % 2 === 0
                                            ? 'w-10/12'
                                            : 'w-8/12'
                                    }`}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const Loading = () => {
    return (
        <div className="py-16 px-5 w-full">
            <div className="flex flex-col gap-3 items-start justify-start animate-pulse">
                <div className="h-[58px] w-72 max-w-full rounded-lg bg-gray-200"></div>

                <div className="h-6 w-96 max-w-full rounded-md bg-gray-200"></div>
            </div>

            <div className="flex flex-col gap-4 mt-8 w-full">
                {Array.from({ length: 5 }).map((_, index) => (
                    <LegalAccordionSkeleton
                        key={index}
                        expanded={index === 0}
                    />
                ))}
            </div>
        </div>
    );
};

export default Loading;