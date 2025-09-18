

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import aboutImg from "../assets/aboutPic.png"; 

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        backgroundColor: "#f9fafb",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
          gap={6}
          alignItems="center"
        >
          {/* Imagen */}
          <Box
            component="img"
            src={aboutImg}
            alt="About me"
            sx={{
              width: "100%",
              borderRadius: 4,
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              objectFit: "contain",
              maxHeight: { xs: 300, md: 400 },
            }}
          />

          {/* Texto */}
          <Box>
            <Typography
              variant="h4"
              fontWeight="700"
              gutterBottom
              sx={{ color: "#111" }}
            >
              <span style={{ color: "#60a5fa" }}>Acerca de </span> mí
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#555",
                lineHeight: 1.7,
                maxWidth: 600,
              }}
            >
            Soy un estudiante de Ingeniería en sistemas con una creciente experiencia en el análisis de datos,
            desarrollo de software y gestión de bases de datos. 
            Hábil aprovechando herramientas y tecnologías modernas para construir soluciones eficientes a través de multiples plataformas.
           <br /> <br /> Actualmente enfocado en expandir mi conocimiento técnico mientras contribuyo
            significativamente a proyectos innovadores.
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default About;
