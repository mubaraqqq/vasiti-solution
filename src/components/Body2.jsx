import React from 'react';
import { Stack, Typography, Box, Button } from '@mui/material'
import img1 from '../images/black-beautiful-ladies-smiling 1.png';
import img2 from '../images/Vector 3.png';
import ellipse from '../images/Ellipse 8.png';

const Body2 = () => {
    return (
        <Stack direction='row' sx={{backgroundColor: '#222222', width: '100%'}}>
        <Box className='box2-img' sx={{ width: '617px', height: '572px' }}>
            <img src={img1} width='600px' height='572px' alt=""/> 
        </Box>
        <Box sx={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignContent: 'center', flexWrap: 'wrap'}}>
            <Box sx={{width: '375px', height: '39px'}}>
                <Typography className='box2-header' variant='h2' component='h2'>
                    Tolu & Joy’s Experience
                </Typography>
                <Button variant='outlined' sx={{color: 'white', border: '1px solid rgba(255, 255, 255, 0.4)', width: '95px', height: '30px'}}>CUSTOMER</Button>
            </Box>
            <Box sx={{width: '417px', height: '216px'}}>
                <Typography className='box2-body' variant='body2'>
                    I had the best experience shopping with vasiti. Usability of the website was great, 
                    very good customer service, an all round great experience. I would definately be coming back! 
                    I had the best experience shopping with vasiti. Usability of the website was great, very good 
                    customer service, an all round great experience. I would definately be coming back!
                </Typography>
            </Box> 
            <Box>
                <Typography className="box2-link">SHARE YOUR OWN STORY</Typography>
                <img className='flair' src={img2} alt="flair" />
            </Box>
        </Box>
        </Stack>
    )
}

export default Body2