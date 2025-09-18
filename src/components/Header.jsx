
import profPic from '../assets/profpic.png'

import { Box, Stack, IconButton, Typography, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#1c1f26",
        color: "#fff",
      }}
    >
      {/* NAVBAR */}
      <Box
        display="flex"
        justifyContent="flex-end"
        gap={4}
        fontSize="1rem"
        px={{ xs: 2, md: 6 }}
        py={3}
      >
        <Typography variant="body1" sx={{ cursor: "pointer", fontWeight: 500 }}>
          Servicios
        </Typography>
        <Typography
          variant="body1"
          sx={{ cursor: "pointer", opacity: 0.6 }}
        >
          Proyectos
        </Typography>
        
      </Box>

      {/* CONTENIDO PRINCIPAL */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        px={{ xs: 2, md: 6 }}
        pb={6}
      >
        {/* FOTO como fondo en móvil */}
        <Box
          sx={{
            width: '300px',
            height: { xs: "300px", md: "250px" },
            borderRadius: { xs: 0, md: "12px" },
            boxShadow: { md: "0px 8px 24px rgba(0,0,0,0.4)" },
            backgroundImage: {
              xs: `url(${profPic})`,
              md: `url(${profPic})`,
            },
            backgroundSize: {md:"cover", xs:"cover"},
            backgroundPosition: "end",
            flexShrink: 0,
          }}
        />

        {/* TEXTO */}
        <Box flex={1} ml={{ md: 6 }} mt={{ xs: 4, md: 0 }} textAlign={{ xs: "center", md: "left" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "700",
              fontSize: { xs: "2rem", md: "3rem" },
              lineHeight: 1.1,
              mb: 2,
            }}
          >
            Jose  Daniel Mejia.
          </Typography>


          <Typography
            variant="h6"
            sx={{
              fontWeight: "600",
              mb: 2,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Desarrollador Jr.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#aaa",
              maxWidth: "500px",
              lineHeight: 1.6,
              mb: 3,
              mx: { xs: "auto", md: 0 },
            }}
          >
            Apasionado del desarrollo de software con ganas de seguir
            aprendiendo y construyendo soluciones que generen impacto.
          </Typography>

          <Button
            variant="text"
            sx={{
              color: "#facc15",
              fontWeight: "600",
              textTransform: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Acerca de mí →
          </Button>

          {/* ICONOS */}
          <Stack
            direction="row"
            spacing={2}
            mt={3}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <IconButton
              href="https://github.com/jdmc-unah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon sx={{ color: "#60a5fa", fontSize: 28 }} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/jos%C3%A9-daniel-mejia-923994204/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon sx={{ color: "#60a5fa", fontSize: 28 }} />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
