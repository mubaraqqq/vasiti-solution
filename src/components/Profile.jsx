import React from 'react';
import { Avatar, Paper, Typography, Box, Button, Grid } from '@mui/material';

const Profile = ({ src, location, customer, name }) => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={4} xlg={4}>
        <Paper elevation={0}>
            <Avatar src={src} sx={{width: 200, height: 200}}/>
            <Typography sx={{padding: '1em 0 0.5em 0', 
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '24px',
                lineHeight: '29px'
                }}
            >
                {name}
            </Typography>
            <Box>
                {location && (
                    <Typography variant='caption'  sx={{
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '15px',
                        lineHeight: '18px',
                        letterSpacing: '0.05em',
                        color: '#535353',
                        marginRight: '1em',
                    }}>
                        in {location}
                    </Typography>
                )}
                {customer
                    ? <Button sx={{
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '13px',
                        lineHeight: '16px',
                        letterSpacing: '0.02em',
                        color: '#0D019A',
                        background: '#EEF8FF',
                    }}>
                        CUSTOMER
                    </Button>
                    : <Button sx={{
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '13px',
                        lineHeight: '16px',
                        letterSpacing: '0.02em',
                        color: '#049A01',
                        background: '#F0FFEE',
                    }}>
                        VENDOR
                    </Button>
                }
            </Box>
            <Box sx={{width: '300px', height: '264px'}}>
                <Typography variant='body2' sx={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '0.02em',
                    color: '#474747',
                }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis porro vero, 
                    in quia architecto mollitia molestias beatae esse aliquid, deleniti perspiciatis 
                    amet placeat neque cum, nihil nisi fuga pariatur voluptas!
                </Typography>
            </Box>
        </Paper>
    </Grid>
  )
}

export default Profile;