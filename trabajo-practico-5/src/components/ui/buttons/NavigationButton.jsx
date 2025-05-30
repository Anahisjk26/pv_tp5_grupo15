import { Button } from "@mui/material";

export const NavigationButton = ({
    onBack = () => { },

    backLabel = 'Volver',

}) => {
    return (
        <div className="flex cursor-pointer justify-between gap-2">
            <Button size="small" onClick={onBack} variant="outlined"  color="primary" className="flex items-center">
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
                <span className="ml-1 font-semibold text-sm">{backLabel}</span>
           </Button>


        </div>
    );
};
