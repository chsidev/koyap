import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogActions,
    Button,
} from '@mui/material';

function WaitPopUp({ show, onClose }) {
    const emitClose = () => {
        onClose();
    };
    return (
        <Dialog open={show} onClose={emitClose}>
            <DialogTitle>We'll contact you as soon as possible</DialogTitle>
            <DialogActions>
                <Button color="error" onClick={emitClose}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default WaitPopUp;
