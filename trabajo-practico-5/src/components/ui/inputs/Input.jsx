
import { TextField } from '@mui/material';

export const Input = ({
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
    fullWidth = true,
    ...props
}) => {
    return (
        <TextField
            label={label}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            fullWidth={fullWidth}
            {...props}
        />
    );
};


