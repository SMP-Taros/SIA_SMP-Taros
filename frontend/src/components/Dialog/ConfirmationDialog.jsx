import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useState} from "react";

export default function ConfirmationDialog({    isOpen = false,
                                               title = "Apakah anda yakin?",
                                           content = "Perubahan ini tidak bisa di Undo",
                                               onAgree = () => {isOpen = false},
                                               onClose = () => {isOpen = false}
}) {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Batalkan</Button>
                <Button onClick={onAgree} autoFocus>
                    Ya
                </Button>
            </DialogActions>
        </Dialog>
    )
}