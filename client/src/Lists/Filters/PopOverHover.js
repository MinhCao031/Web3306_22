import React from 'react';
import PopOver from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function PopOverHover( {tag} ) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const setLabelName = (value) => {
        if (value === 'good') {
            return 'Khen thưởng học tập';
        } else if (value === 'bad') {
            return 'Nhắc nhở học tập';
        } else if (value === 'expelled') {
            return 'Nguy cơ nghỉ học';
        } else {
            return 'Not found';
        }
    };

    const setPopoverLabel = (value) => {
        if (value === 'good') {
            return 'GPA từ 3.2 và ĐRL từ 80';
        } else if (value === 'bad') {
            return 'GPA dưới 2.0 hoặc ĐRL dưới 60';
        } else if (value === 'expelled') {
            return 'Nhắc nhở học tập + Thiếu tín chỉ  + Thiếu học phí'; 
        } else {
            return 'Not found';
        }
    }
    
    return (
        <div>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                {setLabelName(tag)}
            </Typography>

            <PopOver
                id="mouse-over-popover"
                sx={{ pointerEvents: 'none' }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}> {setPopoverLabel(tag)} </Typography>
            </PopOver>
        </div>
    )
}

