import * as React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';

const Fade = React.forwardRef(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true);
            }
        },
    });

    return (
        // @ts-expect-error https://github.com/pmndrs/react-spring/issues/2341
        <animated.div ref={ref} style={style} {...other}>
            {React.cloneElement(children, { onClick })}
        </animated.div>
    );
});



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: "none",
    boxShadow: 10,
    p: 2,
    borderRadius: 2,
};

export const CustomModal = ({ button = false, open, setOpen, title, description, variantButton, textButton, colorButton, onClickButon }) => {


    const handleClose = () => setOpen(false);

    return (
        <div>

            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        TransitionComponent: Fade,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="spring-modal-title" variant="h6" component="h2">
                            {title}
                        </Typography>
                        <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                            {description}
                        </Typography>
                        {button && (
                            <Button onClick={onClickButon} sx={{ mt: 2 }} color={colorButton} variant={variantButton}>{textButton}</Button>
                        )}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
