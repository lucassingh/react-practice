import React, { useState } from 'react';
import {
    DataGrid,
    GridColDef,
    GridPaginationModel,
    GridRenderCellParams
} from '@mui/x-data-grid';
import { MarsPhoto } from '../data/interfaces/MarsPhoto';
import { Box, Typography, Link, TextField, Button, Avatar, Tooltip } from '@mui/material';
import { useMarsPhotosHandler } from '../data/handlers/useMarsPhotoHandler';

export const MarsPhotosComponent: React.FC = () => {
    const { photos, loading, error, currentParams, updateParams, setSol } = useMarsPhotosHandler();
    const [localSol, setLocalSol] = useState(currentParams.sol.toString());
    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
        page: 0,
        pageSize: 10,
    });

    const handleSolSubmit = () => {
        const solNumber = parseInt(localSol);
        if (!isNaN(solNumber)) {
            setSol(solNumber);
            setPaginationModel(prev => ({ ...prev, page: 0 }));
        }
    };

    const columns: GridColDef<MarsPhoto>[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 80
        },
        {
            field: 'sol',
            headerName: 'Sol',
            width: 100
        },
        {
            field: 'earth_date',
            headerName: 'Earth Date',
            width: 150
        },
        {
            field: 'camera',
            headerName: 'Camera',
            width: 200,
            renderCell: (params: GridRenderCellParams<MarsPhoto>) => (
                <>{params.row.camera.full_name}</>
            )
        },
        {
            field: 'rover',
            headerName: 'Rover Status',
            width: 150,
            renderCell: (params: GridRenderCellParams<MarsPhoto>) => (
                <>{params.row.rover.status}</>
            )
        },
        {
            field: 'image_preview',
            headerName: 'Image Detail',
            width: 150,
            renderCell: (params: GridRenderCellParams<MarsPhoto>) => (
                <Tooltip title="Click to view full image" arrow>
                    <Link href={params.row.img_src} target="_blank" rel="noopener noreferrer">
                        <Avatar
                            variant="square"
                            src={params.row.img_src}
                            sx={{
                                width: 56,
                                height: 56,
                                cursor: 'pointer',
                                '&:hover': {
                                    opacity: 0.8,
                                    transform: 'scale(1.05)',
                                    transition: 'transform 0.3s ease'
                                }
                            }}
                        />
                    </Link>
                </Tooltip>
            ),
            sortable: false,
            filterable: false,
        },
    ];

    if (error) {
        return (
            <Box sx={{ p: 3, color: 'error.main' }}>
                <Typography variant="h6">Error loading Mars photos</Typography>
                <Typography>{error}</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ height: 600, width: '100%', p: 2 }}>

            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                <TextField
                    label="Sol (Martian Day)"
                    type="number"
                    value={localSol}
                    onChange={(e) => setLocalSol(e.target.value)}
                    size="small"
                    sx={{ width: 150 }}
                />
                <Button
                    variant="contained"
                    onClick={handleSolSubmit}
                    disabled={loading}
                >
                    Load Photos
                </Button>
                <Typography variant="body1">
                    Current Sol: {currentParams.sol}
                </Typography>
            </Box>

            <DataGrid
                rows={photos}
                columns={columns}
                loading={loading}
                pageSizeOptions={[10, 25, 50]}
                paginationModel={paginationModel}
                onPaginationModelChange={(newModel) => {
                    setPaginationModel(newModel);
                    updateParams({ page: newModel.page + 1 });
                }}
                paginationMode="server"
                rowCount={200}
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                initialState={{
                    sorting: {
                        sortModel: [{ field: 'id', sort: 'desc' }],
                    },
                }}
                sx={{
                    '& .MuiDataGrid-cell': {
                        py: 1,
                    },
                }}
            />
        </Box>
    );
};