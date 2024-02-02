import { Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

export function InformationDialog({isOpen, title = "", content, onClose}) {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            {title &&
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
            }
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {content}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}