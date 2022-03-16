import React from 'react';
import { Stack, Typography, Box } from '@mui/material'
import img from '../images/Testimonial image desktop.png';

const Body1 = () => {
  return (
    <Stack direction='row'>
      <Box sx={{width: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignContent: 'flex-end', flexWrap: 'wrap'}}>
        <Box sx={{width: '586px', height: '180px'}}>
          <Typography className='box1-header' variant='h2' component='h2'>
            Amazing Experiences from Our Wonderful Customers
          </Typography>
        </Box>
        <Box sx={{width: '489px', height: '62px'}}>
          <Typography className='box1-body' variant='body2'>
            Here is what customers and vendors are saying about us, you can share your stories with us too.
          </Typography>
        </Box> 
      </Box>
      <img src={img} alt="" width='500px' height='500px'/>  
    </Stack>
  )
}

export default Body1