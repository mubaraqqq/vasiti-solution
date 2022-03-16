import React from 'react';
import { Stack, Typography, Box, Button } from '@mui/material'
import img1 from '../images/woman-shoppingbag-card 1.png';
import img2 from '../images/Vector 3.png';
import ellipse from '../images/Ellipse 8.png';

const Body3 = () => {
    return (
        <Stack direction='row' sx={{backgroundColor: '#FFF8F5', width: '100%'}}>
            <Box sx={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'center', flexWrap: 'wrap'}}>
                <Box sx={{width: '375px', height: '39px'}}>
                    <Typography className='box3-header' variant='h2' component='h2'>
                        Josiah’s Experience
                    </Typography>
                    <Button variant='outlined' sx={{color: '#FF5C00', border: '1px solid rgba(255, 92, 0, 0.4)', width: '95px', height: '30px'}}>VENDOR</Button>
                </Box>
                <Box sx={{width: '417px', height: '216px'}}>
                    <Typography className='box3-body' variant='body2'>
                        I had the best experience shopping with vasiti. Usability of the website was great, 
                        very good customer service, an all round great experience. I would definately be coming back! 
                        I had the best experience shopping with vasiti. Usability of the website was great, very good 
                        customer service, an all round great experience. I would definately be coming back!
                    </Typography>
                </Box> 
                <Box>
                    <Typography className="box3-link">SHARE YOUR OWN STORY</Typography>
                    <img className='flair' src={img2} alt="flair" />
                </Box>
            </Box> 
            <Box className='box3-img' sx={{ width: '500px', height: '400px' }}>
                <img src={img1} width='500px' height='400px' alt=""/> 
            </Box>
        </Stack>
    )
}

export default Body3