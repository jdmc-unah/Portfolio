
import { Box, Typography } from "@mui/material";
import fondo from '../assets/foooter-bg.jpg'

const Footer = ()=>{
    return(

<Box
      component="footer"
      sx={{
        position: "relative",
        backgroundImage: `url(${fondo})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        py: 4,
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="body1">
          © 2025 - jdmc 
        </Typography>
        <Typography variant="body2">
          Desarrollado con React & MUI
        </Typography>
      </Box>
    </Box>
    )

}

export default Footer