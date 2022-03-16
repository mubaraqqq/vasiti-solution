import React from 'react';
import './App.css';
import { Box, Stack, Grid } from '@mui/material';
import Header from './components/Header';
import Body1 from './components/Body1';
import Body2 from './components/Body2';
import Body3 from './components/Body3';
import Profile from './components/Profile';
import img1 from './images/Ellipse 22.png';
import Adun from './images/Adun.png';
import Adetola from './images/Adetola.png';
import Chidi from './images/Chidi.png';
import Emmanuel from './images/Emmanuel.png';
import Chisom from './images/Chisom.png';
import Amos from './images/Amos.png';
import Karen from './images/Karen.png';
import Feyisola from './images/Feyisola.png';
import Oluchi from './images/Oluchi.png';
import Prom from './images/Promise.png';
import Temi from './images/Temi.png';

const App = () => {
  return (
    <>
      <Header />
      <Body1 />
      <Body2 />
      <Box>
        <Grid container spacing={3} sx={{padding: '2em 0 2em 4em', justifyContent: 'center'}}>
          <Profile src={img1} name='Joseph Ike' location='Ikeja' customer/>
          <Profile src={Adetola} name='Adetola Fashina' location='Ibadan' customer/>
          <Profile src={Emmanuel} name='Emmanuel Fayemi' location='Akoka' customer/>
          <Profile src={Chisom} name='Chisom Obilor' location='Magodo'/>
          <Profile src={Adun} name='Adunoluwa Adeyemi' location='Iwo Road'/>
          <Profile src={Chidi} name='Chidi Okeke' location='Somolu'/>
        </Grid>
      </Box>
      <Body3 />
      <Box>
        <Grid container spacing={3} sx={{padding: '2em 0 2em 4em', justifyContent: 'center'}}>
          <Profile src={Temi} name='Temi Obadofin' />
          <Profile src={Prom} name='Promise Ejiofor' />
          <Profile src={Feyisola} name='Feyisola Arinola' />
          <Profile src={Karen} name='Karen Ibeh' />
          <Profile src={Oluchi} name='Oluchi Uzo' />
          <Profile src={Amos} name='Amos Okafor' />
        </Grid>
      </Box>
    </>
  )
}

export default App