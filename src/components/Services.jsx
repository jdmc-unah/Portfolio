import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { pink, green, blue, orange } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BuildIcon from "@mui/icons-material/Build";
import PersonIcon from "@mui/icons-material/Person";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { motion } from "framer-motion";

// Lista de servicios
const services = [
  {
    id: 1,
    title: "Diseño UI/UX",
    description: "Experiencias visuales modernas, intuitivas y atractivas.",
    detailed:
      "Ofrezco diseños pensados en la usabilidad y experiencia del usuario, asegurando que cada interacción sea intuitiva y agradable. Desde wireframes hasta prototipos interactivos.",
    icon: <FavoriteIcon sx={{ fontSize: 40, color: pink[500] }} />,
    color: pink[50],
    hover: pink[100],
  },
  {
    id: 2,
    title: "Desarrollo Web",
    description: "Aplicaciones rápidas, seguras y escalables.",
    detailed:
      "Construyo aplicaciones con tecnologías modernas como React, Node.js y bases de datos escalables. Siempre priorizando seguridad, velocidad y mantenimiento fácil.",
    icon: <BuildIcon sx={{ fontSize: 40, color: green[500] }} />,
    color: green[50],
    hover: green[100],
  },
  {
    id: 3,
    title: "Consultoría",
    description: "Asesoría estratégica para potenciar tu negocio digital.",
    detailed:
      "Analizo tus procesos y herramientas para proponerte soluciones que optimicen costos, mejoren eficiencia y aprovechen el potencial digital de tu empresa.",
    icon: <PersonIcon sx={{ fontSize: 40, color: blue[500] }} />,
    color: blue[50],
    hover: blue[100],
  },
  {
    id: 4,
    title: "Innovación",
    description: "Ideas creativas que transforman problemas en soluciones.",
    detailed:
      "Trabajo contigo para transformar desafíos en oportunidades mediante soluciones digitales innovadoras y sostenibles que agreguen valor real.",
    icon: <LightbulbIcon sx={{ fontSize: 40, color: orange[500] }} />,
    color: orange[50],
    hover: orange[100],
  },
];

// Tarjeta individual con flip + animación entrada + hover
const ServiceCard = ({ service, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      style={{
        perspective: "1000px",
        width: "100%",
        maxWidth: 320,
        margin: "auto",
      }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          position: "relative",
          width: "100%",
          height: "320px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT */}
        <motion.div
          whileHover={{ backgroundColor: service.hover }}
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            borderRadius: 12,
            boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              backgroundColor: service.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            {service.icon}
          </Box>
          <Typography variant="h6" fontWeight="600">
            {service.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
            {service.description}
          </Typography>
          <Button
            onClick={() => setFlipped(true)}
            sx={{ color: "#3a1cbcff", fontWeight: "600", textTransform: "none" }}
          >
            Leer más →
          </Button>
        </motion.div>

        {/* BACK */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: 3,
            boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
            backgroundColor: "#f9fafb",
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle1" fontWeight="700" mb={2}>
            {service.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#444", flexGrow: 1, mb: 2 }}
          >
            {service.detailed}
          </Typography>
          <Button
            onClick={() => setFlipped(false)}
            sx={{ color: "#3a1cbcff", fontWeight: "600", textTransform: "none" }}
          >
            ← Volver
          </Button>
        </Box>
      </motion.div>
    </motion.div>
  );
};

// Componente principal
const Services = () => {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 }, backgroundColor: "#f8fafc" }}>
      <Typography
        variant="h4"
        fontWeight="700"
        align="center"
        sx={{ mb: 6 }}
      >
        Mis <span style={{ color: "#3a1cbcff" }}>Servicios</span>
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          sm: "1fr 1fr",
          md: "repeat(4, 1fr)",
        }}
        gap={{ xs: 4, md: 6 }}
      >
        {services.map((srv, i) => (
          <ServiceCard key={srv.id} service={srv} index={i} />
        ))}
      </Box>
    </Box>
  );
};

export default Services;
