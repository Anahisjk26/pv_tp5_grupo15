
export const NavigationButton = ({
    onBack = () => { },

    backLabel = 'Volver',

}) => {
    return (
        <div className="flex justify-between gap-2">
            <button
                onClick={onBack}
                className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                </svg>
                <span className="ml-1 font-bold text-lg">{backLabel}</span>
            </button>


        </div>
    );
};
