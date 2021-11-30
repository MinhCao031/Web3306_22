import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import './Modal.css'

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 600,
    bgcolor: '#F4F5FA',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function postBtn({btnName, handleClickOpen}) {
    return (
        <Button 
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
        >
            {btnName}
        </Button>
    )
}

function editBtn({handleClickOpen}) {
    return (
        <IconButton
            color="default" 
            aria-label="edit" 
            onClick={handleClickOpen}
        >
            <EditIcon />
        </IconButton>
    )
}


function ModalBtn({ 
    btnName,
    title,
    submitBtn,
    headingText='',
    contentText='',
    edit=false, 
}) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {edit ? editBtn({handleClickOpen: handleClickOpen}) : postBtn({btnName: btnName, handleClickOpen})}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={boxStyle}>
                    {/* Move typography to center of Box */}
                    <Typography variant="h4" id="modal-modal-title" align="center" sx={{mb : 2.5}}>
                        {title}
                    </Typography>

                    <TextField 
                        id='filled-basic' 
                        label='Tiêu đề' 
                        variant='filled' 
                        defaultValue={headingText} 
                        fullWidth 
                        sx={{mb: 2.5}} 
                    />

                    <TextField 
                        id='filled-basic' 
                        label='Nội dung' 
                        variant='filled' 
                        defaultValue={contentText} 
                        rows={12}
                        fullWidth 
                        multiline 
                    />
                    <div className='btn-forum'>
                        <Button 
                            variant="contained" 
                            color="error" 
                            onClick={handleClose}
                        > 
                            Hủy 
                        </Button>

                        <Button 
                            variant="contained"
                            color="primary"
                            sx={{ ml: 4 }}
                        > 
                            {submitBtn} 
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalBtn
