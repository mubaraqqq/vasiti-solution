import React from 'react';
import { Button, Stack, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#242120',
  fontSize: '13px',
  fontWeight: '400',
  lineHeight: '15.23px',
  boxShadow: 'none',
  cursor: 'pointer',
  '& :hover': {
    backgroundColor: 'grey'
  }
}));

const Header = () => {
  return (
    <>
      <Stack direction='row' spacing={2} sx={{padding: '1em', justifyContent: 'flex-end'}}>
        <Item className='item'>ABOUT US</Item>
        <Item className='item'>STORIES</Item>
        <Item className='item'>CONTACT</Item>
        <Item className='item' sx={{marginLeft: '20px'}}>LOG IN</Item>
        <Button className='nav-button' sx={{padding: '0 8px', color: 'white', backgroundColor: '#FF5C00'}}>SIGN UP</Button>
      </Stack>
      <Box className='bottom-header'>
        <span>MARKETPLACE</span>
        <span>WHOLESALE CENTER</span>
        <span>SELLER CENTER</span>
        <span>SERVICES</span>
        <span>INTERNSHIPS</span>
        <span>EVENTS</span>
      </Box>
    </>
  )
}

export default Header;