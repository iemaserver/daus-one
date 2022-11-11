import React from 'react';
import { Box, Card, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import {KeyboardArrowDown} from '@mui/icons-material'

function listItem(props) {
    return (
                <Card elevation={3}>
                    <Box
                        sx={{
                            bgcolor: "#cfcfcf",
                            color: 'black',
                            pb: props.open ? 2 : 0,
                        }}
                    >
                        <ListItemButton
                            alignItems="flex-start"
                            onClick={() => props.setOpen(!props.open)}
                            sx={{
                                px: 3,
                                pt: 2.5,
                                pb: props.open ? 0 : 2.5,
                                '& svg': { opacity: 1 },
                            }}
                        >
                            <ListItemText
                                primary="Build"
                                primaryTypographyProps={{
                                    fontSize: 15,
                                    fontWeight: 'medium',
                                    lineHeight: '20px',
                                    mb: '2px',
                                }}
                                secondary="Authentication, props.database, Storage, Hosting, props.database, Storage, Hosting,props.database, Storage, Hosting"
                                secondaryTypographyProps={{
                                    noWrap: true,
                                    fontSize: 12,
                                    lineHeight: '16px',
                                    color: props.open?"#c7c7c7":"white",
                                }}
                                sx={{ my: 0 }}
                            />
                            <KeyboardArrowDown
                                sx={{
                                    mr: -1,
                                    opacity: 0,
                                    transform: props.open ? 'rotate(-180deg)' : 'rotate(0)',
                                    transition: '0.2s',
                                }}
                            />
                        </ListItemButton>
                        {props.open &&
                            props.data.map((item) => (
                                <ListItemButton
                                    key={item.label}
                                    sx={{ py: 0, minHeight: 32, color: 'white' }}
                                >
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                    />
                                </ListItemButton>
                            ))}
                    </Box>
                </Card>
            
    )
}

export default listItem
