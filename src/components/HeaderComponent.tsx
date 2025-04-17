import React from 'react';
import { Box, Typography, Button, SxProps, Theme, Container } from '@mui/material';

interface CustomHeaderProps {
    title: string;
    bgColor?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | string;
    height?: number | string;
    colorTitle?: string
    buttonText?: string;
    onButtonClick?: () => void;
    showButton?: boolean;
    sx?: SxProps<Theme>;
}

export const HeaderComponent: React.FC<CustomHeaderProps> = ({
    title,
    bgColor = 'secondary',
    height = 200,
    colorTitle = '#ffff',
    buttonText = 'Click me',
    onButtonClick,
    showButton = true,
    sx = {}
}) => {
    return (

        <Box
            sx={{
                backgroundColor: bgColor,
                height: typeof height === 'number' ? `${height}px` : height,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 4,
                ...sx
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                        alignSelf: 'center',
                        color: { colorTitle },
                    }}
                >
                    {title}
                </Typography>

                {showButton && (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onButtonClick}
                        sx={{
                            alignSelf: 'center',
                            height: 'fit-content',
                            py: 1.5,
                            px: 3
                        }}
                    >
                        {buttonText}
                    </Button>
                )}
            </Container>
        </Box>
    );
};