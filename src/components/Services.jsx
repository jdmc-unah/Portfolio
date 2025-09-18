import  { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { pink, green, blue, orange } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BuildIcon from "@mui/icons-material/Build";
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import LanguageIcon from '@mui/icons-material/Language';
import AndroidIcon from '@mui/icons-material/Android';
import { motion } from "framer-motion";


// Lista de servicios
const services = [
  {
    id: 1,
    title: "UI/UX",
    description: "Experiencias visuales modernas, intuitivas y atractivas.",
    detailed:
      "Ofrezco diseños pensados en la usabilidad y experiencia del usuario, asegurando que cada interacción sea intuitiva y agradable.",
    icon: <FavoriteIcon sx={{ fontSize: 40, color: pink[500] }} />,
    color: pink[50],
    hover: pink[100],
  },
  {
    id: 2,
    title: "Desarrollo Web",
    description: "Aplicaciones rápidas, seguras y escalables.",
    detailed:
      "Construyo aplicaciones con tecnologías modernas como React, Node.js y bases de datos escalables (MongoDB, SQL). Siempre priorizando seguridad, velocidad y mantenimiento fácil.",
    icon: <LanguageIcon sx={{ fontSize: 40, color: blue[500] }} />,
    color: blue[50],
    hover: blue[100],
  },
  {
    id: 3,
    title: "Apps Android",
    description: "Rendimiento nativo, diseño moderno y autenticación segura ",
    detailed:
      "Usando Flutter y Firebase integro las mejores funcionalidades para que tu idea se convierta en una app profesional lista para crecer contigo.",
    icon: <AndroidIcon sx={{ fontSize: 40, color: green[500] }} />,
    color: green[50],
    hover: green[100],
  },
  {
    id: 4,
    title: "Desarrollos .NET",
    description: "Apps de escritorio y APIs robustas en .NET para optimizar tu negocio.",
    detailed:
      "Con .NET obtienes rendimiento, estabilidad y soporte a largo plazo para impulsar la eficiencia de tu negocio.",
    icon: <LaptopChromebookIcon sx={{ fontSize: 40, color: orange[500] }} />,
    color: orange[50],
    hover: orange[100],
  },
];

// Tarjeta individual con flip + animación entrada + hover
const ServiceCard = ({ service, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    
    <motion.div
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{
        position: "relative",
        width: "100%",
        height: "250px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* FRONT */}
      <motion.div
        onClick={() => setFlipped(true)}
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
        <Typography textAlign={'center'} variant="h6" fontWeight="600">
          {service.title}
        </Typography>
        <Typography  textAlign={'center'} variant="body2" sx={{ color: "#666", mb: 2 }}>
          {service.description}
        </Typography>

        <Box sx={{display:  'flex', justifyContent: 'flex-end'}} >
      
        </Box>
        
      </motion.div>

      {/* BACK */}
      <Box
        onClick={() => setFlipped(false)}
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
        textAlign={'justify'}
          variant="body2"
          sx={{ color: "#444", flexGrow: 1, mb: 2 }}
        >
          {service.detailed}
        </Typography>
        
      </Box>
    </motion.div>
  );
};

// Componente principal
const Services = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 6 }, backgroundColor: "#f8fafc" }}>
      <Typography
        variant="h4"
        fontWeight="700"
        align="center"
        sx={{ mb: 6 }}
        color="#1c1f26"
        py={2}
      >
        Mis <span style={{ color: "#60a5fa" }}>Servicios</span>
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
