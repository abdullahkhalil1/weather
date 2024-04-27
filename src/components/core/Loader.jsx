import { Spinner } from "./Spinner";

export const Loader = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col gap-2 items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <Spinner />
            <span className="text-white">Loading...</span>
        </div>
    );
};
