import React from 'react';
import { Box, Typography, Button, SxProps, Theme, Container } from '@mui/material';

interface CustomHeaderProps {
    title: string;
    subTitle?: string;
    bgColor?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | string;
    height?: number | string;
    colorTitle?: string;
    colorSubTitle?: string;
    buttonText?: string;
    onButtonClick?: () => void;
    showButton?: boolean;
    sx?: SxProps<Theme>;
}

export const HeaderComponent: React.FC<CustomHeaderProps> = ({
    title,
    subTitle,
    colorSubTitle,
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
                justifyContent: 'center',
                flexDirection: 'column',
                px: 4,
                ...sx
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    position: 'relative'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: 1,
                        flexGrow: 1,
                        maxWidth: 'calc(100% - 120px)'
                    }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            color: colorTitle,
                            textAlign: 'left',
                            width: '100%'
                        }}
                    >
                        {title}
                    </Typography>

                    {subTitle && (
                        <Typography
                            component="span"
                            variant="body1"
                            sx={{
                                color: colorSubTitle,
                                fontSize: '1rem',
                                textAlign: 'left',
                                marginTop: 1,
                                width: '100%',
                                display: 'inline-block'
                            }}
                        >
                            {subTitle}
                        </Typography>
                    )}
                </Box>

                {showButton && (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onButtonClick}
                        sx={{
                            height: 'fit-content',
                            py: 1.5,
                            px: 3,
                            position: 'absolute',
                            right: 0
                        }}
                    >
                        {buttonText}
                    </Button>
                )}
            </Container>
        </Box>
    );
};