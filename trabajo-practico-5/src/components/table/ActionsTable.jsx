import PropTypes from 'prop-types';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { IconButton, Tooltip } from '@mui/material';

export const ActionsTable = ({ onDelete, onEdit, onView }) => {
    return (
        <div className='flex justify-end gap-0 items-center'>
            <Tooltip title="Eliminar estudiante">
                <IconButton onClick={onDelete}>
                    <DeleteOutlineIcon className='cursor-pointer' color='error' fontSize='medium' />
                </IconButton>
            </Tooltip>
            <Tooltip title="Editar estudiante">
                <IconButton onClick={onEdit}>
                    <EditOutlinedIcon className='cursor-pointer' color='primary' fontSize='medium' />
                </IconButton>
            </Tooltip>
            <Tooltip title="Ver estudiante">
                <IconButton onClick={onView}>
                    <RemoveRedEyeOutlinedIcon className='cursor-pointer' color='secondary' fontSize='medium' />
                </IconButton>
            </Tooltip>
        </div>
    );
};
