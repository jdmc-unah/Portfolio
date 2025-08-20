import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import LanguageIcon from '@mui/icons-material/Language';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ComputerIcon from '@mui/icons-material/Computer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


const About=()=> {
  return (
    <section style={{ padding: '2rem'  }}  >

      <Box maxWidth="xxl" display={'flex'}  flexWrap={'wrap'} alignItems={'center'} justifyContent={'space-evenly'}  >

        <Box maxWidth={450} textAlign={'center'} >
          <Typography variant="h3" color="initial" textAlign={'center'}>Sobre mí</Typography>
          <p>Soy un estudiante de Ingeniería en sistemas con una creciente experiencia en el análisis de datos,
            desarrollo de software y gestión de bases de datos. 
            Hábil aprovechando herramientas y tecnologías modernas para construir soluciones eficientes a través de multiples plataformas.
           <br /> <br /> Actualmente enfocado en expandir mi conocimiento técnico mientras contribuyo
            significativamente a proyectos innovadores.
          </p>
        </Box>

        <Box maxWidth={450}   >
          
          {/* <Box display={'flex'} justifyItems={'center'} >
            <Typography fontSize={28} color="initial"> 
              Plataformas
            </Typography>
          </Box> */}
          <Typography variant="h3"  color="initial" textAlign={'center'}> 
            Plataformas
          </Typography>

          

           <List>
            
            <ListItem disablePadding>
              <ListItemAvatar>
                  <Avatar sx={{backgroundColor:window.primary}} >
                    <LanguageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Web" secondary="React con Node.js" />
              {/* <ListItemButton>
                
              </ListItemButton> */}
            </ListItem>

            <ListItem disablePadding>
              <ListItemAvatar>
                <Avatar sx={{backgroundColor:window.primary}}>
                  <PhoneAndroidIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Móvil" secondary="Flutter con Firebase" />
              
            </ListItem>

            <ListItem disablePadding>
               <ListItemAvatar>
                <Avatar sx={{backgroundColor:window.primary}}>
                  <ComputerIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Escritorio" secondary="Windows Form con C#" />
              
            </ListItem>

            

           

          </List>
          
        </Box>

        
      </Box>
    </section>
  );
}

export default About;