import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack';

import profPic from '../assets/profpic.png'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const  Header = ()=> {

  return (
    <header style={{ padding: '2rem', backgroundColor: window.primary, color: window.custom.white }}>
      <Box maxWidth="xxl" display={'flex'} alignItems={'center'} justifyContent={'center'} textAlign={'center'} >

         <Avatar  //todo mejorar la imagen
          alt="Jose Mejia"
          src={profPic} 
          sx={{ width: 170, height: 170 }}
        />
        <Box maxWidth="xxl" justifyItems={'center'}>
          <h1>Jose Daniel Mejia</h1>
          <p>Desarrollador Jr.</p>

          <Stack direction={'row'} spacing={1}>
            <IconButton href='https://github.com/jdmc-unah' aria-label="" onClick={()=>{}} >
              <GitHubIcon sx={{ color: window.custom.blueLight }} />
            </IconButton>
            <IconButton href='https://www.linkedin.com/in/jos%C3%A9-daniel-mejia-923994204/' aria-label="" onClick={()=>{}} >
              <LinkedInIcon sx={{ color: window.custom.blueLight }}/>
            </IconButton>
          </Stack>
        </Box>

      </Box>
      
    </header>
  );
}

export default Header;