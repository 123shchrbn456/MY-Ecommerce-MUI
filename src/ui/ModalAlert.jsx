import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const ModalAlert = ({ openAlertModal, handleCloseAlertModal }) => {
    return (
        <Dialog
            open={openAlertModal}
            onClose={handleCloseAlertModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"This Feature will be implemented soon."}</DialogTitle>
            <DialogActions>
                <Button onClick={handleCloseAlertModal}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalAlert;
