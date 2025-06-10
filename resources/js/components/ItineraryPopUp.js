import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    IconButton,
    Alert,
    Snackbar
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

function ItineraryPopUp({ show, onClose, defaultContent, nextAction }) {
    const [openNotify, setOpenNotify] = React.useState(false);
    const handleNotifyClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenNotify(false);
    };
    const emitClose = () => {
        onClose();
    };
    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleNotifyClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    const nAction = () => {
        if(defaultContent!="") {
            emitClose();
            nextAction();
        } else {
            setOpenNotify(true);
        }
    }
    return (
        <Dialog open={show} onClose={emitClose}>
            <DialogTitle>Your itinerary information</DialogTitle>
            <Formik
                initialValues={{
                    content: ''
                }}
            >
                <Form>
                    <DialogContent>
                        <Snackbar
                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                            open={openNotify}
                            autoHideDuration={5000}
                            onClose={handleNotifyClose}
                            action={action}
                        >
                            <Alert
                                onClose={handleNotifyClose}
                                severity="error"
                                sx={{ width: '100%' }}
                            >
                                {'Please select itinerary!'}
                            </Alert>
                        </Snackbar>
                        <Field
                            component={TextField}
                            type="text"
                            label="Content"
                            name="content"
                            margin="dense"
                            multiline
                            rows={4}
                            fullWidth
                            value={defaultContent}
                            variant="outlined"
                            sx={{marginTop: 3}}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button color="error" onClick={emitClose}>
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            onClick={nAction}
                        >
                            Next
                        </Button>
                    </DialogActions>
                </Form>
            </Formik>
        </Dialog>
    );
}

// MailPopUp.propTypes = {
//     defaultContent: PropTypes.string,
//     show: PropTypes.bool,
//     onClose: PropTypes.func,
//     onSubmit: PropTypes.func
// };

// // Specifies the default values for props:
// MailPopUp.defaultProps = {
//     defaultContent: '',
//     show: false,
//     onClose: () => {},
//     onSubmit: () => {}
// };

export default ItineraryPopUp;
